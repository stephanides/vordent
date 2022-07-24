import styled from 'styled-components';
import { colors, media, Paragraph, sectionPadding } from '../../design';
import { CustomContainer } from '../CustomContainer';
import { Left, Right } from './icons';

type ServiceHeadingProps = {
  category: string;
  title: string;
  subTitle: string;
  image: string;
};

export const ServiceHeading = (props: ServiceHeadingProps) => {
  const { category, title, subTitle, image } = props;
  return (
    <Wrapper>
      <StyledCustomContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <LeftImageHolder>
          <Left />
        </LeftImageHolder>
        <RightImageHolder>
          <Right />
        </RightImageHolder>
      </StyledCustomContainer>
      <Image src={image} alt={category} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${sectionPadding};
  padding-bottom: 200px;
  margin-bottom: 200px;
  ${media.down.md} {
    padding-bottom: 0;
    margin-bottom: 0px;
  }
`;

const StyledCustomContainer = styled(CustomContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Category = styled.div`
  border-radius: 25px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.06);
  padding: 13px 33px;
`;

const Title = styled.h1`
  color: ${colors.textInverted};
  font-size: 2.5rem;
  font-weight: 500;
  margin: 40px 0;
  ${media.down.sm} {
    font-size: 2rem;
  }
`;

const SubTitle = styled(Paragraph)`
  color: ${colors.textInverted};
  font-weight: 300;
  padding-bottom: 55px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 964px;
  position: absolute;
  bottom: -200px;
  ${media.down.lg} {
    max-width: calc(100% - 32px);
  }
  ${media.down.md} {
    position: relative;
    max-width: 100%;
    bottom: 0;
  }
`;

const LeftImageHolder = styled.div`
  position: absolute;
  transform: rotateZ(165deg);
  left: 120px;
  bottom: -140px;
  ${media.down.md} {
    display: none;
  }
`;

const RightImageHolder = styled.div`
  position: absolute;
  transform: rotateZ(15deg);
  right: 120px;
  bottom: -180px;
  ${media.down.sm} {
    right: 0px;
    bottom: -80px;
    svg {
      width: 120px;
    }
  }
`;
