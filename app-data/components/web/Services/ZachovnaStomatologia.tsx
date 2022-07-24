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
} from './style';
import { ZachovnaStomatologiaCard } from './ZachovnaStomatologiaCard';

export const ZachovnaStomatologia = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Záchovná stomatológia"
        title="Kráľovná stomatologických odborov"
        subTitle="Záchovná stomatológia, často označovaná ako aj kráľovná stomatologických odborov."
        image="/images/services/zachovna_stomatologia.png"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              Čo je <strong>záchovná stomatológia?</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Úlohou záchovnej stomatológie je udržať vaše vlastné zuby živé a
              zdravé. Zaoberá sa nielen korigovaním zubných defektov
              (najčastejšie odstránením zubných kazov, plombami či koreňovými
              výplňami), ale aj prevenciou v podobe pečatenia zubov u detí a
              podporou profesionálnej a domácej ústnej hygieny.
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceSection>
          <ServiceSectionTitle>
            Záchovná <strong>stomatológia</strong> vo{' '}
            <strong>Vordent clinic</strong> zahŕňa :
          </ServiceSectionTitle>
          <Row>
            <Col xl={3} md={6} sm={12}>
              <ZachovnaStomatologiaCard title="Ošetrenie zubného kazu" />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <ZachovnaStomatologiaCard title="Paradontológia" />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <ZachovnaStomatologiaCard title="Pečatenie detských zubov" />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <ZachovnaStomatologiaCard title="Endodontické ošetrenie" />
            </Col>
          </Row>
        </ServiceSection>
        <Divider />
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              Ošetrenie <strong>zubného kazu</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Ošetrenie kazov, zubných defektov a tráum zubov vykonávame
              zväčšením pod operačným mikroskopom alebo lupou, minimálne
              invazívnou preparáciou zubných tkanív.
            </ServiceParagraph>
            <ServiceParagraph>
              Kazy odstraňujeme tak, aby sme v prvom rade zachovali zubnú dreň,
              pretože zubná dreň obsahuje nervy a cievy, ktoré sa pripájajú k
              nervstvu hlavy a krku a je nevyhnutná pre správne fungovanie zuba.
            </ServiceParagraph>
            <ServiceParagraph>
              Každý zákrok v ústnej dutine robíme v lokálnej anestéze. Zub, s
              ktorým pracujeme, izolujeme kofferdamovou membránou (tá nám
              umožňuje vytvoriť sterilné operačné pole bez slín a baktérií
              ústnej dutiny). Kazy preparujeme a odstraňujeme pod mikroskopom
              pri veľkom zväčšení alebo lupou s použitím detektora zubného kazu.
              Po odstránení kazu pokračujeme rekonštrukciou chýbajúcich tkanív
              prostredníctvom fotokompozitných materiálov. Po ukončení modelácie
              výplne sa zub leští a artikuluje.”
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <ServiceSection background="#F4F7F8">
          <ServiceContent>
            <ServiceSectionTitle>
              <strong>Parodontológia</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Ochorenie parodontu (závesného zubného aparátu) sa začína
              prejavovať krvácaním z ďasien, ich zápalom sprevádzaným
              nepríjemným zápachom z úst a v konečných štádiách dochádza ku
              kývaniu zubov. Pri neliečení týchto ťažkostí môže dôjsť až k
              strate zubov.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Pečatenie <strong>detských zubov</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Pečatenie chráni zub pred vznikom zubného kazu v rychách na
              žuvacej plôške. Je však potrebné rozdeľovať zdravé a poškodené
              zuby - zdravé zuby možno pečatiť, tie poškodené je potrebné
              ošetriť. Čistenie zubov a pravidelná dentálna hygiena je pre
              pacientov po takomto úkone rovnako dôležitá, ako pre tých, ktorí
              zapečatené zuby nemajú.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              <strong>Endodontické </strong>ošetrenie
            </ServiceSectionTitle>
            <ServiceSectionSubTitle>
              Koreňové ošetrenie zuba (<strong>endodoncia</strong> a{' '}
              <strong>reendodoncia</strong>)
            </ServiceSectionSubTitle>
            <ServiceParagraph>
              Endodonciu vykonávame v prípade, že kaz už zasahuje do zubnej
              drene alebo v prípade, že sme sa v priebehu ošetrenia hlbokého
              kazu dostali až k nervu.
            </ServiceParagraph>
            <ServiceParagraph>
              Cieľom endodoncie je bezbolestne zbaviť zub nekrotickej časti
              drene, ošetriť zubné kanáliky a zbaviť pacienta bolesti a zápalu v
              tele.. Zub izolujeme kofferdamovou membránou, následne vyčistíme a
              za aspetických podmienok vysušíme všetky kanáliky. Po zaplnení
              kanálikov horúcou guttaperčou nasleduje postendodontické ošetrenie
              zuba - modelovanie alebo protetická náhrada.
            </ServiceParagraph>
            <ServiceSectionSubTitle>
              <strong>Reendodontické</strong> ošetrenie
            </ServiceSectionSubTitle>
            <ServiceParagraph>
              Reendodontické ošetrenie je výkon, ktorý je indikovaný pri zlyhaní
              prvotného endodotického ošetrenia. Najčastejšou príčinou zlyhania
              je nedostatočné odstránenie baktérií z koreňového systému a
              nedostatočne zaplnený koreňový kanálik v celej jeho dĺžke a šírke.
              Inou z príčin môže byť zložitá anatómia koreňového systému a s ňou
              súvisiace komplikácie ako zalomenie koreňového nástroja alebo
              prehliadnutie nadpočetného kanáliku. Odhaliť štruktúry o veľkosti
              niekoľko stotín milimetrov voľným okom je takmer nemožné. A práve
              nájdenie a následné ošetrenie nadpočetného kanáliku môže byť
              kľúčom k úspechu, pretože nesprávne endodonticky ošetrené zuby sú
              ideálnym prostredím pre množenie baktérií. V oblasti koreňa tak
              vzniká cysta alebo neohraničený zápal, šíriaci sa do celého tela.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
      </CustomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
