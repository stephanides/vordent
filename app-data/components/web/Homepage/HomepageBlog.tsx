import { useQuery } from '@apollo/client';
import { Row } from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { BLOGS_QUERY } from '../../../graphql/query';
import { CustomContainer } from '../../../shared/components';
import { BlogThumbnail } from '../../../shared/components/BlogThumbnail';
import {
  sectionPadding,
  SectionTitle,
  PrimaryButton,
  ZoomOrnament,
  media,
} from '../../../shared/design';
import { Blog } from '../../../shared/types';
import { BlogsCarousel } from './BlogsCarousel';

export const HomepageBlog = () => {
  const { error, loading, data } = useQuery(BLOGS_QUERY);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blogs } = data;

  const blogsToShow = blogs.slice(0, 3);
  return (
    <CustomContainer>
      <Wrapper>
        <SvgHolder>
          <ZoomOrnament />
        </SvgHolder>
        <SectionTitle>Blog</SectionTitle>
        <BlogsCarousel blogs={blogsToShow} />
        <Link href="/blog">
          <StyledPrimaryButton>Všetky blogy</StyledPrimaryButton>
        </Link>
      </Wrapper>
    </CustomContainer>
  );
};

const Wrapper = styled.div`
  ${sectionPadding};
  border-top: 2px solid rgba(0, 95, 166, 0.19);
  position: relative;
`;

const BlogsWrapper = styled.div`
  ${media.down.md} {
    display: none;
  }
`;

const SvgHolder = styled.div`
  position: absolute;
  right: 100px;
  top: 20px;
  ${media.down.sm} {
    right: 0px;
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  margin: 0 auto;
  display: block;
  margin-top: 72px;
`;
