import React, { useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import styled from 'styled-components';
import AOS from 'aos';
import { colors, media, Paragraph } from '../../design';
import { CustomContainer } from '../CustomContainer';
import { Col, Row } from 'reactstrap';
import Link from 'next/link';
import { Facebook, Instagram, VordentFooterLogo } from './icons';

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    //ReactGA.initialize('UA-179261257-1');
    //ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <CustomContainer>
        <UpperContent>
          <Row>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle>Sledujte nás</SectionTitle>
              <SocialHolder>
                <SocialLink href="/">
                  <Facebook />
                </SocialLink>
                <SocialLink href="/">
                  <Instagram />
                </SocialLink>
              </SocialHolder>
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle>Navigácia</SectionTitle>
              <Section>
                <NavHolder>
                  <Link href="/sluzby">
                    <NavLink>Služby</NavLink>
                  </Link>
                  <Link href="/o-nas">
                    <NavLink>O nás</NavLink>
                  </Link>
                  <Link href="/cennik">
                    <NavLink>Cenník</NavLink>
                  </Link>
                  <Link href="/blog">
                    <NavLink>Blog</NavLink>
                  </Link>
                  <Link href="/kontakt">
                    <NavLink>Kontakt</NavLink>
                  </Link>
                </NavHolder>
              </Section>
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle>Služby</SectionTitle>
              <Section>
                <NavHolder>
                  <Link href="/zubne-implantaty">
                    <NavLink>Zubné implantáty</NavLink>
                  </Link>
                  <Link href="/proteticka-stomatologia">
                    <NavLink>Protetická stomatológia</NavLink>
                  </Link>
                  <Link href="/stomatologicka-chirurgia">
                    <NavLink>Stomatologická chirurgia</NavLink>
                  </Link>
                  <Link href="/zachovna-stomatologia">
                    <NavLink>Zachovná stomatológia</NavLink>
                  </Link>
                  <Link href="/dentalna-hygiena">
                    <NavLink>Dentálna hygiena</NavLink>
                  </Link>
                  <Link href="/bielenie-zubov">
                    <NavLink>Bielenie zubov</NavLink>
                  </Link>
                </NavHolder>
              </Section>
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle>Otváracie hodiny</SectionTitle>
              <OpenHours>
                <Paragraph>
                  <strong>Pondelok - Štvrtok</strong>
                </Paragraph>
                <Paragraph>07:00 - 16:00 hod.</Paragraph>
              </OpenHours>
              <OpenHours>
                <Paragraph>
                  <strong>Piatok</strong>
                </Paragraph>
                <Paragraph>07:00 - 12:30 hod.</Paragraph>
              </OpenHours>
              <OpenHours>
                <Paragraph>
                  <strong>Sobota</strong>
                </Paragraph>
                <Paragraph>chirurgické zákroky</Paragraph>
              </OpenHours>
              <OpenHours>
                <Paragraph>
                  <strong>Obed</strong>
                </Paragraph>
                <Paragraph>12:30 - 13:30 hod.</Paragraph>
              </OpenHours>
            </StyledCol>
          </Row>
        </UpperContent>
      </CustomContainer>
      <BottomContent>
        <CustomContainer>
          <Row>
            <StyledCol size={12} md={6} xl={3}>
              <VordentFooterLogo />
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle bottom>Zavolajte nám</SectionTitle>
              <Section>
                <BottomItem>
                  <Paragraph color="white">MDDR. Richard Vorobeľ</Paragraph>
                  <BottomLink href="tel:+421 948 694 749">
                    +421 948 694 749
                  </BottomLink>
                </BottomItem>
                <BottomItem>
                  <Paragraph color="white">MDDR. Martin Vorobeľ</Paragraph>
                  <BottomLink href="tel:+421 911 143 191">
                    +421 911 143 191
                  </BottomLink>
                </BottomItem>
              </Section>
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle bottom>Napíšte nám</SectionTitle>
              <BottomLink href="mailto:info@vordent.sk">
                info@vordent.sk
              </BottomLink>
            </StyledCol>
            <StyledCol size={12} md={6} xl={3}>
              <SectionTitle bottom>Naše ambulancie</SectionTitle>
              <BottomItem>
                <Paragraph color="white">
                  <BottomLink href="">Okružná 3, </BottomLink>Poprad
                </Paragraph>
                <Paragraph color="white">
                  <BottomLink href="">Záhradnicka 6, </BottomLink>Poprad
                </Paragraph>
              </BottomItem>
            </StyledCol>
          </Row>
        </CustomContainer>
      </BottomContent>
      <CreatedBy>
        <CustomContainer>
          <CreatedByWrapper>
            <CreatedByContentMain>
              <CreatedByItem>
                &copy; 2021 Vordent | Všetky práva vyhradené
              </CreatedByItem>
              <CreatedByItem>
                <Link href="/">Ochrana osobných údajov</Link>
              </CreatedByItem>
            </CreatedByContentMain>
            <CreatedByContent>
              <CreatedByItem className="mr-2">Made by</CreatedByItem>
              <a href="https://kravestudio.sk/" target="_blank">
                <KraveLogo src="/icons/krave-logo.svg" />
              </a>
            </CreatedByContent>
          </CreatedByWrapper>
        </CustomContainer>
      </CreatedBy>
      <CookieConsent
        location="bottom"
        buttonText="Prijať"
        cookieName="Vordent cookie"
        onAccept={() => {
          Cookies.set('CookiesAccepted', 'true');
        }}
        style={{
          background: '#FFF',
          color: '#222222',
          fontFamily: 'Roboto',
          padding: '16px 8px',
          boxShadow: '1px 1px 10px 1px rgb(0 0 0 / 10%)',
        }}
        buttonStyle={{
          color: 'white',
          background: colors.primary,
          fontSize: '14px',
          padding: '8px 32px',
          borderRadius: '25px',
          position: 'relative',
          top: '8px',
        }}
        expires={150}
      >
        Na našom webe používame cookies, aby sme vám poskytli čo
        najrelevantnejší zážitok tým, že sme si pamätali vaše preferencie a
        opakované návštevy. Kliknutím na „Prijať“ súhlasíte s použitím všetkých
        cookies.
      </CookieConsent>
    </>
  );
};

