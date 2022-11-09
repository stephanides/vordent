import React, { FC } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { SwiperArrowLeft } from '../MainCarousel/Swiper/SwiperArrowLeft';
import { SwiperArrowRight } from '../MainCarousel/Swiper/SwiperArrowRight';
import { services } from './services';
import { ServiceSlide } from './ServiceSlide';
import { Blog } from '../../../shared/types';
import { BlogThumbnail } from '../../../shared/components/BlogThumbnail';
import { media } from '../../../shared/design';

SwiperCore.use([Autoplay, Navigation, Pagination]);

type BlogsCarouselProps = {
  blogs: Blog[];
};

export const BlogsCarousel: FC<BlogsCarouselProps> = ({ blogs }) => {
  const elements = blogs.map((blog) => (
    <SwiperSlide tag={StyledSwiperSlide} key={blog.title}>
      <BlogThumbnail blog={blog} />
    </SwiperSlide>
  ));

  return (
    <>
      <ArrowHolder>
        <StyledSwiperArrowLeft className=" swiper-button-prev-services swiper-button-prev" />
        <StyledSwiperArrowRight className=" swiper-button-next swiper-button-next-services" />
      </ArrowHolder>
      <Swiper
        observer
        tag={SwiperWrapper}
        slidesPerView={5.3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          700: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        direction="horizontal"
        pagination={{
          el: '.custom-bullet-container-services',
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-services',
          nextEl: '.swiper-button-next-services',
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

  display: none;
  ${media.down.md} {
    display: flex;
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  overflow: visible;
 
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto !important;
`;

const StyledSwiperArrowLeft = styled(SwiperArrowLeft)`
  background-color: white;
`;

const StyledSwiperArrowRight = styled(SwiperArrowRight)`
  background-color: white;
`;
