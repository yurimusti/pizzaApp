import React from "react";
import { Button } from "antd";

import * as Styled from "./style";

interface Options {
  value: boolean;
  name: string;
}

interface Props {
  options: Array<Options>;
  size: string;
  crustType: string;
  finish: Function;
}

const renderPrice: any = (
  size: string,
  crustType: string,
  options: Array<Options>
) => {
  let price: number = 0;
  size === "small"
    ? (price += 8)
    : size === "medium"
    ? (price += 10)
    : (price += 10);

  crustType === "thin" ? (price += 2) : (price += 4);

  const optionsSelected = options.filter((e) => e.value);

  if (optionsSelected.length >= 3) {
    price += optionsSelected.splice(3, optionsSelected.length).length * 0.5;
  }
  return price;
};

const StepCheck = ({ options, size, crustType, finish }: Props) => {
  return (
    <Styled.StepMain>
      <Styled.ContainerInfo>
        <Styled.Title>Check your Pizza...</Styled.Title>
        <Styled.Description>
          <b>Pizza Size:</b>{" "}
          {`${
            size === "small"
              ? "Small ($8)"
              : size === "medium"
              ? "Medium ($10)"
              : "Large ($12)"
          }`}
        </Styled.Description>
        <Styled.Description>
          <b>Pizza Crust type:</b>{" "}
          {`${crustType === "thin" ? "Thin ($2)" : "Thick ($4)"}`}
        </Styled.Description>
        <Styled.Description>
          <b>Pizza Toppings: </b>
        </Styled.Description>
        {`${options
          .filter((e) => e.value)
          .map((e) => {
            return `${e.name} `;
          })}`}
        <Styled.Description>
          <b>Total Prize:</b> ${renderPrice(size, crustType, options)}
        </Styled.Description>
      </Styled.ContainerInfo>
      <Styled.ContainerButton>
        <Button type="primary" shape="round" onClick={() => finish()}>
          Finish
        </Button>
      </Styled.ContainerButton>
    </Styled.StepMain>
  );
};

export default StepCheck;
