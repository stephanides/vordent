import styled from 'styled-components';
import { colors, Heading6 } from '../../../shared/design';

type ZachovnaStomatologiaCardProps = {
  title: string;
};

export const ZachovnaStomatologiaCard = (
  props: ZachovnaStomatologiaCardProps
) => {
  const { title } = props;
  return (
    <Wrapper>
      <img src="/icons/services/zubne_implantaty.svg" alt={title} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f4f7f8;
  display: flex;
  align-items: center;
  padding: 46px 20px;
`;

const Title = styled(Heading6)`
  font-size: 1.375rem;
  font-weight: 400;
  color: ${colors.text};
  margin-left: 16px;
`;
