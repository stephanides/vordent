import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { BLOGS_QUERY } from '../../../graphql/query';
import { CustomContainer, PageHeader } from '../../../shared/components';
import { BlogsContent } from './BlogsContent';

export const Blog = () => {
  const { error, loading, data } = useQuery(BLOGS_QUERY);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <CustomContainer>
      <PageHeader pretitle="" title="Blog" description="" />
      <BlogsWrapper>
        <BlogsContent blogs={data.blogs} />
      </BlogsWrapper>
    </CustomContainer>
  );
};

const BlogsWrapper = styled.div`
  margin: 40px 0 70px 0;
`;
