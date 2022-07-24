import { createGlobalStyle } from 'styled-components';
import { borderBoxShadow, borderRadius, colors } from '../design';

export { default as Reset } from './lib/reset.style';

export default createGlobalStyle`

* {
  font-family: 'Rubik', sans-serif;
}
#__next{
  overflow-x: hidden;
  position: relative;
  width: 100%;
}

.custom-bullet-container, custom-bullet-container-services{
  .swiper-pagination-bullet, .swiper-pagination-bullet-active{
    border-radius: 0;
    margin-right: 10px;
    background-color: ${colors.primary} !important;
    width: 70px;
    height: 4px;
    opacity: 1;
    transition: all .3s ease-out;
  }
  .swiper-pagination-bullet{
    opacity: .3;
  }
  .swiper-pagination-bullet-active{
    opacity: 1;
  }
}

.description-editor{
  background-color: #f4f7f8;
    font-size: 0.875rem;
    border-radius: 8px;
  padding:0 16px;
  min-height: 200px;
}
.active-nav-link{
  color: ${colors.primary};
    font-weight: bold;
}

.modal-content{
  border: none;
  border-radius: 10px;
  padding: 29px;
  @media(max-width: 576px){
    padding: 16px;
  }
}
.grecaptcha-badge{
  display: none;
}
`;
