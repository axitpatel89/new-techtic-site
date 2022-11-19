import styled from "styled-components";
import theme from "../../../theme";

export const BlueDotsWithTextCTAComponent = styled.div`
  margin-bottom: 133px;
  margin-top: 112px;

  @media (max-width: 1024px) {
    .ant-col.ant-col-xs-24.ant-col-sm-8.ant-col-md-8.ant-col-lg-8.ant-col-xl-8 {
      padding-right: 0px !important;
    }
  }

  @media (max-width: 425px) {
    margin-bottom: 48px;
    margin-top: 72px;
  }

  .ant-row {
    margin-right: 0 !important;
  }
`;

export const CTAInner = styled.div`
  max-width: 100% !important;

  @media (max-width: 890px) {
    margin-bottom: 48px;
  }
  @media (max-width: 425px) {
    margin-bottom: 48px;
  }
`;

export const Paragraph = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 31px;
  a {
    text-decoration: underline;
    color: ${theme.black};
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }

  @media (max-width: 890px) {
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
  }
  @media (max-width: 687px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
  }
  @media (max-width: 575px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
  }
`;

export const BlueDot = styled.div`
  background: ${theme.cyan};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-bottom: 24px;

  @media (max-width: 575px) {
    margin-bottom: 16px;
  }
`;
