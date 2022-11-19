import { Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import { AboutParagraph } from "../../Global/globalStyle";

export const ShopifyBenefitSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
`;

export const Heading = styled(AboutParagraph)`
  max-width: 809px;
`;

export const PointsContainer = styled(Row)`
  margin-top: 156px;
  margin-bottom: 28px;
  @media (max-width: 790px) {
    margin-top: 108px;
    margin-bottom: 66px;
  }
  @media (max-width: 604px) {
    margin-top: 72px;
    margin-bottom: 96px;
  }
  @media (max-width: 426px) {
    margin-bottom: 68px;
  }
`;

export const CTAInner = styled.div`
  max-width: 295px;
  @media (max-width: 700px) {
    padding-right: 10px;
  }
`;

export const Paragraph = styled.div`
  font-size: 24px;
  line-height: 31px;
  font-weight: 300;
  margin-bottom: 124px;
  color: ${theme.black};

  ul{
    padding-left: 25px;
  }

  a {
    text-decoration: underline;
    color: ${theme.black};
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }

  @media (max-width: 790px) {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 90px;
  }
  @media (max-width: 604px) {
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 60px;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 48px;
  }
`;

export const BlueDot = styled.div`
  background: ${theme.cyan};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-bottom: 25px;

  @media (max-width: 790px) {
    width: 20px;
    height: 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 604px) {
    width: 17px;
    height: 17px;
    margin-bottom: 16px;
  }
  @media (max-width: 426px) {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
  }
`;
