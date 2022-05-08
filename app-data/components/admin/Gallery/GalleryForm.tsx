import { useMutation } from '@apollo/client';
import { SnackbarKey, useSnackbar } from 'notistack';
import { Container, Form, Row, Col } from 'reactstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { CREATE_GALLERY_ITEM_MUTATION } from '../../../graphql/mutation';
import { GALLERY_ITEMS_QUERY } from '../../../graphql/query';
import { bytesToSize } from '../../../shared/helpers/formatters';
import toBase64 from '../../../shared/helpers/toBase64';
import {
  Heading6,
  PrimaryButton,
  useAdminStyles,
} from '../../../shared/design';
import { FormControl, IconButton } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export const GalleryForm = () => {
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [createGalleryItem] = useMutation(CREATE_GALLERY_ITEM_MUTATION, {
    refetchQueries: [{ query: GALLERY_ITEMS_QUERY }],
  });
  const [itemFormData, setItemFormData] = useState<any>({
    image: {},
  });

  const handleSubmitForm: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void | SnackbarKey> = async (event) => {
    event.preventDefault();
    try {
      await createGalleryItem({
        variables: { galleryItemInput: itemFormData },
      });
      enqueueSnackbar('Obrázok bol úspešne pridaný', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err.message);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
  };

  const handleAddImageData: (
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

    setItemFormData({
      ...itemFormData,
      image: imgData,
    });
  };
  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmitForm(e)}>
        <Container fluid>
          <Row>
            <Col size={12} md={12}>
              <div className="d-flex align-items-center mt-4">
                <Heading6>Vložiť obrázok</Heading6>
                <FormControl>
                  <input
                    accept="image/*"
                    className={classes.imageInput}
                    id="icon-main-file"
                    type="file"
                    onChange={handleAddImageData}
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
              {itemFormData.image && (
                <div>
                  <img
                    src={itemFormData.image.path || itemFormData.image.base64}
                    style={{ maxWidth: '100%', marginBottom: '16px' }}
                  />
                </div>
              )}
            </Col>
            <Col size={12} sm={12}>
              <PrimaryButton disabled={!itemFormData.image.title} type="submit">
                Vytvoriť
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
