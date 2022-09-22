import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { ServiceHeading } from '../../../shared/components/ServiceHeading/ServiceHeading';
import {
  ServiceParagraph,
  ServiceContent,
  ServiceSection,
  InstrumentHolder,
  Instrument,
} from './style';

export const BielenieZubov = () => {
  return (
    <Wrapper>
      <ServiceHeading
        category="Bielenie zubov"
        title="Získajte žiarivý úsmev"
        subTitle="Rýchla a bezbolestná procedúra pre získanie
žiarivého úsmevu."
        image="/gifs/services/bielenie.webp"
      />
      <CustomContainer>
        <ServiceContent>
          <ServiceSection>
            <ServiceParagraph>
              Profesionálne bielenie v ambulancii sa začína konzultáciou
              spojenou s odborným vyšetrením u zubného lekára, dentálnej
              hygieničky.
            </ServiceParagraph>
            <ServiceParagraph>
              Jedno z najčastejších profesionálnych bielení je bielenie svetlom
              (napr. Beyond, Zoom). V prvom kroku je potrebné pred nanesením
              samotného bieliaceho prípravku v konzistencii gélu vytvoriť
              ochranu okolitých tkanív pred poleptaním. Tá sa vytvára “tekutým
              kofferdamom” - hmotou, ktorá sa polotekutá nanáša na ďasná v okolí
              zubov a po osvietení stuhne a tak vytvorí ochrannú bariéru.
            </ServiceParagraph>
            <ServiceParagraph>
              Bielenie možno aplikovať iba na zdravý alebo dobre ošetrený chrup.
              Na zuboch nemôžu byť kazy, výrazne odkryté krčky, výrazne
              popraskaná sklovina či iné významné defekty. Bielením nemožno
              vybieliť ani výplne zubov, protetické korunky či iné umelé prvky v
              ústach. Problematické sú práve biele výplne vo viditeľných úsekoch
              chrupu, ktoré na bielenie nereagujú zosvetlením ako zdravá
              sklovina a zachovaním svojho pôvodného odtieňa sa po bielení môžu
              stať esteticky rušivé.
            </ServiceParagraph>
            <ServiceParagraph bold>
              Po bielení by ste sa mali vyvarovať fajčeniu, pitiu čajov, kávy,
              červeného vína a ovocných štiav, teda dodržiavať tzv. bielu diétu.
            </ServiceParagraph>
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
