import { SnackbarKey, useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Col, Container, Form, Row } from 'reactstrap';
import styled from 'styled-components';
import { CREATE_BLOGCATEGORY_MUTATION } from '../../../../../graphql/mutation';
import { BLOGCATEGORIES_QUERY } from '../../../../../graphql/query';
import {
  PrimaryButton,
  StyledTextField,
  useAdminStyles,
} from '../../../../../shared/design';
import { CategoryInput } from '../../../../../shared/types';

const Wrapper = styled(Container)`
  padding: 24px;
`;

type BlogCategoryFormProps = {
  onClose: () => void;
};

export const BlogCategoryForm = (props: BlogCategoryFormProps) => {
  const { onClose } = props;
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [createCategory] = useMutation(CREATE_BLOGCATEGORY_MUTATION, {
    refetchQueries: [{ query: BLOGCATEGORIES_QUERY }],
  });
  const [categoryFormData, setCategoryFormData] = useState<CategoryInput>({
    title: '',
  });

  const handleSubmitForm: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void | SnackbarKey> = async (event) => {
    event.preventDefault();
    try {
      await createCategory({
        variables: { blogCategoryInput: categoryFormData },
      });
      enqueueSnackbar('Kategória bola úspešne vytvorená', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err.message);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
    onClose();
  };

  return (
    <Wrapper>
      <Row>
        <Form style={{ width: '100%' }} onSubmit={(e) => handleSubmitForm(e)}>
          <Col size={12} md={12}>
            <StyledTextField
              className={classes.button}
              variant="outlined"
              placeholder="Názov kategorie"
              fullWidth
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCategoryFormData({
                  ...categoryFormData,
                  title: event.currentTarget.value as string,
                });
              }}
            />
          </Col>
          <Col size={12} md={12}>
            <PrimaryButton type="submit">Vytvoriť</PrimaryButton>
          </Col>
        </Form>
      </Row>
    </Wrapper>
  );
};
