import styled from "styled-components";
import { Space } from "antd";
import theme from "../../../theme";
import { Link } from "gatsby";
import { AboutParagraph } from "../../Global/globalStyle";

export const ServiceInnerIntroConut = styled.div`
  margin-top: 104px;
  background-color: ${(props) => props.color || theme.white};

  @media (max-width: 426px) {
    margin-top: 50px;
  }
`;

export const StyledSpace = styled(Space)`
  margin-top: 56px;
  margin-bottom: 96px;
  display: flex;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  overflow: scroll !important;
  white-space: nowrap;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 575px) {
    margin-top: 32px;
    margin-bottom: 72px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  @media (max-width: 426px) {
    margin-top: 46px;
    margin-bottom: 80px;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 40px;
  color: black;

  &:hover {
    color: ${theme.cyan} !important;
  }
  @media (max-width: 767px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-right: 20px;
    color: black;
  }
`;

export const Description = styled(AboutParagraph)`
  max-width: 820px;
  margin: 156px auto 248px !important;

  @media (max-width: 768px) {
    margin: 135px auto 183px !important;
  }

  @media (max-width: 426px) {
    margin: 113px auto 123px !important;
  }

  @media only screen and (max-width: 991px) {
    line-height: 41px !important;
  }

  @media only screen and (max-width: 595px) {
    font-size: 24px;
    line-height: 31.2px !important;
    margin: 95px auto 123px !important;
  }
`;
