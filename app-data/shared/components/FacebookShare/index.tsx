import React, { FC } from 'react';
import { FacebookShareButton } from 'react-share';
import styled from 'styled-components';
import { colors } from '../../design';

type FacebookShareProps = {
  url: string;
  quote: string;
  hashtag: string;
  children: any;
  className?: any;
};

export const FacebookShare: FC<FacebookShareProps> = (props) => {
  const { className, url, quote, hashtag } = props;
  return (
    <StyledFacebookShareButton
      className={className}
      url={url}
      quote={quote}
      hashtag={hashtag}
    >
      {props.children}
    </StyledFacebookShareButton>
  );
};

const StyledFacebookShareButton = styled(FacebookShareButton)`
  padding: 14px 46px !important;
  font-size: 0.875rem !important;
  color: ${colors.textInverted} !important;
  background-color: #3b5998 !important;
  transition: background-color 0.3s ease-out;
  border-radius: 25px !important;
  border: none;
  box-shadow: none !important;
  font-weight: 400;
  &:hover {
    background-color: ${colors.primaryHover} !important;
  }
  &:focus {
    background-color: ${colors.primaryHover} !important;
  }
  &:active {
    background-color: ${colors.primaryHover} !important;
  }
`;

const Icon = styled.img`
  width: 24px;
  margin-left: 12px;
  position: relative;
`;
