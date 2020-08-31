import React from "react";
import { Checkbox, Button } from "antd";

import * as Styled from "./style";

interface Options {
  value: boolean;
  name: string;
}

interface Props {
  options: Array<Options>;
  changeOptions: Function;
  changeStep: Function;
}

const StepToppings = ({ options, changeOptions, changeStep }: Props) => {
  return (
    <Styled.StepMain>
      <Styled.ContainerInfo>
        <Styled.Title>Nice !</Styled.Title>
        <Styled.Description>You can choose 0-3 toppings whitout any additional cost for the pizza. If you add more ingredients, will be add $0.50 in total per ingredient.</Styled.Description>
      </Styled.ContainerInfo>
      <Styled.ListContainer>
        {options.map((e) => {
          return (
            <Checkbox
              checked={e.value}
              onChange={(ee) => changeOptions(e.name, ee.target.checked)}
            >
              {e.name}
            </Checkbox>
          );
        })}
      </Styled.ListContainer>
      <Styled.ContainerButton>
        <Button type="primary" shape="round" onClick={() => changeStep()}>
          Next Step >>
        </Button>
      </Styled.ContainerButton>
    </Styled.StepMain>
  );
};

export default StepToppings;
