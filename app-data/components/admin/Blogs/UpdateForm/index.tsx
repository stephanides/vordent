import { FormControl, IconButton, Typography } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  convertToRaw,
  EditorState,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import { SnackbarKey, useSnackbar } from 'notistack';
import React, { FC, useState } from 'react';
import { Container, Form, Row, Col } from 'reactstrap';
import slugify from 'slugify';
import styled from 'styled-components';
import { UPDATE_BLOG_MUTATION } from '../../../../graphql/mutation';
import { BLOGS_QUERY } from '../../../../graphql/query';
import {
  PrimaryButton,
  StyledTextField,
  useAdminStyles,
} from '../../../../shared/design';
import { bytesToSize } from '../../../../shared/helpers/formatters';
import toBase64 from '../../../../shared/helpers/toBase64';
import { Blog, InputBlog } from '../../../../shared/types';
import CategorySelector from '../Form/CategorySelector';
import { useMutation } from '@apollo/client';

const Wrapper = styled.div`
  margin: 32px 0;
  padding-bottom: 32px;
`;

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor, Editor),
  { ssr: false }
);

type BlogUpdateFormProps = {
  updateBlogData: Blog;
};

export const BlogUpdateForm: FC<BlogUpdateFormProps> = (props) => {
  const { updateBlogData } = props;
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [updateBlog] = useMutation(UPDATE_BLOG_MUTATION, {
    refetchQueries: [{ query: BLOGS_QUERY }],
  });
  const oldDesc = updateBlogData ? updateBlogData.content : '';
  const blocksFromHtml = convertFromHTML(oldDesc);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      )
    )
  );
  const [blogFormData, setBlogFormData] = useState<InputBlog>({
    title: updateBlogData.title || '',
    slug: updateBlogData.slug || '',
    image: updateBlogData.image || {},
    content: updateBlogData.content || '',
    category: updateBlogData.category || '',
    description: updateBlogData.description || '',
    readingTime: updateBlogData.readingTime || null,
  });

  console.log(blogFormData);

  const onEditorStateChange = (state: EditorState) => {
    let content = draftToHtml(convertToRaw(state.getCurrentContent()));
    setEditorState(state);
    setBlogFormData({
      ...blogFormData,
      content: content,
    });
    setEditorState(state);
  };

  const handleSubmitForm: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void | SnackbarKey> = async (event) => {
    event.preventDefault();
    try {
      await updateBlog({
        variables: { id: updateBlogData._id, blogInput: blogFormData },
      });
      enqueueSnackbar('Blog bol úspešne upravený', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err.message);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
  };

  const handleAddMainImageData: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void> = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    let i = 0;
    const b64 = await toBase64(files[i]);
    const imgData = {
      ext: files[i].type.replace('image/', ''),
      size: bytesToSize(files[i].size),
      title: files[i].name.split('.')[files[i].name.split('.').length - 2],
      base64: b64,
    };

    setBlogFormData({
      ...blogFormData,
      image: imgData,
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmitForm(e)}>
        <Container fluid>
          <Row>
            <Col size={12} md={6}>
              <StyledTextField
                className={classes.button}
                variant="outlined"
                label="Nadpis blogu"
                fullWidth
                required
                value={blogFormData.title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setBlogFormData({
                    ...blogFormData,
                    title: event.currentTarget.value as string,
                    slug: slugify(
                      event.currentTarget.value as string
                    ).toLowerCase(),
                  });
                }}
              />
            </Col>
            <Col size={12} md={6}>
              <StyledTextField
                className={classes.button}
                variant="outlined"
                label="Slug"
                fullWidth
                disabled
                value={blogFormData.slug}
              />
            </Col>
            <Col size={12} md={12}>
              <StyledTextField
                className={classes.button}
                variant="outlined"
                label="Krátky popis blogu"
                fullWidth
                required
                value={blogFormData.description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setBlogFormData({
                    ...blogFormData,
                    description: event.currentTarget.value as string,
                  });
                }}
              />
            </Col>
            <Col size={12} md={6}>
              <CategorySelector
                blogData={blogFormData}
                setBlogData={setBlogFormData}
              />
            </Col>
            <Col size={12} md={6}>
              <StyledTextField
                className={classes.button}
                variant="outlined"
                placeholder="Čas čítania"
                fullWidth
                type="number"
                required
                value={blogFormData.readingTime}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setBlogFormData({
                    ...blogFormData,
                    readingTime: Number(event.currentTarget.value),
                  });
                }}
              />
            </Col>
            <Col size={12} xs={12}>
              <Typography variant="h6">Text blogu</Typography>
              <Editor
                editorState={editorState}
                wrapperClassName="description-wrapper"
                editorClassName="description-editor"
                onEditorStateChange={onEditorStateChange}
              />
            </Col>
            <Col size={12} md={12}>
              <div className="d-flex align-items-center mt-4">
                <p style={{ fontWeight: 'bold' }}>Vložiť obrázok blogu:</p>
                <FormControl>
                  <input
                    accept="image/*"
                    className={classes.imageInput}
                    id="icon-main-file"
                    type="file"
                    onChange={handleAddMainImageData}
                  />
                  <label htmlFor="icon-main-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </FormControl>
              </div>
              {blogFormData.image && (
                <div>
                  <img
                    src={blogFormData.image.path || blogFormData.image.base64}
                    style={{ maxWidth: '100%', marginBottom: '16px' }}
                  />
                </div>
              )}
            </Col>
            <Col size={12} sm={12}>
              <PrimaryButton type="submit">Upraviť</PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Form>
    </Wrapper>
  );
};
