import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BLOGCATEGORIES_QUERY } from '../../../graphql/query';
import { colors } from '../../design';

type BlogCategoryProps = {
  categoryId: string;
};

export const BlogCategory: FC<BlogCategoryProps> = (props) => {
  const { categoryId } = props;
  const { error, loading, data } = useQuery(BLOGCATEGORIES_QUERY, {
    fetchPolicy: 'network-only',
  });
  if (loading) {
    return <></>;
  }

  if (error) {
    console.log('error');
  }

  const { blogCategories } = data;

  const [category] = blogCategories.filter((item) => item._id === categoryId);

  return <Title>{category.title}</Title>;
};

const Title = styled.span`
  color: ${colors.secondary};
  font-size: 0.875rem;
`;
