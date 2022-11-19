import styled from "styled-components";
import theme from "../../theme";

export const AboutParagraph = styled.div`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 48px;
  font-weight: 300;
  color: ${theme.black};

  @media (max-width: 890px) {
    font-weight: 300;
    font-size: 35px;
    line-height: 31px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 30px;
    line-height: 31px;
    margin-bottom: 40px;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 40px;
  }
`;

export const AboutDescription = styled.div`
  max-width: 830px;
  margin: 0 auto 248px;
  @media (max-width: 890px) {
    margin: 0 auto 170px;
  }
  @media (max-width: 768px) {
    margin: 0 auto 130px;
  }
  @media (max-width: 426px) {
    margin: 0 auto 124px;
  }
`;

export const WorkView = styled.div`
  position: relative;
  max-width: 647px;
`;

export const LineComponent = styled.div`
  border-bottom: 1px solid #000;
  max-width: 100%;
  padding-bottom: 16px;
  margin-top: 16px;
  span {
    &:first-child {
      float: left;
    }
    &:last-child {
      float: right !important;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const WorkParagraph = styled.p`
  font-size: 18px;
  margin-top: 16px;
`;
