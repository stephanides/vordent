import styled from 'styled-components';
import { CustomContainer, PageHeader } from '../../../shared/components';
import { media, Paragraph, PrimaryButton } from '../../../shared/design';
import { OurTeamEmployees } from './OurTeamEmployees';

export const OurTeam = () => {
  return (
    <CustomContainer>
      <PageHeader
        pretitle="Už od roku 2009"
        title="Náš tím"
        description="Naši zubní lekári a zdravotné sestry sa pravidelne vzdelávajú a
          zvyšujú svoju kvalifikáciu na domácich, ale aj zahraničných odborných
          podujatiach. Usilujeme sa prinášať tie najinovatívnejšie poznatky,
          metódy a technológie z odboru stomatológie."
      />
      <OurTeamEmployees />
      <ActionWrapper data-aos="fade-up" data-aos-once="true">
        <ActionNurse src="/images/our-team/sestricka.png" alt="Sestrička" />
        <ActionText>
          Máš záujem sa stať súčasťou našej <strong>modernej kliniky</strong>?
        </ActionText>
        <a
          href="https://kariera.zoznam.sk/ponuky-spolocnosti/-/aesculap-dent-s-r-o-"
          target="_blank"
        >
          <StyledPrimaryButton>Voľné pozície</StyledPrimaryButton>
        </a>
      </ActionWrapper>
    </CustomContainer>
  );
};

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f7f8;
  position: relative;
  border-radius: 10px;
  justify-content: space-between;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 80px;
  padding: 42px 82px;
  ${media.down.lg} {
    flex-direction: column;
    padding: 32px 40px;
  }
  ${media.down.md} {
    align-items: center;
    margin-top: 60px;
  }
  ${media.down.sm} {
    flex-direction: column;
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  ${media.down.md} {
    margin-left: 100px;
  }
  ${media.down.sm} {
    margin-left: 0;
  }
`;

const ActionNurse = styled.img`
  position: absolute;
  left: -40px;
  bottom: 0;
  ${media.down.md} {
    width: 200px;
  }
  ${media.down.sm} {
    display: none;
  }
`;

const ActionText = styled(Paragraph)`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 100px;
  strong {
    font-weight: 500;
  }
  ${media.down.xl} {
    font-size: 1.2rem;
  }
  ${media.down.lg} {
    margin-bottom: 16px;
  }
  ${media.down.md} {
    text-align: center;
    margin-bottom: 24px;
  }
  ${media.down.sm} {
    margin-left: 0;
  }
`;
