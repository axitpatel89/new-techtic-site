import styled from "styled-components";
// import PlayButton from '../../../images/PlayButton.png';
import PlayButton from "../../../images/Group 66playButton-2.svg";

export const HeroComponent = styled.div`
  margin-top: 125px;

  @media (max-width: 890px) {
    margin-top: 90px;
  }
  @media (max-width: 425px) {
    margin-top: 30px !important;
  }
  & .cursor {
    cursor: none !important;
  }

  & .heading{
    max-width: 753px;
  font-size: 100px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 32px;
  clear: both;

  span {
    color: #000;
  }

  @media (max-width: 890px) {
    font-size: 85px;
    font-weight: 300;
    line-height: 115px;
  }
  @media (max-width: 738px) {
    font-size: 78px;
    font-weight: 300;
    line-height: 115px;
  }

  @media (max-width: 520px) {
    max-width: 201px;
    font-weight: 300;
    font-size: 72px;
    line-height: 94px;
  }
  }
`;

export const StyledTitle = styled.div`
  max-width: 753px;
  font-size: 100px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 32px;
  clear: both;

  span {
    color: #00afaa;
  }

  @media (max-width: 890px) {
    font-size: 85px;
    font-weight: 300;
    line-height: 115px;
  }
  @media (max-width: 738px) {
    font-size: 78px;
    font-weight: 300;
    line-height: 115px;
  }

  @media (max-width: 520px) {
    max-width: 201px;
    font-weight: 300;
    font-size: 72px;
    line-height: 94px;
  }
`;

export const ImgContainer = styled.div`
  cursor: url(${PlayButton}), auto;
  & img {
    width: 100%;
  }

  @media (max-width: 890px) {
    padding: 0 20px;
  }

  & .videoWrapper {
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

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
