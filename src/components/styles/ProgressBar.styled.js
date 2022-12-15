import styled from "styled-components";

export const ProgressBar = styled.div`
  background-color: #fffae6;
  width: 50%;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(-50%);
`;

export const Steps = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StepNumber = styled.p`
  color: #fff;
  background-color: #ff8a00;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepText = styled.p`
  color: #ff8a00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
