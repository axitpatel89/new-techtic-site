import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import { AboutParagraph } from "../../Global/globalStyle";

export const WhatWeOfferSection = styled.div`
  background: ${(props) => props.color || theme.white};
`;

export const ImgContainer = styled(Row)`
  margin: 112px 0;

  @media (max-width: 767px) {
    margin: 95px 0 72px;
  }
`;
export const FirstImage = styled(Col)`
  @media (min-width: 1220px) {
    padding-right: 50px;
  }
  @media (max-width: 1220px) {
    padding-right: 43px;
  }
  @media (max-width: 767px) {
    padding-right: 0px;
    padding-left: 192px;
    padding-bottom: 40px;
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 597px) {
    padding-left: 142px;
    width: 36% !important;
  }
  @media (max-width: 500px) {
    padding-left: 100px;
  }
  @media (max-width: 426px) {
    padding-left: 92px;
  }

  img {
    margin-bottom: 0rem;
    margin-top: 122px;

    @media (max-width: 767px) {
      margin-top: 0px;
    }
  }
`;
export const SecondImage = styled(Col)`
  @media (max-width: 767px) {
    padding-right: 192px;
  }
  @media (max-width: 597px) {
    padding-right: 142px;
  }
  @media (max-width: 500px) {
    padding-right: 100px;
  }
  @media (max-width: 426px) {
    padding-right: 92px;
  }
  img {
    margin-bottom: 0rem;
  }
`;

export const Description = styled(AboutParagraph)`
  max-width: 659px;
`;

export const LogoContainer = styled(Row)`
  margin: 112px 0 48px;
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: space-between !important;
    margin: 75px 0 69px;
  }
`;

export const Logo = styled(Col)`
  margin-bottom: 120px;
  img {
    margin-bottom: 0rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 48px !important;
  }

  @media (max-width: 426px) {
    img {
      object-fit: contain !important;
      opacity: 1;
      max-height: 57px !important;
      max-width: 120px;
    }
  }
`;
