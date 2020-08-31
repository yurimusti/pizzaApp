import React from "react";
import { Button, Radio } from "antd";
import * as Styled from "./style";

interface Props {
  changeStep: Function;
  changeCrust: Function;
  crust: string;
}

const StepCrust = ({ changeStep, changeCrust, crust }: Props) => {
  return <Styled.StepMain>
    <Styled.ContainerInfo>
      <Styled.Title>Good! </Styled.Title>
      <Styled.Description>Now, choose your crust type:</Styled.Description>
    </Styled.ContainerInfo>
    <Styled.ListContainer>
      <Radio.Group
        onChange={(e: any): any => {
          changeCrust(e.target.value);
        }}
        value={crust}
      >
        <Radio.Button value="thin">Thin</Radio.Button>
        <Radio.Button value="thick">Thick</Radio.Button>
      </Radio.Group>
    </Styled.ListContainer>
    <Styled.ContainerButton>
      <Button type="primary" shape="round" onClick={() => changeStep()}>
        Next Step >>
      </Button>
    </Styled.ContainerButton>

  </Styled.StepMain>;
};

export default StepCrust;
