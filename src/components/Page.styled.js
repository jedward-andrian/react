import styled from "styled-components";

export const Page = styled.div`
  padding: 2rem;
  margin: auto;
`;

export const BackToPage = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

export const Flex = styled.div`
  flex-grow: 1;
`;

export const Section = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 2rem;
  height: 60vh;
`;

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  color: #ff8a00;
`;

export const InputForm = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DropshipForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.7rem;
  width: 400px;
  border: 1px solid gray;
`;

export const TextArea = styled.textarea`
  padding: 0.7rem;
  width: 400px;
  border: 1px solid gray;
`;

export const Summary = styled.div`
  width: 100%;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-left: 1px solid #ff8a00;
`;

export const SummaryTitle = styled.h2`
  color: #ff8a00;
`;

export const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryButton = styled.button`
  background-color: #ff8a00;
  padding: 1rem;
  color: #fff;
  text-align: center;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const ButtonShipment = styled.button`
  width: 200px;
  padding: 1rem;
  background: none;
  border: 1px solid gray;
  text-align: left;
  color: gray;
  margin-right: 3rem;
  cursor: pointer;
`;

export const DeliveryDetails = styled.div`
  margin-top: 1rem;
`;

export const DeliveryEstimation = styled.p`
  color: green;
`;

export const Thankyou = styled.div`
  width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

export const ThankyouDetail = styled.div`
  margin: 2rem 0;
`;
