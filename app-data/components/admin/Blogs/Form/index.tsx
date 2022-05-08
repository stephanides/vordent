import { useMutation } from '@apollo/client';
import { FormControl, IconButton, Typography } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import { SnackbarKey, useSnackbar } from 'notistack';
import React, { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import slugify from 'slugify';
import styled from 'styled-components';
import { CREATE_BLOG_MUTATION } from '../../../../graphql/mutation';
import { BLOGS_QUERY } from '../../../../graphql/query';
import {
  borderBoxShadow,
  borderRadius,
  Heading4,
  Heading6,
  PrimaryButton,
  StyledTextField,
  useAdminStyles,
} from '../../../../shared/design';
import { bytesToSize } from '../../../../shared/helpers/formatters';
import toBase64 from '../../../../shared/helpers/toBase64';
import { InputBlog } from '../../../../shared/types';
import { GalleryItems } from '../../Gallery/GalleryItems';
import CategorySelector from './CategorySelector';

const Wrapper = styled.div`
  margin: 16px;
  margin-bottom: 32px;
  padding: 32px 16px;
  background: white;
  ${borderBoxShadow};
  ${borderRadius};
`;

const ImageOptionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100;
  border-top: 1px solid #dee4e8;
  margin-top: 24px;
  padding: 40px 0 0px 0;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  padding: 6px 24px;
`;

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor, Editor),
  { ssr: false }
);

export const BlogForm = () => {
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [createBlog] = useMutation(CREATE_BLOG_MUTATION, {
    refetchQueries: [{ query: BLOGS_QUERY }],
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [modal, setModal] = useState(false);
  const [blogFormData, setBlogFormData] = useState<InputBlog>({
    title: '',
    category: '',
    description: '',
    slug: '',
    image: {},
    content: '',
    readingTime: null,
  });

  const toggle = () => setModal(!modal);

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
      await createBlog({
        variables: { blogInput: blogFormData },
      });
      enqueueSnackbar('Blog bol úspešne vytvorený', {
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
                placeholder="Nadpis blogu"
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
                placeholder="Slug"
                fullWidth
                disabled
                value={blogFormData.slug}
              />
            </Col>
            <Col size={12} md={12}>
              <StyledTextField
                className={classes.button}
                variant="outlined"
                placeholder="Krátky popis blogu"
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
              <ImageOptionHolder>
                <Heading6 className="mt-4">Obsah blogu</Heading6>
                <StyledPrimaryButton onClick={toggle} size="small">
                  Galéria
                </StyledPrimaryButton>
              </ImageOptionHolder>
              <Editor
                editorState={editorState}
                wrapperClassName="description-wrapper"
                editorClassName="description-editor"
                onEditorStateChange={onEditorStateChange}
              />
            </Col>
            <Col size={12} md={12}>
              <div className="d-flex align-items-center mt-4">
                <Heading6 className="´mt-4">Vložiť obrázok blogu:</Heading6>
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
              <PrimaryButton type="submit">Vytvoriť</PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Form>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <ModalBody>
          <GalleryItems count={4} />
          <ButtonHolder>
            <PrimaryButton onClick={toggle}>Zatvoriť</PrimaryButton>
          </ButtonHolder>
        </ModalBody>
      </Modal>
    </Wrapper>
  );
};
