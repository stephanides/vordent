import React from 'react';
import styled from 'styled-components';
import { borderBoxShadow, borderRadius } from '../../../shared/design';
import { GalleryForm } from './GalleryForm';
import { GalleryItems } from './GalleryItems';

export const Gallery = () => {
  return (
    <>
      <Holder>
        <GalleryForm />
      </Holder>
      <Holder>
        <GalleryItems />
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
