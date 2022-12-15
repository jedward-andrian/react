import React from "react";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Page,
  BackToPage,
  Section,
  DetailsTitle,
  Title,
  InputForm,
  Input,
  TextArea,
  MainForm,
  DropshipForm,
  Summary,
  PriceDetails,
  SummaryTitle,
  SummaryButton,
  Flex,
} from "../components/Page.styled";

export const Page1 = () => {
  return (
    <Page>
      <BackToPage>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to cart
      </BackToPage>
      <Section>
        <Flex>
          <DetailsTitle>
            <Title>Delivery Details</Title>
          </DetailsTitle>
          <InputForm>
            <MainForm>
              <Input type="email" placeholder="Email" />
              <Input type="number" placeholder="Phone Number" />
              <TextArea placeholder="Address" rows="4" />
            </MainForm>
            <DropshipForm>
              <Input type="text" placeholder="Dropshipper Name" />
              <Input type="number" placeholder="Dropshipper Phone Number" />
            </DropshipForm>
          </InputForm>
        </Flex>
        <Summary>
          <div>
            <SummaryTitle>Summary</SummaryTitle>
            <p>10 items purchased</p>
          </div>
          <div>
            <PriceDetails>
              <p>Cost of goods</p>
              <h4>500.000</h4>
            </PriceDetails>
            <PriceDetails>
              <p>Dropshipping Fee</p>
              <h4>5.900</h4>
            </PriceDetails>
            <PriceDetails>
              <SummaryTitle>Total</SummaryTitle>
              <SummaryTitle>505.900</SummaryTitle>
            </PriceDetails>
            <SummaryButton>Continue to Payment</SummaryButton>
          </div>
        </Summary>
      </Section>
    </Page>
  );
};
