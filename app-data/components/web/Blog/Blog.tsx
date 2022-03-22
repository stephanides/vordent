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
      <PageHeader
        pretitle="Lorem ipsum"
        title="Blog"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley"
      />
      <BlogsWrapper>
        <BlogsContent blogs={data.blogs} />
      </BlogsWrapper>
    </CustomContainer>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(214, 223, 229, 0.72);
`;

const BlogsWrapper = styled.div`
  margin: 40px 0 70px 0;
`;
