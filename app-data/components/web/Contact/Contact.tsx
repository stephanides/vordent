import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { CustomContainer } from '../../../shared/components';
import { sectionPadding } from '../../../shared/design';
import { ContactForm } from './ContactForm';
import { ContactInformations } from './ContactInformations';

export const Contact = () => {
  return (
    <Wrapper>
      <CustomContainer>
        <Row>
          <Col lg={6} md={12}>
            <ContactForm />
          </Col>
          <Col lg={6} md={12}>
            <ContactInformations />
          </Col>
        </Row>
      </CustomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${sectionPadding};
  padding-bottom: 0;
`;
