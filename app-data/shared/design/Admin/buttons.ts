import { Button } from 'reactstrap';
import styled from 'styled-components';
import { colors } from '../colors';

export const StyledAdminButton = styled(Button)`
  padding: 8px 24px;
  background-color: ${colors.primary} !important;
  color: ${colors.textInverted} !important;
  transition: background-color 0.3s ease-out;
  border: none;
  box-shadow: none !important;
  &:hover {
    background-color: ${colors.primaryHover} !important;
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export const StyledAdminSecondaryButton = styled(Button)`
  padding: 8px 24px;
  background-color: ${colors.lightGrey} !important;
  color: ${colors.text} !important;
  transition: background-color 0.3s ease-out;
  border: none;
  box-shadow: none !important;
  &:hover {
    background-color: ${colors.grey} !important;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
