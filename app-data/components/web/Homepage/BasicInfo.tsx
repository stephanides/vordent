import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { colors, Heading5, media, Paragraph } from '../../../shared/design';

const images = [
  '/images/basic-info/girl.png',
  '/images/basic-info/girl.png',
  '/images/basic-info/girl.png',
];

export const BasicInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledContainer>
      <StyledRow>
        <Col lg={6} md={12}>
          <Image src={images[activeTab]} />
        </Col>
        <Col lg={6} md={12}>
          <Content>
            <TabsPicker>
              <GroupButton
                active={activeTab === 0}
                onClick={() => setActiveTab(0)}
              >
                Ošetrenie detí
              </GroupButton>
              <GroupButton
                active={activeTab === 1}
                onClick={() => setActiveTab(1)}
              >
                Poisťovne
              </GroupButton>
              <GroupButton
                active={activeTab === 2}
                onClick={() => setActiveTab(2)}
              >
                Chirurgia
              </GroupButton>
            </TabsPicker>
            {activeTab === 0 && (
              <>
                <ContentTitle>
                  Robíme všetko aj pre našich najmenších pacientov
                </ContentTitle>
                <ContentText>
                  “Dieťa by sa prvýkrát do zubnej ambulancie malo prísť len
                  zoznámiť s lekárom a ordináciou. Prísť vtedy, keď už pociťuje
                  bolesť, je neskoro.”
                </ContentText>
              </>
            )}
          </Content>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

const StyledContainer = styled(CustomContainer)`
  position: relative;
  margin-bottom: 90px;
  padding-top: 100px;
  ${media.down.lg} {
    padding-top: 0px;
  }
`;

const StyledRow = styled(Row)`
  ${media.down.lg} {
    flex-direction: column-reverse;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const TabsPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

type GroupButtonProps = {
  active: boolean;
};
const GroupButton = styled.div<GroupButtonProps>`
  width: 142px;
  padding: 14px 0;
  border-radius: 25px;
  background-color: ${({ active }) => (active ? 'transparent' : '#f4f7f8')};
  border: 2px solid;
  border-color: ${({ active }) => (active ? colors.green : '#f4f7f8')};
  font-size: 12px;
  color: ${({ active }) => (active ? colors.green : colors.text)};
  margin-right: 20px;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${colors.green};
    border-color: ${colors.green};
    background-color: transparent;
  }
  ${media.down.sm} {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 0px 80px;
  ${media.down.xxl} {
    padding: 0 40px;
  }
  ${media.down.xl} {
    padding: 0 20px;
  }
  ${media.down.lg} {
    padding: 0 20px;
    margin-bottom: 60px;
  }
  ${media.down.sm} {
    padding: 0;
  }
`;

const ContentTitle = styled(Heading5)`
  color: ${colors.text};
  font-size: 2rem;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 27px;
`;

const ContentText = styled(Paragraph)`
  color: ${colors.text};
`;
