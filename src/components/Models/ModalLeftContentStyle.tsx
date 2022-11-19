import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../theme";

export const LeftCol = styled(Col)`
  padding-right: 63px;

  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 16px;
`;

export const Author = styled(Description)`
  margin-bottom: 8px;
`;

export const JobTitle = styled(Description)`
  margin-bottom: 5px;
`;
export const Company = styled(Description)`
  margin-bottom: 0;
`;

export const ContentColMain = styled(Col)`
  border-top: 1px solid ${theme.black};
  width: 100%;
`;

export const ContentRow = styled(Row)`
  margin: 48px 0 56px;
`;
export const TestimonialsRow = styled(Row)`
  margin: 48px 0 96px;
`;
export const LogoBox = styled(Col)`
  display: flex;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 20px;
  margin-top: 8px;
`;
