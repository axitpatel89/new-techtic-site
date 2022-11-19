import { Col, Modal, Row } from "antd";
import styled from "styled-components";
import theme from "../../theme";

export const FormModelWrapper = styled.div`
  display: block;

  /* .ant-modal{
    max-width: calc(100vw - 0px) !important;
  } */
  .ant-modal-content {
    padding: 0 100px !important;
  }
  & .ant-modal-header {
    border-bottom: none !important;
  }
`;

export const FormModal = styled(Modal)`
  .ant-modal-body {
    padding: 0px !important;
  }

  .ant-modal-title {
    &img {
      margin: auto;
      @media (max-width: 425px) {
        // height: 20px;
        width: 106px;
      }
    }
  }
`;

export const RowContainer = styled(Row)`
  margin: 78px 75px 0px;

  @media (max-width: 768px) {
    margin: 25px;
  }
`;

export const FormSection = styled.div`
  border-top: 1px solid ${theme.black};
`;

export const RightCol = styled(Col)`
  padding-left: 63px;

  & iframe {
    margin-top: 50px !important;
    padding-right: 50px;
    width: 100%;
    height: 475px;
  }

  @media (max-width: 1024px) {
    padding-left: 0px;
  }

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;

    & iframe {
      margin-top: 25px !important;
      padding-right: 0;
      width: 100%;
      height: 550px;
    }
  }
`;

export const FormHeading = styled.div`
  max-width: 505px;
  font-size: 44px !important;
  line-height: 57px !important;
  font-weight: 400 !important;
  margin: 0;
  color: ${theme.black};

  a {
    text-decoration: underline;
    color: ${theme.black};
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }

  @media (max-width: 890px) {
    font-weight: 400 !important;
    font-size: 35px !important;
    line-height: 40px !important;
  }
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 31px;
  }

  @media (max-width: 575px) {
    font-weight: 400;
    font-size: 24px !important;
    line-height: 31px !important;
  }
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 20px;
  margin-top: 8px;
  margin-bottom: 36px;
`;
