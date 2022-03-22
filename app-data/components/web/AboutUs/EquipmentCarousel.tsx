import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { SwiperArrowLeft } from '../MainCarousel/Swiper/SwiperArrowLeft';
import { SwiperArrowRight } from '../MainCarousel/Swiper/SwiperArrowRight';
import { equipments } from './equipments';
import { EquipmentSlide } from './EquipmentSlide';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const EquipmentCarousel = () => {
  const elements = equipments.map((equipment) => (
    <SwiperSlide tag={StyledSwiperSlide} key={equipment.name}>
      <EquipmentSlide {...equipment} />
    </SwiperSlide>
  ));

  return (
    <>
      <ArrowHolder>
        <SwiperArrowLeft className="swiper-button-prev" />
        <SwiperArrowRight className="swiper-button-next" />
      </ArrowHolder>
      <Swiper
        observer
        tag={SwiperWrapper}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        direction="horizontal"
        pagination={{
          el: '.custom-bullet-container',
          clickable: true,
        }}
        autoplay={{ delay: 10000 }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {elements}
      </Swiper>
    </>
  );
};

const ArrowHolder = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
`;

const SwiperWrapper = styled.div`
  margin-bottom: 116px;
  margin-top: 36px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto !important;
`;
