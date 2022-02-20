import { Col } from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, Paragraph } from '../../design';
import { ArrowRight } from '../../design/icons/ArrowRight';
import { Blog } from '../../types';
import { BlogCategory } from './BlogCategory';

type BlogThumbnailProps = {
  blog: Blog;
};

export const BlogThumbnail = (props: BlogThumbnailProps) => {
  const { image, readingTime, title, description, slug, category } = props.blog;
  return (
    <StyledCol size={12} lg={4} md={6} data-aos="fade-up" data-aos-once="true">
      <Image url={image.path} />
      <Content>
        <ReadingTime>
          <BlogCategory categoryId={category} />{' '}
          <StyledCircle>&#9679;</StyledCircle> {readingTime} min
        </ReadingTime>
        <Title>{title}</Title>
        <Description>
          {description.length > 110
            ? `${description.slice(0, 110)}...`
            : description}
        </Description>
      </Content>
      <Link href={`blog/${slug}`}>
        <ReadMore>
          Čítať viac
          <ArrowRight />
        </ReadMore>
      </Link>
    </StyledCol>
  );
};

const StyledCol = styled(Col)``;

type ImageProps = {
  url: string;
};
const Image = styled.div<ImageProps>`
  width: 100%;
  height: 277px;
  margin-bottom: 22px;
  border-radius: 10px;
  background-image: url(${({ url }) => (url ? url : '')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const Content = styled.div``;

const ReadingTime = styled.span`
  font-size: 0.875rem;
  color: #75bd97;
`;

const Title = styled.h3`
  padding: 20px 0;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Description = styled(Paragraph)`
  color: ${colors.text};
  font-weight: 300;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 52px;
  cursor: pointer;
  svg {
    margin-left: 12px;
    transition: all 0.3s ease-out;
    position: relative;
  }
  &:hover {
    svg {
      transform: translateX(8px);
    }
  }
`;

const StyledCircle = styled.span`
  font-size: 0.5rem;
  top: -2px;
  position: relative;
`;
