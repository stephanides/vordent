import styled from 'styled-components';
import { Container } from 'reactstrap';
import { media } from '../../design';

export const CustomContainer = styled(Container)`
  max-width: 1440px;
  padding-left: 30px;
  padding-right: 30px;
  ${media.down.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
