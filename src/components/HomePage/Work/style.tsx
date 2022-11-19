import styled from "styled-components";
import theme from "../../../theme";
import { AboutDescription, AboutParagraph } from "../../Global/globalStyle";
import ViewButton from "../../../images/Group 67ViewButton-2.svg";

export const WorkComponent = styled.div`
  margin-top: 156px;
  padding-bottom: 90px;
  background: ${theme.white};
  color: ${theme.black};
  h1.antd-title-1 {
    color: ${theme.black};
    padding-bottom: 156px;
    max-width: 925px;
  }
`;

export const ImageCol = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 154px;

  @media (max-width: 768px) {
    margin-top: 72px;
  }
  & div:last-child {
    margin-top: 147px !important;
    margin-left: -400px !important;
    margin-bottom: -52px !important;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Description = styled(AboutDescription)`
  margin-top: 300px;

  @media (max-width: 768px) {
    margin-top: 96px;
    margin-bottom: 96px;
  }
`;

export const AboutText = styled(AboutParagraph)`
  margin-bottom: 40px;
  line-height: 48px;
  p {
    margin-bottom: 28px !important;
    &:last-child {
      margin-bottom: 0px !important;
    }
  }

  @media only screen and (max-width: 991px) {
    line-height: 31.2px;
    font-size: 24px !important;
  }
`;

export const WorkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .work-box {
    max-width: 525px;
    width: 100%;
    margin-bottom: 50px;
  }

  & div.work-box:nth-child(2) {
    margin-left: auto;
    margin-top: -220px;
  }
  & div.work-box:nth-child(3) {
    margin-right: auto;
    margin-top: -20%;
    max-width: 575px;
  }
  & div.work-box:nth-child(4) {
    margin-left: auto;
    /* margin-right: auto; */
    max-width: 710px;
  }

  @media (max-width: 1200px) {
    .work-box {
      max-width: 450px !important;
    }
    & div.work-box:nth-child(2) {
      margin-top: 0;
      max-width: 480px !important;
    }
    & div.work-box:nth-child(3) {
      margin-top: 0;
      max-width: 480px !important;
    }
    & div.work-box:nth-child(4) {
      margin-top: 0;
      max-width: 480px !important;
    }
  }
  @media (max-width: 980px) {
    .work-box {
      max-width: 340px !important;
      margin-bottom: 30px;
    }
    & div.work-box:nth-child(2) {
      margin-top: 0;
      max-width: 370px !important;
    }
    & div.work-box:nth-child(3) {
      margin-top: 0;
      max-width: 370px !important;
    }
    & div.work-box:nth-child(4) {
      max-width: 297px !important;
    }
  }
  @media (max-width: 768px) {
    .work-box {
      margin-top: -10px !important;
      max-width: 306px !important;
    }
    & div.work-box:nth-child(2) {
      margin-top: 0;
      max-width: 275px !important;
    }
    & div.work-box:nth-child(3) {
      max-width: 275px !important;
    }
    & div.work-box:nth-child(4) {
      max-width: 300px !important;
    }
  }
`;

export const WorkBoxInner = styled.div`
  a {
    cursor: url(${ViewButton}), auto;
    position: relative;
    display: block;
    -webkit-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s !important;
  }

  a .view-click {
    width: 98px;
    height: 98px;
    background: #00afaa;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - -70px));
    left: 36px;
    opacity: 0;
    visibility: hidden;
    transition: all 3s ease 2s !important;
  }

  a:hover .view-click {
    opacity: 1;
    visibility: visible;
  }

  .description-project-info {
    border-top: 1px solid #000;
    padding-top: 15px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease 0s;

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 18px;
      color: #000000;
    }
  }

  a:hover {
    .description-project-info {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 980px) {
    a .view-click {
      width: 58px;
      height: 58px;
      transform: translateY(calc(-50% - -20px));
    }
  }
  @media (max-width: 768px) {
    a .view-click {
      width: 48px;
      height: 48px;
      font-size: 14px;
    }
    .description-project-info {
      padding: 10px;
    }
  }
`;

export const WorkImg = styled.div`
  line-height: 0;
  position: relative;
`;

export const WorkName = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }

  h4 {
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: #000000;
    margin-bottom: 0;
  }

  @media (max-width: 980px) {
    h4 {
      font-size: 16px;
    }
  }
`;

export const ProductTag = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  display: block;

  @media (max-width: 980px) {
    font-size: 16px;
  }
`;
