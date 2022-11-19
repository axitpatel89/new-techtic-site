import styled from "styled-components";
import { Row } from "antd";
import { BlackButton } from "../../Global/button";
import theme from "../../../theme";

export const PlanProjectSection = styled.div`
  background-color: ${(props) => props.color || theme.white};

  @media only screen and (max-width: 575px) {
    & p:first-child {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const StyledRow = styled(Row)`
  margin-bottom: 156px;
  @media (max-width: 992px) {
    margin-bottom: 124px;
  }
`;

export const TalkButton = styled(BlackButton)`
  margin-top: 48px;
  width: fit-content;
  @media (max-width: 426px) {
    margin-top: 40px;
  }
`;

export const StyledDiv = styled.div`
  border-bottom: 1px solid ${theme.black};

  ul{
    padding-left: 25px;
    color: black;
  }
  li{
    color: ${theme.black} !important;
  }
  a{
    color: ${theme.black} !important;
  }
  .ant-collapse-icon-position-end > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    padding: 30px 0px;
  }

  span.ant-collapse-header-text {
    padding-right: 45px;
  }

  @media (max-width: 768px) {
    span.ant-collapse-header-text {
      padding-right: 40px;
    }
  }
  @media (max-width: 380px) {
    span.ant-collapse-header-text {
      padding-right: 10px;
    }
  }

  @media only screen and (max-width: 575px) {
    .ant-collapse-icon-position-end
      > .ant-collapse-item
      > .ant-collapse-header {
      padding: 24px 0;
    }
  }
  .ant-collapse-header {
    display: flex;
    border-top: 1px solid ${theme.black};
    font-size: 40px;
    font-weight: 300;
    line-height: 48px !important;
    color: ${theme.black} !important;

    @media (max-width: 757px) {
      font-weight: 300;
      font-size: 24px !important;
      line-height: 31.2px !important;
    }
    @media (max-width: 400px) {
      padding-right: 40px !important;
    }
  }
  .ant-collapse-ghost
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding-top: 0;
    padding-bottom: 0;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0px;
  }
  .ant-collapse-content-box {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    @media (max-width: 604px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
    }
    @media (max-width: 419px) {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
    }
    @media (max-width: 390px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 992px) {
    margin-top: 96px;
  }
  @media (max-width: 390px) {
    margin-top: 96px;
  }

  .ant-collapse-arrow {
    font-size: 20px !important;
  }
`;
