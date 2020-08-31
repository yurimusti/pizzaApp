import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lottie from "react-lottie";
import styled from "styled-components";
import { connect } from "react-redux";

import Home from "../pages/home";

import animationData from "../assets/lottie/checkAnimation.json";

interface Props {
  showLoading: boolean;
}

interface PropsLoading {
  show: boolean;
}

const Loading: any = styled.div`
  ${(props: PropsLoading): any =>
    props.show ? "display: flex;" : "display: none;"}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #00000088;
  justify-content: center;
  align-items: center;
`;

const Routes = ({ showLoading }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <BrowserRouter>
      <Loading show={showLoading}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Loading>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStatetoProps = (state: any) => ({
  showLoading: state.utilities.loading,
});

export default connect(mapStatetoProps)(Routes);
