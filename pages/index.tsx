import React from 'react';
import {
  BasicInfo,
  HomepageBlog,
  MainCarousel,
  OurServices,
} from '../app-data/components/web';
import { SiteLayout } from '../app-data/shared/components';

const Home = () => {
  return (
    <SiteLayout>
      <MainCarousel />
      <OurServices />
      <BasicInfo />
      <HomepageBlog />
    </SiteLayout>
  );
};

export default Home;
