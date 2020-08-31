/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useDispatch, connect } from "react-redux";

import * as actionPizza from "../../store/modules/utilities/actions";

import * as Styled from "./style";
import { ReactComponent as SmallPizza } from "../../assets/svg/Pizza4.svg";
import { ReactComponent as MediumPizza } from "../../assets/svg/Pizza6.svg";
import { ReactComponent as LargePizza } from "../../assets/svg/Pizza8.svg";

import { ReactComponent as CrustThin } from "../../assets/svg/Thin.svg";
import { ReactComponent as CrustThick } from "../../assets/svg/Thick.svg";

import { ReactComponent as Pepperoni } from "../../assets/svg/Pepperoni.svg";
import { ReactComponent as Mushroom } from "../../assets/svg/Mushroom.svg";
import { ReactComponent as Onions } from "../../assets/svg/Onions.svg";
import { ReactComponent as ExtraCheese } from "../../assets/svg/Extra_cheese.svg";
import { ReactComponent as Sausage } from "../../assets/svg/Sausage.svg";
import { ReactComponent as Bacon } from "../../assets/svg/Bacon.svg";
import { ReactComponent as BlackOlives } from "../../assets/svg/BlackOlives.svg";
import { ReactComponent as GreenPeppers } from "../../assets/svg/GreenPeppers.svg";
import { ReactComponent as Pineapple } from "../../assets/svg/Pineapple.svg";
import { ReactComponent as Spinach } from "../../assets/svg/Spinach.svg";

import animationData from "../../assets/lottie/checkAnimation.json";
import finishAnimationData from "../../assets/lottie/finishAnimation.json";

import {
  StepSize,
  StepCrust,
  StepToppings,
  StepCheck,
  StepSuccess,
} from "./steps";
import { notification } from "antd";

interface Options {
  name: string;
  value: boolean;
}

interface Props {
  list: Array<Options>;
}

const Home = ({ list = [] }: Props) => {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState("small");
  const [crustType, setCrustType] = useState("thin");

  const [options, setOptions] = useState([] as Array<Options>);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionPizza.getList());
  }, []);

  useEffect(() => {
      const newList: any = list.map((e) => ({ ...e, value: false }));
      setOptions(newList);
  }, [list]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionFinish = {
    loop: true,
    autoplay: true,
    animationData: finishAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const _handleChangeStep: any = () => {
    setStep(step + 1);
  };

  const _handleChangeToppings: any = (name: string, value: boolean): any => {
    const verifyOptions = options.filter((e) => e.value === true);

    const changeValue = (): any => {
      const newOptions = options.map((e) =>
        e.name === name ? { ...e, value } : { ...e }
      );
      setOptions(newOptions);
    };

    if (size === "small" && (verifyOptions.length < 5 || value !== true)) {
      changeValue();
    } else if (
      size === "medium" &&
      (verifyOptions.length < 7 || value !== true)
    ) {
      changeValue();
    } else if (
      size === "large" &&
      (verifyOptions.length < 9 || value !== true)
    ) {
      changeValue();
    } else {
      notification.warn({ message: "Alert !", description: "Max toppings." });
    }
  };

  const renderViewCrust = (): any => {
    if (crustType === "thin") {
      return (
        <>
          <CrustThin />
        </>
      );
    } else {
      return (
        <>
          <CrustThick />
        </>
      );
    }
  };

  const renderViewSize = (): any => {
    if (size === "small") {
      return (
        <>
          <SmallPizza />
        </>
      );
    } else if (size === "medium") {
      return (
        <>
          <MediumPizza />
        </>
      );
    } else if (size === "large") {
      return (
        <>
          <LargePizza />
        </>
      );
    }
  };

  const renderViewToppings = (): any => {
    return (
      <Styled.RenderToppings>
        {size === "small" ? (
          <SmallPizza />
        ) : size === "medium" ? (
          <MediumPizza />
        ) : (
          <LargePizza />
        )}
        <Styled.RenderToppingsItens>
          {options
            .filter((e) => e.value === true)
            .map((e) => {
              switch (e.name) {
                case "Pepperoni":
                  return (
                    <Styled.RenderToppingsItem type="pepperoni">
                      <Pepperoni />
                    </Styled.RenderToppingsItem>
                  );

                case "Mushrooms":
                  return (
                    <Styled.RenderToppingsItem type="mushrooms">
                      <Mushroom />
                    </Styled.RenderToppingsItem>
                  );

                case "Onions":
                  return (
                    <Styled.RenderToppingsItem type="onions">
                      <Onions />
                    </Styled.RenderToppingsItem>
                  );

                case "Sausage":
                  return (
                    <Styled.RenderToppingsItem type="sausage">
                      <Sausage />
                    </Styled.RenderToppingsItem>
                  );

                case "Bacon":
                  return (
                    <Styled.RenderToppingsItem type="bacon">
                      <Bacon />
                    </Styled.RenderToppingsItem>
                  );
                case "Extra cheese":
                  return (
                    <Styled.RenderToppingsItem type="Extra cheese">
                      <ExtraCheese />
                    </Styled.RenderToppingsItem>
                  );

                case "Black olives":
                  return (
                    <Styled.RenderToppingsItem type="Black olives">
                      <BlackOlives />
                    </Styled.RenderToppingsItem>
                  );

                case "Green peppers":
                  return (
                    <Styled.RenderToppingsItem type="Green peppers">
                      <GreenPeppers />
                    </Styled.RenderToppingsItem>
                  );

                case "Pineapple":
                  return (
                    <Styled.RenderToppingsItem type="Pineapple">
                      <Pineapple />
                    </Styled.RenderToppingsItem>
                  );

                case "Spinach":
                  return (
                    <Styled.RenderToppingsItem type="Spinach">
                      <Spinach />
                    </Styled.RenderToppingsItem>
                  );

                default:
                  return <></>;
              }
            })}
        </Styled.RenderToppingsItens>
      </Styled.RenderToppings>
    );
  };

  const renderView: any = () => {
    switch (step) {
      case 0:
        return renderViewSize();
      case 1:
        return renderViewCrust();
      case 2:
        return renderViewToppings();

      case 3:
        return (
          <>
            <Lottie options={defaultOptions} height={400} width={400} />
          </>
        );
      case 4:
        return (
          <>
            <Lottie options={defaultOptionFinish} height={400} width={400} />
          </>
        );
      default:
        break;
    }
  };

  const renderOptions: any = () => {
    switch (step) {
      case 0:
        return (
          <StepSize
            changeStep={_handleChangeStep}
            changeSize={setSize}
            size={size}
          />
        );
      case 1:
        return (
          <StepCrust
            changeStep={_handleChangeStep}
            changeCrust={setCrustType}
            crust={crustType}
          />
        );
      case 2:
        return (
          <StepToppings
            options={options}
            changeOptions={_handleChangeToppings}
            changeStep={_handleChangeStep}
          />
        );
      case 3:
        return (
          <StepCheck
            options={options}
            size={size}
            crustType={crustType}
            finish={_handleChangeStep}
          />
        );

      case 4:
        return <StepSuccess />;

      default:
        break;
    }
  };

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.View>{renderView()}</Styled.View>
        <Styled.Options>{renderOptions()}</Styled.Options>
      </Styled.Container>
    </Styled.Main>
  );
};

const mapStateToProps = (state: any): any => ({
  list: state.utilities.list,
});

export default connect(mapStateToProps)(Home);
