import { Button } from 'reactstrap';
import styled from 'styled-components';
import { colors } from './colors';

type ButtonProps = {
  size?: 'small' | 'big';
};

export const PrimaryButton = styled(Button)<ButtonProps>`
  padding: ${({ size }) => (size === 'big' ? '24px 60px' : '14px 46px')};
  font-size: ${({ size }) => (size === 'big' ? '1.25rem' : '0.875rem')};
  color: ${colors.textInverted};
  background-color: ${colors.primary};
  transition: background-color 0.3s ease-out;
  border-radius: 25px;
  border: none;
  box-shadow: none !important;
  font-weight: 400;
  &:hover {
    background-color: ${colors.primaryHover};
  }
  &:focus {
    background-color: ${colors.primaryHover};
  }
  &:active {
    background-color: ${colors.primaryHover} !important;
  }
`;

export const PrimaryLink = styled.a<ButtonProps>`
  padding: ${({ size }) => (size === 'big' ? '24px 68px' : '14px 46px')};
  font-size: ${({ size }) => (size === 'big' ? '1.25rem' : '0.875rem')};
  color: ${colors.textInverted};
  background-color: ${colors.primary} !important;
  border-radius: 25px;
  transition: background-color 0.3s ease-out;
  border: none;
  cursor: pointer;
  text-decoration: none !important;
  font-weight: 400;
  &:hover {
    background-color: ${colors.primaryHover};
    color: white;
  }
`;
