import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import {
  colors,
  Heading5,
  media,
  Paragraph,
  PrimaryButton,
} from '../../../shared/design';

const images = [
  '/images/basic-info/1.png',
  '/images/basic-info/2.png',
  '/images/basic-info/3.png',
];

export const BasicInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledContainer>
      <StyledRow>
        <Col lg={6} md={12}>
          <div style={{ width: '100%' }}>
            <Image
              width={2400}
              height={1600}
              layout="fill"
              src={images[activeTab]}
            />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <Content>
            <TabsPicker>
              <GroupButton
                active={activeTab === 0}
                onClick={() => setActiveTab(0)}
              >
                Podpora HK Poprad
              </GroupButton>
              <GroupButton
                active={activeTab === 1}
                onClick={() => setActiveTab(1)}
              >
                Špičkové vybavenie
              </GroupButton>
              <GroupButton
                active={activeTab === 2}
                onClick={() => setActiveTab(2)}
              >
                Náš tím
              </GroupButton>
            </TabsPicker>
            {activeTab === 0 && (
              <>
                <ContentTitle>
                  Podcenenie ochrany zubov môže stáť hokejistov veľa
                </ContentTitle>
                <ContentText>
                  “V našej ambulancii máme pacientov všetkých vekových
                  kategórií. Medzi našich pacientov patrí aj celý hokejový tím
                  HK Poprad.”
                </ContentText>
                <PersonInfo>
                  <PhotoMini src="/images/basic-info/riso.png" />
                  <strong>MDDr. Richard Vorobeľ, </strong> Chirurg-implantológ
                </PersonInfo>
                <Link href="/sluzby/proteticka-stomatologia">
                  <StyledPrimaryButton>Čítať viac</StyledPrimaryButton>
                </Link>
              </>
            )}
            {activeTab === 1 && (
              <>
                <ContentTitle>Vybavenie naších ambulancií</ContentTitle>
                <ContentText>
                  Pre zlepšenie diagnostických možností a pre zvýšenie kvality
                  poskytnutých stomatologických služieb je naša klinika vybavená
                  prístrojmi a materiálmi najvyššej kvality.
                </ContentText>
                <Link href="/vybavenie-ambulancii">
                  <StyledPrimaryButton>Čítať viac</StyledPrimaryButton>
                </Link>
              </>
            )}
            {activeTab === 2 && (
              <>
                <ContentTitle>Mladý dynamický kolektív</ContentTitle>
                <ContentText>
                  Odborne pomáhame našim pacientom a usiluje sa maximálne
                  vyhovieť Vašim požiadavkám a odbúrať aj nepríjemný pocit z
                  návštevy u zubára.
                </ContentText>
                <Link href="/nas-tim">
                  <StyledPrimaryButton>Čítať viac</StyledPrimaryButton>
                </Link>
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

const TabsPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 186px;
  margin-top: 16px;
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

const PersonInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.text};
  margin-bottom: 16px;
  margin-top: 32px;
  strong: {
    font-weight: 500;
  }
`;

const PhotoMini = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin-right: 16px;
`;
