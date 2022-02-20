import styled from 'styled-components';

type SwiperArrowRightProps = {
  className: string;
};

export const SwiperArrowRight = (props: SwiperArrowRightProps) => (
  <Wrapper className={props.className}>
    <svg
      id="Component_5"
      data-name="Component 5"
      xmlns="http://www.w3.org/2000/svg"
      width="18.105"
      height="12"
      viewBox="0 0 18.105 12"
    >
      <path
        id="Path_10"
        data-name="Path 10"
        d="M4.982,0,3.892,1.091l4.13,4.13H-7.123V6.779H8.021l-4.13,4.13L4.982,12l6-6Z"
        transform="translate(7.123)"
        fill="#005fa6"
      />
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 95, 166, 0.15);
  position: relative;
  margin-top: 0;
  margin-left: 16px;
  &:after {
    content: '' !important;
  }
  svg {
  }
`;
