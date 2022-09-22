import styled from 'styled-components';
import { colors, Heading6, media } from '../../../shared/design';
import { MapComponent } from './Map';

export const ContactInformations = () => {
  return (
    <Wrapper>
      <UpperImage src="/images/contact-info.png" />
      <Content>
        <Item>
          <Title>MUDr. Martin Vorobeľ</Title>
          <Section>
            <Text>
              <strong>Telefón:</strong>
            </Text>
            <Text>
              <a href="tel:+421 911 143 191">+421 911 143 191</a>
            </Text>
            <Text>&nbsp;</Text>
          </Section>
          <Section>
            <Text>
              <strong>Email:</strong>
            </Text>
            <Text>
              <a href="mailto:vordentrecepecia@gmail.com">vordentrecepecia@gmail.com</a>
            </Text>
          </Section>
          <Text>
            <strong>Vordent AMB s. r. o.</strong>
          </Text>
          <Text>Okružná 755/3</Text>
          <Text className="mb-0">058 01, Poprad</Text>
        </Item>
        <Item>
          <Title>MDDr. Richard Vorobeľ</Title>
          <Section>
            <Text>
              <strong>Telefón:</strong>
            </Text>
            <Text>
              <a href="tel:+421 948 694 749">+421 948 694 749</a>
            </Text>
            <Text>
              <a href="tel:+421 908 400 369">+421 908 400 369</a>
            </Text>
          </Section>
          <Section>
            <Text>
              <strong>Email:</strong>
            </Text>
            <Text>
              <a href="mailto:aesculapdent@gmail.com">aesculapdent@gmail.com</a>
            </Text>
          </Section>
          <Text>
            <strong>Aesculap dent, s.r.o.</strong>
          </Text>
          <Text>Záhradnícka 319/6</Text>
          <Text className="mb-0">058 01, Poprad</Text>
        </Item>
      </Content>
      <MapComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${media.down.lg} {
    margin-top: 32px;
    margin-bottom: 40px;
  }
`;

const UpperImage = styled.img`
  ${media.down.lg} {
    display: block;
    margin: 0 auto;
  }
  ${media.down.md} {
    width: 100%;
  }
`;

const Content = styled.div`
  background-color: ${colors.primary};
  padding: 40px 0;
  position: relative;
  top: -46px;
  border-radius: 5px;
  display: flex;
  ${media.down.sm} {
    flex-direction: column;
  }
`;

const Item = styled.div`
  width: 50%;
  padding: 0 40px;
  &:first-child {
    border-right: 2px solid rgba(255, 255, 255, 0.19);
  }
  ${media.down.sm} {
    border: none;
    width: 100%;
    margin-bottom: 32px;
  }
`;

const Section = styled.div`
  margin-bottom: 48px;
  ${media.down.sm} {
    margin-bottom: 16px;
  }
`;

const Title = styled(Heading6)`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${colors.textInverted};
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.textInverted};
  margin: 0.25rem 0;
  strong {
    font-weight: 500;
  }
  a {
    color: white;
    text-decoration: undreline;
  }
`;
