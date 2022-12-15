import React from "react";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Page,
  BackToPage,
  Section,
  DetailsTitle,
  Title,
  Summary,
  PriceDetails,
  SummaryTitle,
  SummaryButton,
  ButtonContainer,
  ButtonShipment,
  DeliveryEstimation,
  DeliveryDetails,
  Flex,
} from "../components/Page.styled";

export const Page2 = () => {
  return (
    <Page>
      <BackToPage>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to cart
      </BackToPage>
      <Section>
        <Flex>
          <DetailsTitle>
            <Title>Shipment</Title>
          </DetailsTitle>
          <ButtonContainer>
            <ButtonShipment>
              <h3>GO-SEND</h3>
              <h3>15,000</h3>
            </ButtonShipment>
            <ButtonShipment>
              <h3>JNE</h3>
              <h3>9,000</h3>
            </ButtonShipment>
            <ButtonShipment>
              <h3>Personal Courier</h3>
              <h3>29,000</h3>
            </ButtonShipment>
          </ButtonContainer>
          <DetailsTitle>
            <Title>Payment</Title>
          </DetailsTitle>
          <ButtonContainer>
            <ButtonShipment>
              <h3>E-Wallet</h3>
              <h3>1,500,000</h3>
            </ButtonShipment>
            <ButtonShipment>
              <h3>Bank Transfer</h3>
            </ButtonShipment>
            <ButtonShipment>
              <h3>Virtual Account</h3>
            </ButtonShipment>
          </ButtonContainer>
        </Flex>
        <Summary>
          <div>
            <SummaryTitle>Summary</SummaryTitle>
            <p>10 items purchased</p>
            <DeliveryDetails>
              <h4>Delivery estimation</h4>
              <DeliveryEstimation>Send with GO-SEND</DeliveryEstimation>
            </DeliveryDetails>
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
              <p>GO-SEND Shipment</p>
              <h4>15.000</h4>
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
