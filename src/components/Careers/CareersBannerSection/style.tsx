import styled from "styled-components";
// import DragButton from '../../../images/DragButton.png'
import DragButton from "../../../images/Group 62DragButton-2.svg";

export const MainContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 156px;

  @media (max-width: 890px) {
    margin-top: 96px !important;
    margin-bottom: 165px !important;
  }
  @media (max-width: 426px) {
    margin-top: 72px !important;
    margin-bottom: 124px !important;
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  margin-top: 96px;
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
  }
  @media (max-width: 426px) {
    margin-top: 72px !important;
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
