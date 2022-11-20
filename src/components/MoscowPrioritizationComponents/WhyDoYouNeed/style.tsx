import { Col } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const BlackBackground = styled.div`
  background-color: ${theme.black};
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

export const SecondCol = styled(Col)`
  margin-top: 85px;
  @media (max-width: 768px){
    margin-top: 50px;
  }
`

export const RightContent = styled.div`
  margin-top: 50px;
  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
  }

  @media (max-width: 768px){
    margin-top: 40px;
  }
`;
