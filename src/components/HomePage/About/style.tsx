import styled from "styled-components";
import { AboutParagraph } from "../../Global/globalStyle";
import DragButton from "../../../images/Group 62DragButton-2.svg";
import theme from "../../../theme";

export const AboutComponent = styled.div`
  margin-top: 156px;
  h1.antd-title-1 {
    margin-bottom: 112px;
    max-width: 925px;
  }
  @media (max-width: 768px) {
    margin-top: 124px;
  }
  @media (max-width: 426px) {
    margin-top: 72px;
  }

  & .heading {
    font-weight: 300;
    font-size: 100px;
    line-height: 130px;
    margin: 0;
    color: ${theme.black} !important;

    span {
      color: ${theme.black} !important;
    }

    @media (max-width: 890px) {
      font-weight: 300px;
      font-size: 70px;
      line-height: 115px;
      margin: 0;
    }
    @media (max-width: 768px) {
      font-weight: 300px;
      font-size: 58px;
      line-height: 85px;
      margin: 0;
    }
    @media (max-width: 426px) {
      font-weight: 300;
      font-size: 49px;
      line-height: 62px;
    }
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  margin-bottom: 248px;
  padding-left: calc((100vw - 1220px) / 2);
  z-index: 0;

  @media (max-width: 1220px) {
    margin-left: 70px;
  }
  @media (max-width: 790px) {
    margin-left: 50px;
  }
  @media (max-width: 425px) {
    margin-left: 20px;
  }

  @media (max-width: 890px) {
    margin-top: 80px !important;
    margin-bottom: 165px !important;
  }
  @media (max-width: 425px) {
    margin-top: 96px !important;
    margin-bottom: 124px !important;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper .swiper-slide:last-child {
    margin-right: 30px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: auto !important;
    margin: auto 0px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionPoints = styled(AboutParagraph)`
  margin-bottom: 51px;
  p {
    margin-bottom: 48px !important;
  }
`;
