import styled from 'styled-components';
import { colors, media, Paragraph } from '../../design';

export type PageHeaderProps = {
  pretitle: string;
  title: string;
  description: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  const { pretitle, title, description } = props;
  return (
    <Wrapper>
      <Pretitle>{pretitle}</Pretitle>
      <NormalTitle>{title}</NormalTitle>
      <Description>{description}</Description>
      <HeaderLeftImage src="images/our-team/header_left.png" />
      <HeaderRightImage src="images/our-team/header_right.png" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(214, 223, 229, 0.72);
`;

const NormalTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin: 40px 0 40px 0;
  max-width: 650px;
  color: ${colors.text};
  @media (max-width: 768px) {
  }
`;

const Description = styled(Paragraph)`
  font-weight: 300;
  max-width: 470px;
  text-align: center;
  margin-bottom: 0;
`;

const Pretitle = styled.span`
  font-size: 0.875rem;
  color: #75bd97;
`;

const HeaderLeftImage = styled.img`
  position: absolute;
  left: 40px;
  bottom: 0;
  ${media.down.sm} {
    left: 0;
    width: 120px;
  }
`;

const HeaderRightImage = styled.img`
  position: absolute;
  right: 40px;
  bottom: 0;
  ${media.down.sm} {
    right: 0;
    width: 120px;
  }
`;