const UpperContent = styled.div`
  padding: 40px 0;
  border-top: 2px solid rgba(0, 95, 166, 0.19);
`;

const StyledCol = styled(Col)`
  @media (max-width: 1200px) {
    margin-bottom: 32px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  ${media.down.md} {
    text-align: left;
    margin-bottom: 0;
  }
`;

type SectionTitleProps = {
  bottom?: boolean;
};
const SectionTitle = styled.h5<SectionTitleProps>`
  font-size: 1.25rem;
  margin: 16px 0px;
  margin-bottom: 40px;
  font-weight: 400;
  color: ${({ bottom }) => (bottom ? colors.textInverted : colors.primary)};
`;

const Section = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  ${media.down.md} {
    margin-top: 16px;
  }
`;

const NavHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  cursor: pointer;
  color: ${colors.text};
  font-size: 0.875rem;
  padding: 4px 0;
  transition: color 0.3s ease-out;
  text-decoration: none !important;
  &:hover {
    color: ${colors.primary};
  }
`;

const SocialLink = styled.a`
  margin-right: 8px;
`;
const SocialHolder = styled.div``;

const OpenHours = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  p {
    margin: 0;
    padding: 4px 0;
    color: ${colors.text};
  }
  strong {
    font-weight: bold;
  }
`;

const BottomContent = styled.div`
  background-color: ${colors.primary};
  padding-top: 72px;
  padding-bottom: 36px;
`;

const BottomItem = styled.div`
  margin-bottom: 28px;
  color: ${colors.textInverted};
  p {
    margin: 0;
    margin-bottom: 8px;
    font-size: 0.875rem;
  }
`;

const BottomLink = styled.a`
  color: ${colors.textInverted};
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.875rem;
  &:hover {
    color: ${colors.textInverted};
  }
`;

const CreatedByInner = styled.div`
  background-color: ${colors.primary};
`;

const CreatedBy = styled.div`
  background-color: ${colors.primary};
  color: ${colors.textInverted};
`;

const CreatedByWrapper = styled.div`
  display: flex;
  padding: 32px 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  ${media.down.lg} {
    flex-direction: column;
  }
  ${media.down.md} {
    padding: 16px 24px;
  }
`;

const CreatedByContentMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const CreatedByContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${media.down.lg} {
    align-items: center;
    text-align: center;
  }
`;

const CreatedByItem = styled.p`
  font-size: 0.875rem;
  margin: 14px;
  margin-left: 0;
  a {
    font-weight: 300;
    text-decoration: underline;
    color: ${colors.textInverted};
  }
  @media (max-width: 476px) {
    margin: 14px 4px;
  }
`;

const KraveLogo = styled.img`
  width: 80px;
`;
