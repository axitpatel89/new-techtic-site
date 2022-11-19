import { Carousel, Col } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import { LineComponent, WorkParagraph } from "../../Global/globalStyle";
import ViewButton from '../../../images/Group 67ViewButton-2.svg';

export const BlackBackground = styled.div`
  background: ${theme.black};
  padding-top: 100px;
  margin-bottom: 156px;
  padding-bottom: 100px;
  color: ${theme.white};
  .ant-row {
    div {
      border-color: ${theme.white} !important;
      align-self: end;
      &:nth-last-child(2) {
        max-width: 100%;
      }
    }
  }
  button {
    bottom: auto;
    top: 141px;
    left: 125px;
  }
  @media (max-width: 992px) {
    padding-top: 145px;
    margin-bottom: 145px;
    padding-bottom: 145px;
  }
  @media (max-width: 768px) {
    padding-top: 72px;
    margin-bottom: 123px;
    padding-bottom: 96px;
  }
`;

export const SecondaryHeading = styled.div`
  margin-bottom: 96px;
`;

export const TextCol = styled(Col)`
  max-width: 45.83333333% !important;
  @media (max-width: 992px) {
    margin-bottom: "140px" !important;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 768px) {
    max-width: 100% !important;
    margin-bottom: 60px !important;
  }
  @media (max-width: 425px) {
    width: 350px;
    margin-bottom: 56px !important;
  }
`;

export const Carouselcomponent = styled(Carousel)`
  color: ${theme.white};
  font-weight: 300;
  font-size: 24px;
  line-height: 31px;
  padding-right: 65px;
  margin-bottom: 120px;
  @media (max-width: 992px) {
    font-weight: 300;
    font-size: 20px;
    line-height: 26px;
  }
  @media only screen and (max-width: 575px) {
    padding-right: 0;
  }
  @media (max-width: 425px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
    line-height: 23px;
    display: block;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 24px;
    font-weight: 300;
    line-height: 31px;
  }
  .slick-prev,
  .slick-next {
    margin-top: 0 !important;
    bottom: -23px;
    top: auto !important;
    width: auto !important;
    text-align: left;
    &:before {
      color: ${theme.white};
      position: absolute;
      font-size: 20px;
    }
  }
  .slick-prev {
    left: 0 !important;
  }
  .slick-next {
    right: auto;
    left: 35px;
  }
  ul.slick-dots.slick-dots-bottom {
    display: none !important;
  }
`;

export const ImgCol = styled(Col)`
 cursor: url(${ViewButton}), auto;
  @media (max-width: 769px) {
    max-width: 100% !important;
    margin-left: auto;
    margin-right: auto;
  }
  .hover_Img {
    opacity: 0;
  }

  :hover {
    .hover_Img {
      opacity: 1;
    }
  }
`;

export const ImgLineComponent = styled(LineComponent)`
  border-bottom: 1px solid #000;
  max-width: 100% !important;
  span {
    font-size: 18px;
    font-weight: 300;
  }
`;
