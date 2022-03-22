import styled from 'styled-components';
import { colors, Heading6, Paragraph, media } from '../../../shared/design';
import { Service } from '../../../shared/types';

export const ServiceSlide = (props: Service) => {
  const { icon, title, description, url } = props;
  return (
    <Wrapper>
      <Header>
        <Image src={icon} alt={title} />
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border: 2px solid #ededed;
  border-radius: 10px;
  padding: 42px 24px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  ${media.down.lg} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
  user-select: none;
  ${media.down.lg} {
    margin: 0;
  }
`;

const Title = styled(Heading6)`
  color: ${colors.text};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: left;
  margin-left: 16px;
  margin-bottom: 20px;
  user-select: none;
  ${media.down.xxl} {
    font-size: 1.3rem;
  }
  ${media.down.lg} {
    margin-top: 16px;
    margin-left: 0;
  }
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  margin-top: 24px;
  text-align: left;
  user-select: none;
`;
