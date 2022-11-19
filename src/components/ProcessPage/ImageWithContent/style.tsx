import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const ImageWithContentSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
  padding-top: 156px;
  padding-bottom: 156px;
  @media (max-width: 426px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
`;

export const ProcessRow = styled(Row)`
  margin-top: 96px;
  color: ${(props) => props.color || theme.white} !important;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 426px) {
    margin-top: 24px;
  }
`;

export const ContentCol = styled(Col)`
  display: flex;
  align-items: flex-end !important;
  font-size: 21px;
  font-weight: 300;
  line-height: 31px;
  padding-right: 96px;
  @media (max-width: 992px) {
    padding-right: 0px;
  }

  @media (max-width: 604px) {
    font-size: 20px;
  }
  @media (max-width: 426px) {
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

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 51px;

  @media (max-width: 426px) {
    margin-bottom: 36px;
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 0;

  @media (max-width: 426px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const ImgCol = styled(Col)`
  text-align: center;
  @media (max-width: 992px) {
    margin-top: 72px;
  }
`;

export const Ul = styled.ul`
  padding-left: 35px;
`;
