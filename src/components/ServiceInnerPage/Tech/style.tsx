import styled from "styled-components";
import { Col, Row } from "antd";
import theme from "../../../theme";
import { Link } from "gatsby";

export const TechSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
`;
export const TechRow = styled(Row)`
  margin-top: 42px;
  margin-bottom: 156px;

  @media (max-width: 426px) {
    margin-top: 0;
    margin-bottom: 124px;
  }
`;

export const TechCol = styled(Col)`
  padding-left: 426px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (max-width: 1199px) {
    padding-left: 175px;
  }


  @media only screen and (max-width: 887px) {
    padding-left: 34px;
  }

  /* @media (max-width: 666px) {
    flex-direction: column;
  } */
  @media (max-width: 604px) {
    padding-left: 0px !important;
    display: flex;
    flex-direction: row !important;
    justify-content: space-between !important;
    flex-wrap: wrap;
    max-width: 100% !important;
  }
`;

export const StyledDiv = styled.div`
  @media (max-width: 768px) {
    max-width: 100% !important;
    margin: auto;
  }
  @media (max-width: 650px) {
    max-width: 49% !important;
    
    &:nth-child(1) {
      margin-right: 5px;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-top: 131px;
  height: 52px;
  & img {
    height: 52px !important;
    object-fit: contain !important;
    object-position: center left !important;
  }

  @media (max-width: 790px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 72px;
  }
  @media (max-width: 426px) {
    & img {
      height: auto !important;
    }
  }
  @media (max-width: 419px) {
    width: 120px;
  }
`;

export const Text = styled.div`
  margin-top: 15px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  max-width: 295px;

  @media (max-width: 604px) {
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const TechLink = styled(Link)`
  margin-top: 10rem !important;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: ${theme.black} !important;
  text-decoration: underline !important;

  &:hover{
    color: ${theme.cyan} !important;
    
  }

  @media (max-width: 604px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
  }
`;
