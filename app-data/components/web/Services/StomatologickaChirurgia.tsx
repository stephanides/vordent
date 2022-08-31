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
        subTitle=""
        image="/images/services/stomatologicka_chirurgia.png"
      />
      <CustomContainer>
        <ServiceSection>
          <ServiceSectionTitle>
            <strong>Stomatochirurgia</strong> vo Vordent clinic zahŕňa:
          </ServiceSectionTitle>
          <ServiceContent>
            <Row>
              <Col md={6} sm={12}>
                <List>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    komplikované chirurgické extrakcie zubov a zubov múdrosti,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    odstránenie cyst, mukolely,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    odstránenie uzdičky - frenulektómia,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    resekcie koreňových hrotov,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    chirurgické zákroky po úrazoch,
                  </ListItem>
                </List>
              </Col>
              <Col md={6} sm={12}>
                <List>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    odstránenie fibrómov, kožných a slizničných výrastkov v
                    ústnej dutine,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    augmentácia, doplnenie kostného tkaniva,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    zavedenie zubných implantátov,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    augmentácia mäkkých tkanív,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="8px">
                    predprotetická príprava.
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
                    v deň chirurgického zákroku je potrebné zrieknuť sa kofeínu,
                    nikotínu a alkoholu,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    na zmiernenie opuchov doporučujeme prikladať studené
                    obklady,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    rany nevyplachovať,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    vyhýbať sa aktivitám, ktoré môžu viesť k zvýšeniu krvného
                    tlaku,
                  </ListItem>
                  <ListItem fontSize="1rem" marginBottom="0">
                    vyhýbať sa slnečnému žiareniu, saune.
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
