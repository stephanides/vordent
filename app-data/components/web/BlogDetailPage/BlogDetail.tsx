import React, { FC } from 'react';
import styled from 'styled-components';
import {
  CustomContainer,
  FacebookShare,
  RelatedBlogs,
} from '../../../shared/components';
import { colors, Paragraph } from '../../../shared/design';
import { Blog } from '../../../shared/types';

type BlogDetailProps = {
  blog: Blog;
  categoryTitle: string;
  currentUrl: string;
};

function renderDescription(description) {
  return { __html: description };
}

export const BlogDetail: FC<BlogDetailProps> = (props) => {
  const { image, title, content, readingTime, description, slug } = props.blog;

  return (
    <>
      <CustomContainer>
        <Wrapper>
          <ReadingTime>
            {props.categoryTitle}
            <StyledCircle> &#9679;</StyledCircle> {readingTime} min
          </ReadingTime>
          <NormalTitle>{title}</NormalTitle>
          <Description>{description}</Description>
          <TitleImage src={image.path} alt="Blog image" />
          <ContentText dangerouslySetInnerHTML={renderDescription(content)} />
          <ActionWrapper data-aos="fade-up" data-aos-once="true">
            <ShareText>
              Ak sa vám páčilo to, čo ste čítali, povedzte to svojim priateľom.
            </ShareText>
            <StyledFacebookShare
              url={props.currentUrl}
              quote={title}
              hashtag="Vordent"
            >
              Zdielať
            </StyledFacebookShare>
          </ActionWrapper>
        </Wrapper>
        <RelatedBlogs actualBlog={slug} />
      </CustomContainer>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f7f8;
  border-radius: 10px;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0;
  padding: 42px 82px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ShareText = styled(Paragraph)`
  font-size: 1.5rem;
  max-width: 370px;
  margin: 0;
`;

const StyledFacebookShare = styled(FacebookShare)`
  margin-top: 0 !important;
`;

const NormalTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin: 40px 0 20px 0;
  max-width: 650px;
  color: ${colors.text};
  @media (max-width: 768px) {
  }
`;

const ContentText = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  img{
    margin: 0 auto;
    display: block;
    max-width: 100%;
  }
  * {
    strong {
    }
    ins{
    }
    
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  max-width: 470px;
  text-align: center;
`;

const TitleImage = styled.img`
  width: 100%;
  border-radius: 50px;
  margin: 20px 0 60px 0;
`;

const ReadingTime = styled.span`
  font-size: 0.875rem;
  color: #75bd97;
`;

const StyledCircle = styled.span`
  font-size: 0.5rem;
  top: -2px;
  position: relative;
`;
