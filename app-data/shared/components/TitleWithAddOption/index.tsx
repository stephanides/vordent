import { IconButton, Link } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React, { FC } from 'react';
import styled from 'styled-components';

type TitleWithAddOptionProps = {
  title: string;
  href?: string;
  onClick?: () => void;
};

export const TitleWithAddOption: FC<TitleWithAddOptionProps> = (props) => {
  const { title, href, onClick } = props;
  return (
    <HeadingHolder>
      <Heading>{title}</Heading>
      {onClick ? (
        <IconButton onClick={onClick}>
          <AddCircleOutlineIcon />
        </IconButton>
      ) : (
        <Link href={href}>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </Link>
      )}
    </HeadingHolder>
  );
};

const HeadingHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
`;
