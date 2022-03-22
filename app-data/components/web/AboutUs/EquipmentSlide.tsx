import styled from 'styled-components';
import { colors, Heading6, Paragraph, media } from '../../../shared/design';
import { Equipment } from '../../../shared/types';

export const EquipmentSlide = (props: Equipment) => {
  const { photo, name, description } = props;
  return (
    <Wrapper>
      <Image src={photo} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid #ededed;
  border-radius: 10px;
  padding: 24px;
  height: 100%;
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
  height: 222px;
  ${media.down.md} {
    width: 100%;
    height: unset;
  }
`;

const Title = styled(Heading6)`
  color: ${colors.text};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 20px;
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  text-align: center;
`;
