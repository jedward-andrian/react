import React from "react";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Page,
  BackToPage,
  Section,
  Title,
  Summary,
  PriceDetails,
  SummaryTitle,
  DeliveryEstimation,
  DeliveryDetails,
  Thankyou,
  ThankyouDetail,
} from "../components/Page.styled";

export const Page3 = () => {
  return (
    <Page>
      <Section>
        <Thankyou>
          <div>
            <Title>Thankyou</Title>
            <ThankyouDetail>
              <h4>Order ID: xxxxxx</h4>
              <p>Your order will be delivered today with GO-SEND</p>
            </ThankyouDetail>
            <BackToPage>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to Homepage
            </BackToPage>
          </div>
        </Thankyou>
        <Summary>
          <div>
            <SummaryTitle>Summary</SummaryTitle>
            <p>10 items purchased</p>
            <DeliveryDetails>
              <h4>Delivery estimation</h4>
              <DeliveryEstimation>Send with GO-SEND</DeliveryEstimation>
            </DeliveryDetails>
            <DeliveryDetails>
              <h4>Payment Method</h4>
              <DeliveryEstimation>Bank Transfer</DeliveryEstimation>
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
          </div>
        </Summary>
      </Section>
    </Page>
  );
};
