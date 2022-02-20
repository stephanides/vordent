import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { BLOGS_QUERY } from '../../../../graphql/query';
import { REMOVE_BLOG_MUTATION } from '../../../../graphql/mutation';
import { useSnackbar } from 'notistack';
import { Row } from 'reactstrap';
import { TitleWithAddOption } from '../../../../shared/components';
import { Blog } from '../../../../shared/types';
import { BlogListItem } from './Blog';

export const BlogsList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { error, loading, data } = useQuery(BLOGS_QUERY);
  const [removeRecipe] = useMutation(REMOVE_BLOG_MUTATION, {
    refetchQueries: [{ query: BLOGS_QUERY }],
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blogs } = data;

  const handleRemoveItem: (_id: string) => Promise<void> = async (_id) => {
    try {
      await removeRecipe({ variables: { _id } });
      enqueueSnackbar('Blog bol úspešne odstránený', {
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
      <TitleWithAddOption title="Blogy" href="/admin/blog/vytvorit-blog" />
      <Row>
        {blogs.map((blog: Blog) => (
          <BlogListItem
            key={blog._id}
            blog={blog}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </Row>
      {blogs.length === 0 && <h6>Nie sú vytvorené žiadne blogy</h6>}
    </>
  );
};
