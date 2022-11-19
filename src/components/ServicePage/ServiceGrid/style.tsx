import { Col, Row } from "antd";
import styled from "styled-components";
import ViewButton from '../../../images/Group 67ViewButton-2.svg';

export const ServideGridOuter = styled.div`
  margin-top: 169px;
  margin-bottom: 152px;
  @media (max-width: 426px) {
    margin-top: 96px;
    margin-bottom: 28px;
  }
`;

export const Paragraph = styled.div`
  font-size: 24px;
  line-height: 31.2px;
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: left;

  @media (max-width: 575px) {
    font-size: 18px;
    line-height: 23.4px;
    margin-top: 10px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const GridRow = styled(Row)`
  .ant-col:nth-child(odd) {
    padding-right: 28px;
  }
  .ant-col:nth-child(even) {
    padding-left: 28px;
  }

  @media (max-width: 575px) {
    .ant-col:nth-child(odd) {
      padding-right: 0;
    }
    .ant-col:nth-child(even) {
      padding-left: 0;
    }
  }
`;

export const GridCol = styled(Col)`
 cursor: url(${ViewButton}), auto;
  margin-bottom: 96px;
`;
