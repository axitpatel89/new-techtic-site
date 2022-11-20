import styled from "styled-components";
import theme from "../../../theme";
import DragButton from "../../../images/Group 62DragButton-2.svg";

export const StyledParagraph = styled.div`
  margin-top: 56px;
  max-width: 809px;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  color: ${theme.black};

  @media (max-width: 890px) {
    margin-top: 24px;
    font-weight: 300;
    font-size: 35px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    margin-top: 24px;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
  }
  @media (max-width: 425px) {
    margin-top: 24px;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  margin-top: 156px;
  margin-bottom: 248px;
  padding-left: calc((100vw - 1220px) / 2);

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

  img {
    object-fit: contain !important;
    max-height: auto;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    font-weight: 300 !important;
    width: auto !important;
    max-width: 500px;
    max-height: 600px;

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

export const LineComponent = styled.div`
  max-width: 100%;
  margin-top: 16px;

  & :first-child {
    max-width: 60% !important;
    @media (max-width: 767px) {
      max-width: 70% !important;
    }
  }
  span {
    &:first-child {
      float: left;
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
`;
