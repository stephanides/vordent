import Head from 'next/head';
import React, { FC } from 'react';
import { Blogs } from '../../../app-data/components/admin/Blogs';
import { AdminLayout } from '../../../app-data/shared/components/AdminLayout';
import { useAuthenticated } from '../../../app-data/shared/hooks';
import { AdminPagePros } from '../../../app-data/shared/types';

const BlogsPage: FC<AdminPagePros> = () => {
  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Vordent - Administrácia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{' '}
      <AdminLayout title="Blogy">
        <Blogs />
      </AdminLayout>
    </>
  );
};

export default BlogsPage;
