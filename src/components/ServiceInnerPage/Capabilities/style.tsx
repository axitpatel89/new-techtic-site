import styled from "styled-components";
import theme from "../../../theme";
import { PrimaryButton } from "../../Global/button";
import { Col, Row } from "antd";

export const BlackBackground = styled.div`
  background-color: ${(props) => props.color || theme.white};
  padding-top: 156px;
  padding-bottom: 156px;
  margin-bottom: 156px;
  color: ${theme.white} !important;
  @media (max-width: 426px) {
    padding-top: 72px;
    padding-bottom: 96px;
    margin-bottom: 124px;
  }
`;

export const CapabilitiesRow = styled(Row)`
  position: relative;
`;

export const LeftSide = styled(Col)`
  height: 50vh;
  position: sticky;
  top: 30%;

  @media (max-width: 992px){
    height: auto;
    position: relative;
    top: 0;
  }
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-top: 60px;
  @media (max-width: 390px) {
    margin-top: 40px;
  }
`;

export const StyledCol = styled(Col)`
  @media (max-width: 992px) {
    margin-top: 96px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledDiv = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding-top: 40px;
  padding-bottom: 40px;
  list-style-type: none;

  @media (max-width: 390px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const StyledSubTitle = styled.ul`
  font-size: 40px;
  line-height: 48px;
  font-weight: 300px;
  margin-bottom: 16px;

  @media (max-width: 604px) {
    font-size: 25px;
    line-height: 38px;
  }
  @media (max-width: 419px) {
    font-size: 22px;
    line-height: 33px;
  }
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
`;
export const StyledDiscription = styled.div`
  li {
    font-size: 18px;
    line-height: 24px;
    font-weight: 300px;
    margin-bottom: 8px !important;
    list-style-type: none !important;

    :last-child {
      margin-bottom: 0px !important;
    }

    @media (max-width: 604px) {
      font-size: 16px;
      line-height: 25px;
    }
    @media (max-width: 419px) {
      font-size: 13px;
      line-height: 20px;
    }
    @media (max-width: 390px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
