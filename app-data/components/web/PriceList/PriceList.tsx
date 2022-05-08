import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CustomContainer, PageHeader } from '../../../shared/components';
import { pricelistData } from './pricelistData';
import { PriceListItem } from '../../../shared/types';
import { colors, Heading5, media, Paragraph } from '../../../shared/design';
import styled from 'styled-components';

//{props.price} {props.insurancePrice} €

const AccordionRow = (props: PriceListItem) => {
  return (
    <AcordionRowWrapper>
      <PriceTitle>{props.title}</PriceTitle>
      <PriceContent>
        <PriceItem>{props.price} €</PriceItem>
      </PriceContent>
    </AcordionRowWrapper>
  );
};

export const PriceList = () => {
  return (
    <CustomContainer>
      <PageHeader
        pretitle="Platný od 1. 1. 2022"
        title="Cenník"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’"
      />
      <AccordionWrapper>
        {pricelistData.map((price) => (
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={price.title}
              id={price.title}
            >
              <img src={price.icon} />
              <AccordionTitle>{price.title}</AccordionTitle>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              {price.subcategory.map((subcategory) => (
                <>
                  {subcategory.title ? (
                    <AccordionHeading>
                      <PriceTitle>
                        <strong>{subcategory.title}</strong>
                      </PriceTitle>
                      <PriceContent>
                        <PriceItem>
                          <strong>Samoplatca</strong>
                        </PriceItem>
                        <PriceItem>
                          <strong>S PP</strong>
                        </PriceItem>
                      </PriceContent>
                    </AccordionHeading>
                  ) : (
                    <AccordionHeading>
                      <PriceTitle>&nbsp;</PriceTitle>
                      <PriceContent>
                        <PriceItem>
                          <strong>Cena</strong>
                        </PriceItem>
                      </PriceContent>
                    </AccordionHeading>
                  )}
                  {subcategory.items.map((item) => (
                    <AccordionRow {...item} />
                  ))}
                </>
              ))}
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </AccordionWrapper>
    </CustomContainer>
  );
};

const StyledAccordion = styled(Accordion)`
  border: 2px solid #ededed;
  border-radius: 10px !important;
  box-shadow: none !important;
  margin: 24px 0 !important;
  padding: 6px;
  &:before {
    content: none !important;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    align-items: center;
  }
`;

const AcordionRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 22px;
  border-radius: 10px;
  &:nth-child(even) {
    background-color: #f4f7f8;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  flex-direction: column;
`;

const PriceContent = styled.div`
  display: flex;
  margin-left: 16px;
  p:first-child {
    margin-right: 16px;
  }
  p {
    text-align: left;
  }
`;

const PriceItem = styled(Paragraph)`
  width: 160px;
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0;
  strong {
    font-weight: 500;
  }
  ${media.down.md} {
    width: 120px;
  }
  ${media.down.sm} {
    width: 80px;
    font-size: 0.7rem;
  }
`;

const PriceTitle = styled(Paragraph)`
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0;
  strong {
    font-weight: 500;
  }
  ${media.down.sm} {
    font-size: 0.7rem;
  }
`;

const AccordionWrapper = styled.div`
  margin-top: 42px;
  margin-bottom: 42px;
  .Mui-expanded {
    border-color: ${colors.primary};
  }
`;

const AccordionTitle = styled(Heading5)`
  font-size: 1.375rem;
  font-weight: 400;
  color: ${colors.text};
  margin: 0;
  margin-left: 24px;
`;

const AccordionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 22px;
  &:not(:first-child) {
    margin-top: 48px;
  }
`;
