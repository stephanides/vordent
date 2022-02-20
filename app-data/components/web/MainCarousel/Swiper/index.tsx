import React from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from 'swiper';
import { CustomContainer } from '../../../../shared/components';
import { SwiperArrowRight } from './SwiperArrowRight';
import { SwiperArrowLeft } from './SwiperArrowLeft';

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

type SwiperCarouselProps = {
  children: any;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
  activeSlide: number;
};

export const SwiperCarousel = (props: SwiperCarouselProps) => {
  return (
    <>
      <Swiper
        observer
        effect="fade"
        tag={SwiperWrapper}
        slidesPerView={1}
        spaceBetween={30}
        direction="horizontal"
        pagination={{
          el: '.custom-bullet-container',
          clickable: true,
        }}
        onSlideChange={(slide) => props.setActiveSlide(slide.realIndex)}
        centeredSlides
        loop
        autoplay={{ delay: 10000 }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {props.children}
      </Swiper>
      <BulletContainer>
        <div>
          0{props.activeSlide + 1} / 02
          <BulletHolder className="custom-bullet-container"></BulletHolder>
        </div>
        <ArrowHolder>
          <SwiperArrowLeft className="swiper-button-prev" />
          <SwiperArrowRight className="swiper-button-next" />
        </ArrowHolder>
      </BulletContainer>
    </>
  );
};

const BulletContainer = styled(CustomContainer)`
  position: absolute;
  bottom: -64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const BulletHolder = styled.div`
  position: relative;
  z-index: 2;
`;

const ArrowHolder = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
`;

const SwiperWrapper = styled.div``;
