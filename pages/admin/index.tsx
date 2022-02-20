import Head from 'next/head';
import React, { FC } from 'react';
import { AdminLayout } from '../../app-data/shared/components/AdminLayout';
import { useAuthenticated } from '../../app-data/shared/hooks';
import { AdminPagePros } from '../../app-data/shared/types';

const AdminSite: FC<AdminPagePros> = (props) => {
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
      <AdminLayout>
        <h3>TODO</h3>
      </AdminLayout>
    </>
  );
};

export default AdminSite;
