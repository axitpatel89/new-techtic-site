import styled from "styled-components";
import theme from "../../../theme";
import { BlackButton } from "../../Global/button";
import DragButton from "../../../images/DragButton.png";

export const WhoItsForSection = styled.div`
  background: ${(props) => props.color || theme.white};
`;

export const BuildTeamButton = styled(BlackButton)`
  margin-top: 48px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 96px;
  }
  @media (max-width: 390px) {
    margin-top: 40px;
    margin-bottom: 96px;
  }
`;

export const StyledDiv = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media (max-width: 390px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 40px;
  line-height: 48px;
  font-weight: 300;
  margin-bottom: 0rem;
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
`;

export const StyledDiscription = styled.div`
  font-size: 18px;
  padding-top: 16px;
  margin-bottom: 0rem;
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding-top: 16px !important;
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  margin-top: 156px;
  margin-bottom: 156px;
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
  @media (max-width: 426px) {
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
