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
  BlockWithDivider,
  Block,
  VerticalDivider,
  Image,
} from './style';

export const ProtetickaStomatologia = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Protetická stomatológia"
        title="Náhrada chýbajúcich zubov"
        subTitle="Úlohou protetickej stomatológie je nahradiť chýbajúce zuby a tým zlepšiť alebo obnoviť žuvaciu a estetickú schopnosť pacienta."
        image="/images/services/proteticka_stomatologia.png"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceParagraph>
              Prvoradou úlohou protetickej stomatológie je nahradiť chýbajúce
              zuby, resp. celý chrup a tým zlepšiť alebo obnoviť žuvaciu a
              estetickú schopnosť pacienta. Predchádza chorobám žuvacieho
              ústrojenstva, obnovuje pôvodný výzor pacienta, zlepšuje
              výslovnosť.
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Snímateľná <strong>protetika</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Ku snímateľnej protetike patria vyberateľné totálne alebo
              čiastočné protézy, kotvené sponami, alebo špeciálne protézy z
              pružnej živice (Flexite), ktoré neobsahujú kovové prvky, sú
              odľahčené a držia svojou pružnosťou.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection background="#F4F7F8">
          <ServiceSectionTitle>
            Snímateľné <strong>náhrady</strong>
          </ServiceSectionTitle>
          <ServiceContent>
            <ServiceParagraph>
              V špecifických prípadoch, pri ktorých nie je možné zhotovenie
              fixnej náhrady a ani zavedenie implantátov, je nutné zhotoviť
              snímateľnú náhradu (ako je skeletálna náhrada) chýbajúcich zubov.
              V takomto prípade je nutná dôkladná analýza plánovaného ošetrenia,
              pri ktorom vám bude navrhnuté optimálne riešenie. Vždy sa snažíme
              zvoliť také riešenie, ktoré zabezpečí stabilitu náhrady pri jej
              používaní a tým aj komfort pre pacienta. Vzhľadom na náročnosť
              takéhoto ošetrenia, vždy pred jeho začiatkom vypracujeme detailný
              plán ošetrenia.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Fixná <strong>protetika</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Do fixnej protetiky zaraďujeme korunky a mostíky z kovokeramiky
              alebo z bezkovovej zirkónovej keramiky. Sem patria aj estetické
              krycie fazety, ktoré sú z lisovanej bezkovovej keramiky a slúžia k
              estetickej úprave frontálnych úsekov chrupu – napr. uzavretie
              medzier, úprava farby zubov (pri tetracyklínových zuboch) alebo
              úprava tvaru zubov.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              <strong>Korunky</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              V prípade, že je poškodenie zuba rozsiahlejšie, používajú sa na
              jeho rekonštrukciu keramické korunky. Existuje niekoľko typov
              materiálov. Voľba toho správneho závisí od toho, či sa bude
              korunkou ošetrovať jeden alebo viacero zubov alebo či ide o
              mostík, prípadne ošetrenie predných zubov. V každom prípade je
              výsledkom rekonštrukcia zuba do pôvodnej podoby.
            </ServiceParagraph>
            <ServiceParagraph>
              V prvej fáze sa ošetrovaný zub obrúsi a zhotovia sa odtlačky.
              Ďalší krok sa realizuje v zubnej technike, kde sa korunka zhotoví.
              Po celý čas je ošetrovaný zub chránený provizórnou živicovou
              korunkou, tzn. že pacient môže bez problémov jesť, rozprávať a
              jeho okolie si ani nevšimne, že práve prebieha zubné ošetrenie.
              Pri ďalšej návšteve zubnej ambulancie je provizórna korunka
              nahradená novou, definitívnou.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection background="#F4F7F8">
          <ServiceSectionTitle>
            <strong>Mostíky</strong>
          </ServiceSectionTitle>
          <ServiceContent>
            <ServiceParagraph>
              V prípade jedného alebo viacerých chýbajúcich zubov je jedným z
              vhodných protetických riešení zhotovenie mostíka. V takomto
              prípade je potrebné obrúsiť zuby susediace s chýbajúcim zubom.
              Tomu predchádza starostlivé zváženie stavu týchto zubov, na
              základe klinického vyšetrenia a RTG snímku. Závisí od konkrétneho
              typu zuba, ktorý má byť nahradený, od jeho vzťahu s protiľahlým
              zuboradím, od toho, do akej miery sú susedné zuby postihnuté
              kazom, prípadne v akom rozsahu sú ošetrené výplňami. Taktiež je
              potrebné zvážiť aj stav parodontu pilierových zubov, aby zvýšenú
              záťaž zvládli. Podľa toho stačí pod mostík obrúsiť len dva susedné
              zuby, prípadne ich počet musí byť vyšší.
            </ServiceParagraph>
            <ServiceParagraph>
              Samotné ošetrenie je bezbolestné s lokálnou anestéziou. Pilierové
              zuby sa obrúsia a zhotovia sa odtlačky, na základe ktorých zubný
              technik zhotoví náhradu, ktorá sa pevne nacementuje na obrúsené
              zuby. Kým nie je hotová definitívna náhrada, dostáva pacient
              mostík provizórny, takmer identický s hotovou prácou. V každej
              fáze ošetrenia teda odchádzate z ambulancie so zubami.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
        <ServiceSection>
          <ServiceContent>
            <BlockWithDivider>
              <Block>
                <ServiceSectionTitle>
                  <strong>Fazety</strong>
                </ServiceSectionTitle>
                <ServiceParagraph>
                  Fazety predstavujú ideálne riešenie na prekrytie estetických
                  nedostatkov predných zubov. Často sa používajú v prípadoch,
                  keď si pacient želá korigovať zmenu ich farby, tvaru alebo
                  postavenia. Výhodou ošetrenia je nutnosť minimálneho zásahu do
                  prednej plochy zuba. Obrusovanie v tomto prípade nie je v
                  takom rozsahu ako pri korunke. Preparovaná predná plocha má
                  zväčša hrúbku cca 0,5 – 0,8 mm. Je možné použiť buď tenké
                  kompozitné alebo keramické fazety. Po obrúsení zuba do
                  požadovaného tvaru sa nasadia provizórne fazety, ktoré chránia
                  zub kým sa permanentné fazetyzhotovia v zubnej technike
                </ServiceParagraph>
              </Block>
              <VerticalDivider />
              <Block>
                <ServiceSectionTitle>
                  <strong>Keramické fazety</strong>
                </ServiceSectionTitle>
                <ServiceParagraph>
                  Fazety sú tenké porcelánové lamely pokrývajúce prednú plochu
                  zuba a rezaciu hranu. Sú vhodné v prednom úseku chrupu v
                  prípade, že chceme docieliť estetickú korekciu zubov – v
                  zmysle postavenia zubov, pri vývinových poruchách skloviny,
                  napr. tzv. tetracyklínové zuby, pri rozsiahlych krčkových
                  defektoch, pri erózii a abrázii (obrúsený povrch zuba), pri
                  úrazoch predných zubov. Výhodou je šetrná preparácia a
                  estetika. Príprava spočíva v zbrúsení prednej plochy zuba a
                  reznej hrany, následne sa vyhotoví odtlačok, zubný technik
                  vymodeluje fazetu z porcelánu a tú zubný lekár nacementuje na
                  povrch zuba.
                </ServiceParagraph>
              </Block>
            </BlockWithDivider>
          </ServiceContent>
        </ServiceSection>
        <Divider />
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              Bez-preparačné <strong>fazety</strong>
            </ServiceSectionTitle>
            <Row>
              <Col md={6} sm={12}>
                <Image
                  src="/images/services/proteticka_stomatologia_2.png"
                  alt="Proteticka stomatologia"
                />
              </Col>
              <Col md={6} sm={12}>
                <ServiceParagraph>
                  Sú veľmi tenké lamely zhotovené z veľmi pevného materiálu. Na
                  našej klinike používame lithium disilicate fazety, ktoré
                  spĺňajú ako estetickú tak aj funkčnú stránku. Príprava zahŕňa
                  žiadnu alebo len minimálnu preparáciu prednej plochy zuba, v
                  niektorých prípadoch len zdrsnenie povrchu, čím sa líšia od
                  klasických faziet. Použitie keramickej fazety sa neodporúča
                  pri veľkej deštrukcii (poškodení) zubov, vysokej kazivosti,
                  zhryze hrany na hranu, bruxizme (škrípanie zubov).
                </ServiceParagraph>
              </Col>
            </Row>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceSection>
          <ServiceContent>
            <ServiceSectionTitle>
              Výplne <strong>inlaye, onlaye</strong>
            </ServiceSectionTitle>
            <ServiceParagraph>
              Na obnovu stredne poškodeného zuba sa ako vhodné stomatologické
              riešenie používajú výplne označované ako inlaye alebo onlaye. Ich
              použitie sa tiež odporúča v prípadoch, keď je zub zlomený prípadne
              prasknutý, ale poškodenie nie je natoľko rozsiahle aby vyžadovalo
              zhotovenie keramickej korunky. Môžu byť vyrobené z kompozitného
              materiálu podobne ako biela výplň, alebo z keramického materiálu,
              a preto sa často používajú aj ako náhrada amalgámových výplní pre
              prirodzenejší úsmev.
            </ServiceParagraph>
          </ServiceContent>
        </ServiceSection>
      </CustomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
