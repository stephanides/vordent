import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { colors, Heading2, Paragraph, media } from '../../../shared/design';
import { ServicesCarousel } from './ServicesCarousel';

export const OurServices = () => {
  return (
    <Holder>
      <StyledCustomContainer>
        <Title>
          <strong>Naše</strong> služby
        </Title>
        <Description>
          Prinášame nadštandardné komplexné stomatologické ošetrenia vrátane
          stomatologickej chirurgie, protetiky, implantológie, endodoncie či
          dentálnej hygieny.{' '}
        </Description>
        <CarouselHolder>
          <ServicesCarousel />
        </CarouselHolder>
        <Decoration src="/images/dental.svg" alt="Dental" />
      </StyledCustomContainer>
    </Holder>
  );
};

const StyledCustomContainer = styled(CustomContainer)`
  position: relative;
`;

const Decoration = styled.img`
  position: absolute;
  right: 140px;
  top: -40px;
`;

const Holder = styled.div`
  background-color: ${colors.primary};
  padding-top: 68px;
  margin-top: 120px;
  height: 400px;
  margin-bottom: 300px;
  ${media.down.sm} {
    height: 500px;
  }
`;

const CarouselHolder = styled.div`
  position: relative;
`;

const Title = styled(Heading2)`
  font-size: 2.5rem;
  color: ${colors.textInverted};
  font-weight: 400;
  margin-bottom: 32px;
  strong {
    font-weight: bold;
  }
`;

const Description = styled(Paragraph)`
  color: ${colors.textInverted};
  max-width: 624px;
  margin-bottom: 32px;
`;
