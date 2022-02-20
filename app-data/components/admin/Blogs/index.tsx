import React from 'react';
import styled from 'styled-components';
import { borderBoxShadow, borderRadius } from '../../../shared/design';
import { BlogCategories } from './BlogCategories';
import { BlogsList } from './List';

export const Blogs = () => {
  return (
    <>
      <Holder>
        <BlogCategories />
      </Holder>
      <Holder>
        <BlogsList />
      </Holder>
    </>
  );
};

const Holder = styled.div`
  background: white;
  padding: 32px;
  ${borderBoxShadow};
  ${borderRadius};
  margin: 16px;
  margin-bottom: 32px;
`;
