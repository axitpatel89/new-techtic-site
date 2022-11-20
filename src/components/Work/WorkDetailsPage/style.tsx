import { Col, Modal, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import quote from "../../../images/quote.png";

export const WorkSectionContainer = styled.div`
  margin-top: 102px;
`;

export const HeadingDescription = styled.div`
  max-width: 815px;
  margin-top: 60px;
  p {
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    color: ${theme.black};
    margin-bottom: 50px;
  }
`;

export const SpecificationSection = styled.div`
  max-width: 510px;

  img {
    margin-top: -5px;
  }
`;

export const SpecificationInner = styled.div`
  margin-bottom: 24px;
  clear: both;
`;

export const SpecificationsHeading = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: ${theme.black};
  float: left;
`;
export const SpecificationsValue = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: ${theme.black};
  p {
    margin-bottom: 0px;
  }
`;

export const BannerImageSection = styled.div`
  margin-top: 81px;
  margin-bottom: 240px;
  text-align: center;

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    max-width: 1238px;
    max-height: 768px;
  }

  @media (max-width: 992px) {
    margin-bottom: 176px;
  }
  @media (max-width: 768px) {
    margin-bottom: 112px;
  }
`;

export const OurProcessSection = styled.div`
  margin: 168px 0;

  @media (max-width: 768px) {
    margin: 112px 0;
  }
`;

export const RightCol = styled(Col)`
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${theme.black};
  }
  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${theme.black};
    text-decoration: underline;
    :hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }
  @media (max-width: 575px) {
    margin-top: 40px;
  }
`;

export const FeatureSection = styled.div`
  background: #242553;
  padding-top: 112px;
  padding-bottom: 151px;

  @media (max-width: 768px) {
    padding-top: 72px;
    padding-bottom: 112px;
  }
`;

export const SpecialFeaturesSection = styled.div`
  margin-top: 144px;
  margin-bottom: 176px;
  @media (max-width: 768px) {
    margin-top: 72px;
    margin-bottom: 112px;
  }
`;

export const ListContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const ListInnerContainer = styled.div`
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 40px;
    color: ${theme.black};
  }

  ul {
    list-style-type: disc;
    font-weight: 300;
    font-size: 20px;
    line-height: 40px;
    color: ${theme.black};
    padding-left: 25px;
  }
`;

export const BlackSection = styled.div`
  background: ${theme.black};
  padding-top: 153px;
  padding-bottom: 128px;
  @media (max-width: 768px) {
    padding-top: 72px;
    padding-bottom: 112px;
  }
`;

export const ContentBox = styled.div`
  max-width: 610px;
  margin-left: auto;
  margin-right: auto;
  color: ${theme.white};
  & :first-child {
    margin-top: 0px;
  }

  h1 {
    font-size: 40px;
    font-weight: 300;
    line-height: 48px;
    margin-top: 88px;
    @media (max-width: 768px) {
      margin-top: 50px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  ul {
    padding-left: 25px;
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
  }
`;

export const TestimonialAndWeFollowSection = styled.div`
  margin: 112px 0% 72px;

  @media (max-width: 768px) {
    margin: 112px 0 72px;
  }
`;

export const TestimonialContent = styled.div`
  border-top: 1px solid ${theme.black};
  padding-top: 5px;
  div {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.black};
  }
`;

export const SliderBox = styled.div`
  margin: 20px 20px 20px;
  width: auto !important;
  height: auto !important;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    padding-top: 40px;
    font-size: 18px;
    background: url(${quote});
    background-repeat: no-repeat;
    background-size: 143px 106px;
    background-position: right 10px top 0px;
  }
  &img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TestimonialModal = styled(Modal)`
  max-width: 720px !important;
  width: 100% !important;

  @media (max-width: 768px) {
    max-width: calc(100vw - 50px) !important;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;

  & .iframe {
    overflow: hidden;
    border: 0;
    align-self: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoButton = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & img {
    margin-bottom: 0px !important;
  }
`;

export const Videodiv = styled.div`
  max-width: 165px;
  max-height: 165px;
  position: relative;

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    max-width: 160px;
    max-height: 160px;
    width: 160px;
    height: 160px;
  }
`;

export const DescriptionCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media (max-width: 992px) {
    margin-top: 30px;
  }
`;

export const Imagecontainer = styled(Col)`
  display: flex;
  align-self: baseline;
`;

export const Review = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const Author = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
  margin-bottom: 10px;
`;

export const Company = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
`;

export const WeFollowAgileContent = styled.div`
  border-top: 1px solid ${theme.black};
  padding-top: 5px;
  div {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.black};
    margin-bottom: 70px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${theme.black};
  }
  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${theme.black};
    text-decoration: underline;
    :hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }
`;

export const WebSlider = styled.div`
  .swiper-slide.swiper-slide-active {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  .swiper-button-prev {
    left: 0px;
    right: auto;
    color: ${theme.white};
  }
  .swiper-button-next {
    right: 0px;
    left: auto;
    color: ${theme.white};
  }
  .my-custom-pagination-div {
    text-align: center;
    margin-top: 120px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid ${theme.white};
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    background: ${theme.white};
  }
`;

export const SliderRow = styled(Row)`
  margin-top: 72px;
  margin-left: 30px !important;
  margin-right: 30px !important;
`;

export const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  @media (max-width: 992px) {
    min-height: auto;
  }
`;
export const WebLeftContent = styled.div`
  max-width: 460px;
  max-height: 691px;
`;

export const WebRightContent = styled.div`
  max-width: 420px;

  @media (max-width: 992px) {
    margin-top: 50px;
    max-width: 100%;
    text-align: center;
  }
  h3 {
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    color: ${theme.white};
  }

  div {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    color: ${theme.white};
  }

  @media (max-width: 768px) {
    h3 {
      font-weight: 300;
      font-size: 32px;
      line-height: 36px;
      color: ${theme.white};
    }

    div {
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: ${theme.white};
    }
  }
`;
