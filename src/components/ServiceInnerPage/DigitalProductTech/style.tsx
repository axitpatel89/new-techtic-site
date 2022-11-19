import { Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const TechSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
`;

export const StyledDiv = styled.div`
  margin-top: 112px;
  margin-bottom: 148px;

  @media (max-width: 604px) {
    margin-top: 80px;
  }
  @media (max-width: 419px) {
    margin-top: 50px;
  }
  @media (max-width: 390px) {
    margin-top: 72px !important;
    margin-bottom: 124px !important;
  }
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: flex-end;
`;

export const Accordioncontainer = styled.div`
  border-bottom: 1px solid ${theme.black};
  .ant-collapse-header {
    display: flex;
    border-top: 1px solid ${theme.black};
    font-size: 40px;
    font-weight: 300;
    line-height: 48px;

    @media (max-width: 604px) {
      font-size: 24px;
      line-height: 31.2px !important;
    }
  }
  .ant-collapse-content {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;

    @media (max-width: 390px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 21px;
    }
  }

  a {
    color: ${theme.black};

    &:hover {
      text-decoration: underline;
      color: ${theme.cyan};
    }
  }
  .ant-collapse-icon-position-end > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    padding: 12px 0px;
    padding-right: 40px;
  }
  .ant-collapse-arrow {
    font-size: 20px !important;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50% !important;
    list-style-type: none;
  }

  @media (max-width: 426px) {
    li {
      width: 100% !important;
    }
  }
`;
