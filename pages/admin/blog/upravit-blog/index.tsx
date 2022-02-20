import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogUpdateForm } from '../../../../app-data/components/admin/Blogs/UpdateForm';
import { BLOG_QUERY } from '../../../../app-data/graphql/query';
import { AdminLayout } from '../../../../app-data/shared/components/AdminLayout';
import { useAuthenticated } from '../../../../app-data/shared/hooks';
import { AdminPagePros } from '../../../../app-data/shared/types';

const UpdateBlog: FC<AdminPagePros> = () => {
  const router = useRouter();
  const { query } = router;
  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return null;
  }

  const { error, loading, data } = useQuery(BLOG_QUERY, {
    variables: { id: query.id },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <>TODO</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blog } = data;
  return (
    <>
      <Head>
        <title>Vordent - Administrácia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{' '}
      <AdminLayout title="Upraviť produkt">
        <BlogUpdateForm updateBlogData={blog} />
      </AdminLayout>
    </>
  );
};

export default UpdateBlog;
