import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const TrialSection = styled.div`
  background: ${(props) => props.color || theme.white};
`;

export const StyledRow = styled(Row)`
  margin-bottom: 156px;
  @media (max-width: 767px) {
    margin-bottom: 124px;
  }
`;

export const ImgContainer = styled(Col)`
  @media (max-width: 992px) {
    max-width: 76% !important;
    margin: auto !important;
    padding-top: 96px !important;
    order: 2;
  }
  @media (max-width: 604px) {
    max-width: 100% !important;
  }
`;

export const ColContent = styled(Col)`
  padding-left: 96px;
  @media (max-width: 992px) {
    padding-left: 0;
    max-width: 76% !important;
    margin: auto !important;
  }
  @media (max-width: 604px) {
    padding-left: 0;
    max-width: 100% !important;
  }
`;

export const Paragraph = styled.div`
  font-size: 24px;
  font-weight: 300 !important;
  line-height: 31px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media (max-width: 604px) {
    font-size: 20px;
    font-weight: 300 !important;
    line-height: 27px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  @media (max-width: 426px) {
    font-weight: 300 !important;
    font-size: 16px;
    line-height: 21px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;
