import "./App.css";
import React, { useState } from "react";
import { Pages } from "./components/styles/Pages.styled";
import { Container } from "./components/styles/Container.styled";
import { ProgressBar, Steps, StepNumber, StepText } from "./components/styles/ProgressBar.styled";
import { Page1 } from "./Forms/page1";
import { Page2 } from "./Forms/page2";
import { Page3 } from "./Forms/page3";

function App() {
  const [page, setPage] = useState(1);
  return (
    <Pages>
      <Container>
        <ProgressBar>
          <Steps>
            <StepNumber>1</StepNumber>
            <StepText>Delivery</StepText>
          </Steps>
          <StepText>&gt;</StepText>
          <Steps>
            <StepNumber>2</StepNumber>
            <StepText>Payment</StepText>
          </Steps>
          <StepText>&gt;</StepText>
          <Steps>
            <StepNumber>3</StepNumber>
            <StepText>Finish</StepText>
          </Steps>
        </ProgressBar>
        <div>{page == 0 ? <Page1 /> : page == 1 ? <Page2 /> : <Page3 />}</div>
      </Container>
    </Pages>
  );
}

export default App;
