import styled from "styled-components";
import { Row } from "antd";
import { Link } from "gatsby";
import DragButton from "../../../images/Group 62DragButton-2.svg";

export const StyledRow = styled(Row)`
  padding-left: calc((100vw - 1220px) / 2);
  margin-bottom: 156px;
  @media (max-width: 991px) {
    margin-bottom: 124px;
  }

  @media (max-width: 1220px) {
    padding-left: 70px;
  }
  @media (max-width: 790px) {
    padding-left: 50px;
  }
  @media (max-width: 426px) {
    padding-left: 20px;
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  @media (max-width: 991px) {
    margin-top: 73px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper .swiper-slide:last-child {
    margin-right: 20px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: auto !important;
    max-width: 590px;
    max-height: auto;

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

    @media (max-width: 1025px) {
      max-width: 430px;
      max-height: auto;
    }
    @media (max-width: 991px) {
      max-width: 500px;
      max-height: auto;
    }

    @media (max-width: 767px) {
      max-width: 440px;
      max-height: auto;
    }

    @media (max-width: 480px) {
      max-width: 290px;
      max-height: auto;
    }
  }
`;

export const SingleLine = styled.div`
  div {
    border: none;
  }
`;

export const LineComponent = styled.div`
  max-width: 100%;
  margin-top: 16px;
  span {
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    &:first-child {
      float: left;
      width: 80%;
      text-align: left;
    }
    &:last-child {
      float: right;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }

  @media (max-width: 768px) {
    margin-top: 8px;

    span {
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
      &:first-child {
        float: left;
      }
      &:last-child {
        float: right;
      }
    }
  }
`;
