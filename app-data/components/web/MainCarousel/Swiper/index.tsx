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
import { colors, media } from '../../../../shared/design';

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
          prevEl: '.swiper-button-prev-main',
          nextEl: '.swiper-button-next-main',
        }}
      >
        {props.children}
      </Swiper>
      <BulletContainer>
        <InfoWrapper>
          <div>
            <ActiveSlideNumber>0{props.activeSlide + 1}</ActiveSlideNumber>{' '}
            <AllSlides>/ 01</AllSlides>
          </div>
          <BulletHolder className="custom-bullet-container"></BulletHolder>
        </InfoWrapper>
        <ArrowHolder>
          <SwiperArrowLeft className="swiper-button-prev swiper-button-prev-main" />
          <SwiperArrowRight className="swiper-button-next swiper-button-next-main" />
        </ArrowHolder>
      </BulletContainer>
    </>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.down.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BulletContainer = styled(CustomContainer)`
  position: absolute;
  bottom: -64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const ActiveSlideNumber = styled.span`
  font-size: 18px;
  color: ${colors.primary};
`;

const AllSlides = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #d9e7f2;
`;

const BulletHolder = styled.div`
  position: relative;
  z-index: 2;
  margin-left: 16px;
  ${media.down.sm} {
    margin-left: 0px;
  }
`;

const ArrowHolder = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
`;

const SwiperWrapper = styled.div``;
