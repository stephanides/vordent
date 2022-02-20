import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

type SiteLayoutProps = {
  children: ReactNode;
  title?: string;
  currentUrl?: string;
  previewImage?: string;
  description?: string;
};

export const SiteLayout: FC<SiteLayoutProps> = (props) => {
  const { title = 'Vordent', currentUrl, description, previewImage } = props;

  return (
    <>
      <NextSeo
        openGraph={{
          title: `Vorder - ${title}`,
          url: currentUrl,
          description: description,
          images: [
            {
              url: previewImage,
              width: 800,
              height: 600,
            },
          ],
          site_name: 'Vordent',
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <div style={{ minHeight: '50vh' }}>
        <Navigation />
        {props.children}
        <Footer />
      </div>
    </>
  );
};
