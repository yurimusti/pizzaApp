import styled from "styled-components";

export const Main: any = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container: any = styled.div`
  width: 80%;
  height: 80vh;
  background: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const View: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 70%;
    height: 70%;
  }
`;

export const Options: any = styled.div`
  flex: 1;
`;

export const RenderToppings: any = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const renderPosition: any = (type: string) => {
  switch (type) {
    case "pepperoni":
      return `
      svg{
        position: absolute;
        width: 25%;
        height: 25%;
        top: 20%;
        right: 50%;
      }`;

    case "mushrooms":
      return `
      svg{
        position: absolute;
        width: 25%;
        height: 25%;
        top: 45%;
        right: 50%;
      }`;

    case "onions":
      return `
        svg{
          position: absolute;
          width: 25%;
          height: 25%;
          top: 70%;
          right: 50%;
        }`;

    case "sausage":
      return `
        svg{
          position: absolute;
          width: 25%;
          height: 25%;
          top: 20%;
          right: 0%;
        }`;

    case "bacon":
      return `
        svg{
          position: absolute;
          width: 25%;
          height: 25%;
          top: 45%;
          right: 0%;
        }`;

    case "Extra cheese":
      return `
        svg{
          position: absolute;
          width: 25%;
          height: 25%;
          top: 70%;
          right: 0%;
        }`;

    case "Green peppers":
      return `
            svg{
              position: absolute;
              width: 25%;
              height: 25%;
              top: 20%;
              right: -50%;
            }`;

    case "Black olives":
      return `
          svg{
            position: absolute;
            width: 25%;
            height: 25%;
            top: 45%;
            right: -50%;
          }`;

    case "Pineapple":
      return `
      svg{
        position: absolute;
        width: 25%;
        height: 25%;
        top: 70%;
        right: -50%;
      }`;
    case "Spinach":
      return `
          svg{
            position: absolute;
            width: 25%;
            height: 25%;
            top: 0;
            right: 0%;
      }`;

    default:
      break;
  }
};

interface Props {
  type: string;
}

export const RenderToppingsItens: any = styled.div`
  width: 60%;
  height: 90%;
  position: absolute;
`;

export const RenderToppingsItem: any = styled.div`
  width: 60%;
  height: 90%;
  position: absolute;
  ${({ type }: Props): any => renderPosition(type)}
`;
