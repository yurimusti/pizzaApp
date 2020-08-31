import React from "react";

import * as Styled from "./style";

interface Props {}

const StepSuccess = (props: Props) => {
  return (
    <Styled.StepMain>
      <Styled.ContainerInfo>
        <Styled.Title>Success!</Styled.Title>
        <Styled.Description>
          Thank you! Your pizza is being prepared.{" "}
        </Styled.Description>
      </Styled.ContainerInfo>
    </Styled.StepMain>
  );
};

export default StepSuccess;
