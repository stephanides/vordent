import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { ServiceHeading } from '../../../shared/components/ServiceHeading/ServiceHeading';
import {
  ServiceParagraph,
  ServiceContent,
  ServiceSection,
  InstrumentHolder,
  Instrument,
  List,
  ListItem,
  ServiceSectionTitle,
  Divider,
  ServiceSectionSubTitle,
  Image,
} from './style';

export const StomatologickaChirurgia = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Stomatologická chirurgia"
        title="Bezbolestná, netraumatizujúca a precízna"
        subTitle="Vďaka vysokej odbornosti a skúsenostiam našich chirurgov sú chirurgické zákroky úplne bezbolestné a precízne."
        image="/images/services/stomatologicka_chirurgia.png"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceParagraph>
              Vďaka modernému vybaveniu, vysokej odbornosti a skúsenostiam
              našich chirurgov sú chirurgické zákroky úplne bezbolestné,
              netraumatizujúce a precízne.
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <ServiceSection background="#F4F7F8">
          <ServiceSectionTitle>
            Stomatochirurgia vo <strong>Vordent clinic</strong> zahŕňa:
          </ServiceSectionTitle>
          <ServiceContent>
            <Row>
              <Col md={6} sm={12}>
                <List>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Komplikované chirurgické extrakcie zubov a zubov múdrosti
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Odstránenie cyst, mukolely
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Odstránenie uzdičky - frenulektómia
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Resekcie koreňových hrotov
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Chirurgické zákroky po úrazoch
                  </ListItem>
                </List>
              </Col>
              <Col md={6} sm={12}>
                <List>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Odstránenie fibrómov, kožných a slizničných výrastkov v
                    ústnej dutine
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Augmentácia, doplnenie kostného tkaniva
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Zavedenie zubných implantátov
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Augmentácia mäkkých tkanív
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    Predprotetická príprava
                  </ListItem>
                </List>
              </Col>
            </Row>
          </ServiceContent>
        </ServiceSection>
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionSubTitle align="center" marginBottom="50px">
              Dodržiavanie nasledovných pokynov po{' '}
              <strong>chirurgickom zákroku</strong> prispieva k{' '}
              <strong>rýchlejšiemu</strong> procesu
              <strong>hojenia rany</strong> a úspechu celkového zákroku:
            </ServiceSectionSubTitle>
            <Row>
              <Col md={6} sm={12}>
                <Image
                  src="/images/services/stomatologicka_chirurgia_2.png"
                  alt="Stomatologicka chirurgia"
                />
              </Col>
              <Col md={6} sm={12}>
                <List>
                  <ListItem fontSize="1rem" marginBottom="0">
                    V deň chirurgického zákroku je potrebné zrieknuť sa kofeínu,
                    nikotínu a alkoholu
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    Na zmiernenie opuchov doporučujeme prikladať studené obklady
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    Rany nevyplachovať
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    Vyhýbať sa aktivitám, ktoré môžu viesť k zvýšeniu krvného
                    tlaku
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    Vyhýbať sa slnečnému žiareniu, saune
                  </ListItem>
                </List>
              </Col>
            </Row>
          </ServiceSection>
        </ServiceContent>
      </CustomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
