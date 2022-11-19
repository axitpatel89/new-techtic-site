import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const PartnersSection = styled.div`
  background: ${(props) => props.color || theme.white};
  padding-top: 156px;
  padding-bottom: 156px;
  margin-bottom: 156px;
  color: ${theme.white} !important;
  @media (max-width: 426px) {
    padding-top: 72px;
    padding-bottom: 48px;
    margin-bottom: 124px;
  }
`;

export const RowContainer = styled(Row)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LogoCol = styled(Col)`
    text-align: center;
    padding-bottom: 56px;
    background-color: #000 !important;

    @media (max-width: 390px) {
        max-width: 120px !important;
        padding-bottom: 48px;
    }
`;
