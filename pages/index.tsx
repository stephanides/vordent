import React from 'react';
import { HomepageBlog, MainCarousel } from '../app-data/components/web';
import { SiteLayout } from '../app-data/shared/components';

const Home = () => {
  return (
    <SiteLayout>
      <MainCarousel />
      <HomepageBlog />
    </SiteLayout>
  );
};

export default Home;
