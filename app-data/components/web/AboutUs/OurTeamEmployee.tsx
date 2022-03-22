import { useState } from 'react';
import { Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import {
  colors,
  Heading6,
  media,
  Paragraph,
  PrimaryButton,
} from '../../../shared/design';
import { ArrowRight } from '../../../shared/design/icons/ArrowRight';
import { Employee } from '../../../shared/types';

export const OurTeamEmployee = (props: Employee) => {
  const { photo, detailPhoto, name, position, description } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Col xl={3} md={4} sm={6} xs={12}>
        <Wrapper>
          <Photo src={photo} />
          <Name>{name}</Name>
          <Position>{position}</Position>
          {description && (
            <ReadMore onClick={toggle}>
              Čítať viac
              <ArrowRight />
            </ReadMore>
          )}
        </Wrapper>
      </Col>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <DetailBody>
            <DetailTitle>{name}</DetailTitle>
            <DetailPosition>{position}</DetailPosition>
            {detailPhoto && <DetailPhoto image={detailPhoto} />}
            <DetailDescription>{description ?? ''}</DetailDescription>
          </DetailBody>
          <ButtonHolder>
            <PrimaryButton onClick={toggle}>Zatvoriť</PrimaryButton>
          </ButtonHolder>
        </ModalBody>
      </Modal>
    </>
  );
};

const Photo = styled.img`
  width: 100%;
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled(Heading6)`
  font-size: 1.5rem;
  color: ${colors.text};
  font-weight: 400;
  text-align: center;
  margin-top: 12px;
`;

const DetailPosition = styled(Paragraph)`
  color: ${colors.green};
  text-align: center;
`;

const DetailDescription = styled(Paragraph)`
  color: ${colors.text};
  font-weight: 300;
`;

type DetailPhotoProps = {
  image: string;
};
const DetailPhoto = styled.div<DetailPhotoProps>`
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
  margin-top: 16px;
  background-image: ${({ image }) => `url('${image}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  ${media.down.sm} {
    background-position: center;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Name = styled(Heading6)`
  font-size: 1.375rem;
  color: ${colors.text};
  font-weight: 400;
  margin: 0;
  margin-top: 30px;
`;

const Position = styled(Paragraph)`
  font-size: 1rem;
  color: ${colors.green};
  margin: 0;
  margin-top: 20px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100;
  border-top: 1px solid #dee4e8;
  margin-top: 24px;
  padding: 40px 0 0px 0;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 52px;
  cursor: pointer;
  svg {
    margin-left: 12px;
    transition: all 0.3s ease-out;
    position: relative;
  }
  &:hover {
    svg {
      transform: translateX(8px);
    }
  }
`;
