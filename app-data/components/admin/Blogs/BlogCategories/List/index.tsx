import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { BLOGCATEGORIES_QUERY } from '../../../../../graphql/query';
import styled from 'styled-components';
import { Category } from '../../../../../shared/types';
import {
  REMOVE_BLOGCATEGORY_MUTATION,
  UPDATE_BLOGCATEGORY_MUTATION,
} from '../../../../../graphql/mutation';
import { useSnackbar } from 'notistack';
import { CategoryListItem } from './ListItem';
import { TitleWithAddOption } from '../../../../../shared/components';
import { useMutation, useQuery } from '@apollo/client';
import { AddBlogCategoryDialog } from './AddBlogCategoryDialog';

export const CategoriesList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const { error, loading, data } = useQuery(BLOGCATEGORIES_QUERY);
  const [removeCategory] = useMutation(REMOVE_BLOGCATEGORY_MUTATION, {
    refetchQueries: [{ query: BLOGCATEGORIES_QUERY }],
  });
  const [updateCategory] = useMutation(UPDATE_BLOGCATEGORY_MUTATION, {
    refetchQueries: [{ query: BLOGCATEGORIES_QUERY }],
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blogCategories } = data;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateItem: (
    _id: string,
    title: string
  ) => Promise<void> = async (_id, title) => {
    try {
      await updateCategory({
        variables: { _id, blogCategoryInput: { title: title } },
      });
      enqueueSnackbar('Kategória bola úspešne upravená', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
  };

  const handleRemoveItem: (_id: string) => Promise<void> = async (_id) => {
    try {
      await removeCategory({ variables: { _id } });
      enqueueSnackbar('Kategória bola úspešne odstránená', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <TitleWithAddOption title="Kategórie blogov" onClick={handleClickOpen} />
      <StyledList>
        {blogCategories.map((category: Category) => (
          <CategoryListItem
            key={category._id}
            category={category}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </StyledList>
      {blogCategories.length === 0 && (
        <NoCategories>Nie sú vytvorené žiadne kategórie</NoCategories>
      )}
      <AddBlogCategoryDialog open={open} onClose={handleClose} />
    </>
  );
};
const StyledList = styled(List)`
  width: 100%;
`;

const NoCategories = styled.h6``;

const TitleWrapper = styled.div`
  display: flex;
`;
