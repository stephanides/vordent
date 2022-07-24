import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  colors,
  Heading2,
  media,
  Paragraph,
  PrimaryButton,
} from '../../../shared/design';

type SlideProps = {
  labelStrong: string;
  labelNormal: string;
  title: string;
  subTitle: string;
  description: string;
  url: string;
  buttonTitle: string;
  imageUrl: string;
  activeSlide: number;
};

export const Slide = (props: SlideProps) => {
  const {
    labelStrong,
    labelNormal,
    title,
    subTitle,
    description,
    url,
    imageUrl,
    buttonTitle,
  } = props;
  const [gif, setGif] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setGif('');
      setGif(imageUrl);
    }, 0);
  }, [props.activeSlide]);
  return (
    <Content>
      <TextContent>
        <Label>
          <strong>{labelStrong}</strong> {labelNormal}
        </Label>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
        <Link href={url}>
          <StyledPrimaryButton>{buttonTitle}</StyledPrimaryButton>
        </Link>
      </TextContent>
      <Gif src={gif} />
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  background: white;
  ${media.down.lg} {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  width: 40%;
  min-height: 400px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.down.lg} {
    width: 100%;
  }
`;

const Title = styled(Heading2)`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-top: 34px;
`;

const SubTitle = styled(Heading2)`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
  margin-bottom: 24px;
`;

const Description = styled(Paragraph)`
  margin-bottom: 34px;
`;

const Label = styled.div`
  background-color: #e8f3fa;
  border: 1px solid #bce0fd;
  border-radius: 10px;
  font-size: 0.7rem;
  color: ${colors.primary};
  padding: 11px 13px;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 200px;
`;

const Gif = styled.img`
  width: 60%;
  ${media.down.lg} {
    width: 100%;
  }
`;
