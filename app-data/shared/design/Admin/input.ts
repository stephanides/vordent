import { TextField } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import styled from 'styled-components';
import { colors } from '../colors';

export const StyledTextValidator = styled(TextValidator)`
  margin-bottom: 16px !important;
  width: 100%;
  color: ${colors.text};
  input {
    background-color: #f4f7f8;
    font-size: 0.875rem;
    border-radius: 8px;
  }
  fieldset {
    border: none;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 16px !important;
  width: 100%;
  color: ${colors.text};
  input {
    background-color: #f4f7f8;
    font-size: 0.875rem;
    border-radius: 8px;
  }
  fieldset {
    border: none;
  }
`;
