import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import { PrimaryButton } from "../../Global/button";

export const BlueBackground = styled.div`
  background: ${(props) => props.color || theme.white};
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

export const AuditRow = styled(Row)`
  margin-top: 96px;
  @media (max-width: 604px) {
    margin-top: 65px;
  }
  @media (max-width: 390px) {
    margin-top: 24px;
  }
`;

export const AuditCol = styled(Col)`
  display: flex;
  align-items: flex-end !important;
  font-size: 21px;
  font-weight: 300;
  line-height: 31px;
  padding-right: 110px;
  @media (max-width: 992px) {
    padding-right: 0px;
  }

  @media (max-width: 604px) {
    font-size: 20px;
  }
  @media (max-width: 419px) {
    font-size: 17px;
  }
  @media (max-width: 390px) {
    max-width: 289px;
    padding-right: 0px;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
  }

  ul {
    padding-left: 40px;
  }
`;

export const ImgCol = styled(Col)`
  text-align: center;
  @media (max-width: 992px) {
    margin-top: 72px;
  }
`;

export const AuditButton = styled(PrimaryButton)`
  margin-top: 48px;
  background: ${theme.white};
  color: ${theme.black};
  &:hover,
  &:focus {
    background: ${theme.cyan};
    color: ${theme.white};
  }
  @media (max-width: 604px) {
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    margin-top: 40px;
  }
`;

export const Ul = styled.ul`
  padding-left: 35px;
`;
