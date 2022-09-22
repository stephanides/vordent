import { useQuery } from '@apollo/client';
import { Row } from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { BLOGS_QUERY } from '../../../graphql/query';
import { CustomContainer } from '../../../shared/components';
import { BlogThumbnail } from '../../../shared/components/BlogThumbnail';
import {
  PrimaryButton,
  sectionPadding,
  SectionTitle,
  ZoomOrnament,
} from '../../../shared/design';
import { Blog } from '../../../shared/types';

type RelatedBlogsProps = {
  actualBlog: string;
};

export const RelatedBlogs = (props: RelatedBlogsProps) => {
  const { actualBlog } = props;
  const { error, loading, data } = useQuery(BLOGS_QUERY);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blogs } = data;

  const filteredBlogs = blogs.filter((blog: Blog) => blog.slug !== actualBlog);
  const blogsToShow = filteredBlogs.slice(0, 3);
  return (
    <Wrapper>
      <SectionTitle>Ďalšie blogy</SectionTitle>
      <SvgHolder>
        <ZoomOrnament />
      </SvgHolder>
      <CustomContainer>
        <Row>
          {blogsToShow.map((blog: Blog) => (
            <BlogThumbnail blog={blog} />
          ))}
        </Row>
      </CustomContainer>
      <Link href="/blog">
        <StyledPrimaryButton>Všetky blogy</StyledPrimaryButton>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${sectionPadding};
  border-top: 2px solid rgba(0, 95, 166, 0.19);
  position: relative;
`;

const SvgHolder = styled.div`
  position: absolute;
  right: 100px;
  top: 20px;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  margin: 0 auto;
  display: block;
  margin-top: 72px;
`;
