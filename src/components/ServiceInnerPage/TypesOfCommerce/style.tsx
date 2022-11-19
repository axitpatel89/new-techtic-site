import styled from "styled-components";
import { Col } from "antd";
import theme from "../../../theme";

export const TypeOfCommerceSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
`;
export const StyledCol = styled(Col)`
  margin-bottom: 116px;
  @media (max-width: 992px) {
    margin-top: 50px !important;
  }
  @media (max-width: 992px) {
    margin-top: 72px;
    margin-bottom: 84px;
  }
`;

export const StyledTital = styled.p`
  margin-bottom: 16px;
  font-size: 40px;
  font-weight: 300;
  line-height: 48px;

  @media (max-width: 604px) {
    font-size: 25px;
    line-height: 38px;
    font-weight: 300;
  }
  @media (max-width: 419px) {
    font-size: 22px;
    line-height: 33px;
    font-weight: 300;
  }
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 16px;
  }
`;

export const StyledDiscription = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  @media (max-width: 604px) {
    font-size: 16px;
    line-height: 25px;
  }
  @media (max-width: 419px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 40px;
  }
`;
