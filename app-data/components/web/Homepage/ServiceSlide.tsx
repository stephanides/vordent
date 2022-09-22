import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { colors, Heading6, Paragraph, media } from '../../../shared/design';
import { ArrowRight } from '../../../shared/design/icons/ArrowRight';
import { Service } from '../../../shared/types';

export const ServiceSlide = (props: Service) => {
  const { icon, title, description, url } = props;
  return (
    <Wrapper>
      <div>
        <Header>
          <ImageWrapper>
            <Image layout="fill" objectFit="contain" src={icon} alt={title} />
          </ImageWrapper>
          <Title>{title}</Title>
        </Header>
        <Description>{description}</Description>
      </div>
      <Link href={url}>
        <ReadMore>
          Zistiť viac
          <ArrowRight />
        </ReadMore>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border: 2px solid #ededed;
  border-radius: 10px;
  padding: 42px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 66px;
  min-width: 66px;
  height: 68px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  ${media.down.lg} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled(Heading6)`
  color: ${colors.text};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: left;
  margin-left: 16px;
  margin-bottom: 20px;
  user-select: none;
  ${media.down.xxl} {
    font-size: 1.3rem;
  }
  ${media.down.lg} {
    margin-top: 16px;
    margin-left: 0;
  }
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.7rem;
  margin-top: 16px;
  text-align: left;
  user-select: none;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  font-size: 0.875rem;
  font-weight: 400;
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
