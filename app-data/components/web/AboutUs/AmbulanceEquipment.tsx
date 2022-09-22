import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { colors, media, Paragraph } from '../../../shared/design';
import { EquipmentCarousel } from './EquipmentCarousel';

export const AmbulanceEquipment = () => {
  return (
    <CustomContainer>
      <Wrapper>
        <Row>
          <Col lg={6} md={12}>
            <Box>
              <Pretitle>Špičkové technológie</Pretitle>
              <NormalTitle>
                Vybavenie
                <br />
                naších ambulancií
              </NormalTitle>
              <Description>
                Pre zlepšenie diagnostických možností a pre zvýšenie kvality
                poskytnutých stomatologických služieb je naša klinika vybavená
                prístrojmi a materiálmi najvyššej kvality.
              </Description>
            </Box>
          </Col>
          <Col lg={6} md={12}>
            <Ambulance src="/images/our-team/ambulance.png" alt="Ambulance" />
          </Col>
        </Row>
      </Wrapper>
      <EquipmentCarousel />
    </CustomContainer>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 60px;
  margin-bottom: 40px;
  border-bottom: 2px solid rgba(214, 223, 229, 0.72);
  ${media.down.lg} {
    text-align: center;
  }
`;

const Box = styled.div`
height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  ${media.down.lg}{
    align-items: center;
  }
`;

const Ambulance = styled.img`
  width: 100%;
`;

const Pretitle = styled(Paragraph)`
  margin: 0;
  padding-top: 16px;
  font-size: 0.875rem;
  color: #75bd97;
`;

const NormalTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 32px 0 32px 0;
  color: ${colors.text};
  @media (max-width: 768px) {
  }
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  max-width: 428px;
  margin-bottom: 0;
  ${media.down.lg} {
    margin: 0 auto;
  }
`;
