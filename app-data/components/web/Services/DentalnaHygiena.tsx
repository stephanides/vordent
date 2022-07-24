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
} from './style';

export const DentalnaHygiena = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Dentálna hygiena"
        title="Pre Váš zdravý úsmev"
        subTitle="Kompletná dentálna hygiena pre Váš zdravý úsmev a pravidelnú starostlivosť."
        image="/images/services/dentalna_hygiena.png"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceParagraph>
              Dentálna hygiena je tou najlepšou prevenciou pred vznikom kazov,
              parodontálnych ochorení a v neposlednom rade skvelým riešením
              estetickej stránky Vášho úsmevu. Profesionálna dentálna hygiena v
              kombinácii s vhodnou spoluprácou klienta zaručuje zdravé a krásne
              zuby. Počet sedení určuje dentálna hygienička po stanovení
              diagnózy a zhodnotenia zdravotného stavu. Dentálna hygienička je
              kvalifikovaný pracovník, ktorý je súčasťou stomatologického tímu a
              vykonáva profesionálnu dentálnu hygienu u jednotlivcov ale i
              skupín.
            </ServiceParagraph>
          </ServiceSection>
        </ServiceContent>
        <Divider />
        <ServiceContent>
          <ServiceSection>
            <ServiceSectionTitle>
              <strong>Dentálna hygiena</strong> vo{' '}
              <strong>Vordent clinic</strong> zahŕňa:
            </ServiceSectionTitle>
            <List>
              <ListItem>
                <strong>Komplexné vyšetrenie ústnej dutiny</strong> - anamnéza,
                analýza snímkov (OPG, CT, IO, BTW), parodontálne vyšetrenie
                pomocou indexov a zhodnotenie stavu tvrdých zubných tkanív,
                oboznámenie klienta s aktuálnym stavom a následným liečebným
                plánom
              </ListItem>
              <ListItem>
                <strong>Piezon ultrazvuk</strong> - odstránenie hrubých nánosov
                zubného kameňa
              </ListItem>
              <ListItem>
                <strong>Deep scalling</strong> - ručné odstraňovanie zubného
                kameňa a povlakov nad aj pod úrovňou ďasna (parodontálne vačky)
                s použitím špecializovaných nástrojov
              </ListItem>
              <ListItem>
                <strong>Air flow</strong> - pieskovanie pomocou systému Airflow,
                je to nízko abrazívna metóda, ktorá zo zubov odstraňuje povlak,
                pigmenty a rôzne ďalšie nečistoty. Vďaka špeciálnym práškom,
                udržiava stabilitu baktérií v ústach, a tým predchádza vzniku
                zubného povlaku, kazu či parodontologických ochorení
              </ListItem>
              <ListItem>
                <strong>Polishing</strong> - odstraňovanie pigmentácií použitím
                profylaktických pást
              </ListItem>
              <ListItem>
                <strong>Lokálna fluoridácia</strong> - ošetrenie skloviny zubov
                s použitím špeciálnych pást, gélov alebo lakov, ktoré zabezpečia
                jej remineralizáciu ako prevencia proti vzniku zubných kazov a
                hypersenzitivity zubov
              </ListItem>
              <ListItem>
                <strong>Motivácia a inštruktáž</strong> - priama práca s
                klientom - výber vhodných pomôcok na každodennú starostlivosť
                podľa daného stavu, výber veľkostí, typov, postupy, techniky -
                efektivita, doporučenie chemických produktov - ak to stav
                vyžaduje
              </ListItem>
              <ListItem>
                <strong>Výživové poradenstvo</strong> - vysvetlenie vplyvu
                potravín a nápojov na zubnú sklovinu, vhodnosť a nevhodnosť
                návykov pri ich konzumácií
              </ListItem>
              <ListItem>
                <strong>Špeciálny a individuálny prístup</strong> k detskému
                pacientovi citlivým a bezbolestným prístupom
              </ListItem>
              <ListItem>
                <strong>Bielenie zubov </strong>
              </ListItem>
            </List>
            <InstrumentHolder>
              <Instrument />
            </InstrumentHolder>
          </ServiceSection>
        </ServiceContent>
      </CustomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
