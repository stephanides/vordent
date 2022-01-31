import { createGlobalStyle } from 'styled-components';

export { default as Reset } from './lib/reset.style';

export default createGlobalStyle`

* {
  font-family: 'Roboto', sans-serif;
}
#__next{
  overflow-x: hidden;
  position: relative;
  width: 100%;
}
`;
