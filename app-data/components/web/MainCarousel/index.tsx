import React, { useState } from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { SwiperCarousel } from './Swiper';
import { CustomContainer } from '../../../shared/components';
import { Slide } from './Slide';

export const MainCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <CustomContainer>
      <Wrapper>
        <SwiperCarousel
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
        >
          <SwiperSlide>
            <Slide
              activeSlide={activeSlide}
              labelStrong="10+ rokov"
              labelNormal="skúsenosti"
              title="Moderná zubná"
              subTitle="klinika z Popradu"
              description="Nadštandardné komplexné stomatologické ošetrenie všetkých vekových skupín."
              url="/cennik"
              buttonTitle="Cenník"
              imageUrl="/gifs/homepage_carousel_1.gif"
              key="slide-1"
            />
          </SwiperSlide>
        </SwiperCarousel>
      </Wrapper>
    </CustomContainer>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid rgba(0, 95, 166, 0.19);
  @media (max-width: 992px) {
    margin-top: 0;
  }
`;
