import styled from 'styled-components';
import { colors } from '.';

type Props = {
  weight?: string;
  color?: string;
};

export const Heading1 = styled.h1`
  font-family: 'Rubik', sans-serif;
`;

export const Heading2 = styled.h2`
  font-family: 'Rubik', sans-serif;
`;

export const Heading3 = styled.h3`
  font-family: 'Rubik', sans-serif;
`;

export const Heading4 = styled.h4`
  font-family: 'Rubik', sans-serif;
`;

export const Heading5 = styled.h5`
  font-family: 'Rubik', sans-serif;
`;

export const Heading6 = styled.h6`
  font-family: 'Rubik', sans-serif;
`;

export const Paragraph = styled.p<Props>`
  font-family: 'Rubik', sans-serif;
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  color: ${({ color }) => (color ? color : colors.text)};
`;

export const Label = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 0.8rem;
`;

export const SectionTitle = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 80px;
  font-weight: 400;
`;
