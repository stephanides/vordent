import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { ServiceHeading } from '../../../shared/components/ServiceHeading/ServiceHeading';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ServiceParagraph,
  ServiceContent,
  ServiceSection,
  InstrumentHolder,
  Instrument,
  ServiceSectionTitle,
  Divider,
  BlockWithDivider,
  Block,
  VerticalDivider,
  Image,
} from './style';
import { colors, Heading5 } from '../../../shared/design';

export const ZubneImplantaty = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Zubné implantáty"
        title="Náhrada chýbajúcich zubov"
        subTitle="Elegantné, šetrné a kvalitné riešenie straty jedného
        alebo viacerých zubov."
        image="/gifs/services/implantaty.webp"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceParagraph>
              Implantáty predstavujú umelú náhradu zubných koreňov, ktoré boli
              poškodené alebo zničené. Ide o malú skrutku s vonkajším a
              vnútorným závitom, ktorá je zhotovená z čistého titánu so
              špeciálnou povrchovou úpravou.
            </ServiceParagraph>
            <ServiceParagraph>
              Pri drobnom chirurgickom výkone sa začlení do kosti, na miesto
              chýbajúceho zuba. Výhodou implantátu je možnosť zhotovenia pevných
              zubných náhrad bez nutnosti brúsenia a umŕtvovania vlastných zubov
              a tiež v prípadoch, kedy nie je kvôli výraznej strate chrupu možné
              zhotoviť klasický mostík.
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Čo Vás čaká na ceste za <strong>krajším úsmevom</strong>?
            </ServiceSectionTitle>
            <ServiceParagraph>
              Je potrebné absolvovať konzultáciu s naším implantológom, kde na
              základe 3D CT snímku, zhodnotí parametre kosti (objem a množstvo
              kosti). Ak kosť spĺňa nevyhnutné kritériá, pacient je oboznámený s
              presným postupom a cenovým návrhom.
            </ServiceParagraph>
            <ServiceParagraph>
              V súčasnosti je možné implantovať vo väčšine prípadov, a to aj pri
              cukrovke a zvýšenom krvnom tlaku, no u pacientov, ktorí majú
              dlhodobo zníženú imunitu alebo sa liečia na osteoporózu, prípadne
              sú fajčiari danú terapiu neodporúčame.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection background="#F4F7F8">
          <ServiceSectionTitle>
            U nás sa <strong>bolesti</strong> obávať <strong>nemusíte</strong>.
          </ServiceSectionTitle>
          <ServiceContent>
            <ServiceParagraph>
              Implantácia sa vykonáva pri lokálnom znecitlivení. Samotný zásah
              do kosti je menší ako rana po extrakcii zuba a celý zákrok je
              bezbolestný.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Ako dlho sa čaká na <strong>zhotovenie korunky</strong> na
              implantát?
            </ServiceSectionTitle>
            <ServiceParagraph>
              Všetko závisí od typu implantátu a náročnosti výkonu. Hojenie
              implantátu trvá 3-6 mesiacov, záleží od miesta implantácie (v
              sánke 3 mesiace, v čeľusti 6 mesiacov). Po potrebnej dobe hojenia
              sa zhotovia odtlačky a náš zubný technik urobí všetko preto, aby
              ste čo najskôr odišli s novým úsmevom.
            </ServiceParagraph>
            <ServiceParagraph>
              Po úspešnom odovzdaní protetickej náhrady, je potrebné absolvovať
              dentálnu hygienu a chodiť na pravidelné kontroly, ktoré majú byť
              minimálne raz za pol roka. Pacienti, ktorí sa zúčastňujú dentálnej
              hygieny pravidelne, majú predĺženú záruku na implantát.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <Divider />
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              Zubná protéza na <strong>miniimplantátoch</strong>
            </ServiceSectionTitle>
            <Row>
              <Col md={6} sm={12}>
                <Image
                  src="/images/services/zubne_implantaty_2.png"
                  alt="Zubne implantaty"
                />
              </Col>
              <Col md={6} sm={12}>
                <ServiceParagraph>
                  Zubné miniimplantáty majú menší priemer než implantáty
                  klasické. Po vyvŕtaní malého vstupného otvoru sa
                  miniimplantáty“ zaskrutkujú” do kosti. V ústach sú potom
                  viditeľné malé guľovité hlavičky, na ktoré sa “zacvakne” vaša
                  protéza, do ktorej sa predtým umiestnia kovové čiapočky. Zubnú
                  protézu je možné upevniť na dvoch implantátoch (najčastejšie
                  pre dolnú protézu) alebo na štyroch implnantátoch
                  (najčastejšie pre hornú protézu). Miniimplantáty slúžia ako
                  podpora (ukotvenie) pre prechodné i dlhodobé upevnenie a
                  stabilizáciu zubnej protézy.
                </ServiceParagraph>
              </Col>
            </Row>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              <strong>Metóda</strong> All on four a All on six
            </ServiceSectionTitle>
            <ServiceParagraph>
              Zubné implantáty zavádzané v podobe metódy All-on poskytujú
              dlhodobú možnosť nahradiť a zrekonštruovať chýbajúce zuby. Vďaka
              strategickému umiestneniu každého implantátu z hľadiska
              vzdialenosti, uhla a hĺbky, môže štruktúra All-on podporiť celý
              oblúk nových zubov s použitím len štyroch alebo šiestich
              implantátov.
            </ServiceParagraph>
            <ServiceParagraph>
              Metóda All on je považovaná za veľmi populárnu, pretože je vhodná
              pre takmer každého. Čím viac implantátov sa použije, tým
              stabilnejšia a silnejšia je štrukturálna integrita nových zubov,
              nakoľko sa tlak distribuuje na viac implantátov a tým sa
              rovnomerne prenáša na samotnú čeľusť. Nemožno však povedať, že čím
              viac implantátov je použitých, tým lepšie pre pacienta. Jednou z
              hlavných požiadaviek na zubné implantáty vo všeobecnosti je to, že
              čeľusť musí mať dostatok kostnej štruktúry a sily na podporu
              implantátov, ktoré v nej majú byť umiestnené. Čím viac implantátov
              musí byť umiestnených, tým viac kosti musí byť k dispozícii na ich
              podporu. Preto typ liečby, ako je All on 6, môže vyžadovať
              rekonštrukciu kosti alebo augmentáciu kosti. Faktory, ktoré
              ovplyvňujú dostupné možnosti pre každého daného pacienta sú:
              anatomická štruktúra čeľuste, hustota kosti a všeobecné zdravotné
              aspekty, ako je cukrovka, osteoporóza alebo fajčenie.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <Divider />
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              Je pre Vás vhodný <strong>zubný implantát</strong>?
            </ServiceSectionTitle>
            <Row>
              <Col md={6} sm={12}>
                <AccordionWrapper>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="1"
                    >
                      <AccordionTitle>
                        Osteoporóza, cukrovka a iné chronické ochorenia
                      </AccordionTitle>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Ak sú tieto ochorenia správne liečené a stabilizované, je
                      možné použiť zubné implantáty s porovnateľnou úspešnosťou
                      aká je dosahovaná pri zdravých jedincoch.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="2"
                    >
                      <AccordionTitle>Tuhí fajčiari</AccordionTitle>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Fajčenie je veľkým rizikom správneho hojenia zubných
                      implantátov, pretože dokáže vytvoriť zápal, ktorý naruší
                      ich stabilitu v kosti.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      id="3"
                    >
                      <AccordionTitle>
                        Chronický alebo akútny zápal ústnej dutiny
                      </AccordionTitle>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      V prípade prítomnosti akútneho ale predovšetkým
                      chronického zápalu ústnej dutiny, nie je možné a vhodné
                      zavádzať zubné implantáty (napr. nestabilná parodontitída,
                      zlé ošetrené zuby s nálezom a podobne). Najprv je treba
                      odstrániť dôvod zápalu, prípadne stabilizovať ochorenie a
                      až následne je možné zvažovať ďalší postup.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </AccordionWrapper>
              </Col>

              <Col md={6} sm={12}>
                <Image
                  src="/images/services/zubne_implantaty_3.png"
                  alt="Zubne implantaty"
                />
              </Col>
            </Row>
          </ServiceSection>
        </ServiceContent>
      </CustomContainer>
    </Wrapper>
  );
};

const StyledAccordion = styled(Accordion)`
  box-shadow: none !important;
  margin: 0 !important;
  margin-right: 24px !important;
  padding: 6px;
  border-bottom: 2px solid #ededed;
  border-radius: 0 !important;
  &:before {
    content: none !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 !important;
  .MuiAccordionSummary-content {
    margin: 0 !important;
    align-items: center;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 16px;
  padding: 0 !important;
`;

const AccordionWrapper = styled.div`
  .Mui-expanded {
  }
`;

const AccordionTitle = styled(Heading5)`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.text};
  margin: 0;
`;

const Wrapper = styled.div``;
