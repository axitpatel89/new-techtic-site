import styled from "styled-components";
import theme from "../../../theme";

export const GrowthStageSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
  margin-bottom: 157px;
`;

export const WrapperLG = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .container .left {
    position: sticky;
    z-index: 1;
    background: white;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container img {
    width: 45vw;
  }
  .container > div {
    height: 100%;
    width: 45vw;
  }
  .container .in-in-middle {
    height: auto !important;
    margin-bottom: 100px;

    h1 {
      font-size: 40px;
      font-weight: 300;
      line-height: 48px;
    }
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
    }

    @media (max-width: 426px) {
      h1 {
        font-size: 24px;
        font-weight: 300;
        line-height: 31px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }
    }
  }
`;

export const WrapperSM = styled.div`
  display: block;
  img {
    margin: 45px auto;
  }
  .ant-carousel .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: lightgray;
    opacity: 1;
  }

  .ant-carousel .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    opacity: 1;
    background: black;
  }
  .container .in-in-middle {
    height: auto !important;
    margin-bottom: 100px;

    h1 {
      font-size: 40px;
      font-weight: 300;
      line-height: 48px;
    }
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
    }

    @media (max-width: 426px) {
      h1 {
        font-size: 24px;
        font-weight: 300;
        line-height: 31px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }
    }
  }
`;
