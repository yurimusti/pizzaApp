import React from "react";
import { Button, Radio } from "antd";
import * as Styled from "./style";

interface Props {
  changeStep: Function;
  changeSize: Function;
  size: string;
}

const StepSize = ({ changeStep, changeSize, size }: Props) => {
  return (
    <Styled.StepMain>
      <Styled.ContainerInfo>
        <Styled.Title>Hello ! Welcome to PizzaApp</Styled.Title>
        <Styled.Description>First, choose your pizza size.</Styled.Description>
      </Styled.ContainerInfo>
      <Styled.ListContainer>
        <Radio.Group
          onChange={(e: any): any => {
            changeSize(e.target.value);
          }}
          value={size}
        >
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Styled.ListContainer>
      <Styled.ContainerButton>
      <Button type="primary" shape="round" onClick={() => changeStep()}>
        Next Step >>
      </Button>
      </Styled.ContainerButton>
      
    </Styled.StepMain>
  );
};

export default StepSize;
