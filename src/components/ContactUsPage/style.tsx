import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../theme";

export const ContactUsSection = styled.div`
  margin-top: 104px;

  @media (max-width: 768px) {
    margin-top: 72px;
  }
`;

export const LocationCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 124px;
  border-top: 0.5px solid ${theme.black};
  @media (max-width: 768px) {
    margin-top: 72px;
  }
`;
export const InnerDiv = styled.div`
  border-bottom: 0.5px solid gray;
  padding-top: 40px;
  padding-bottom: 17px;
  list-style-type: none;

  @media (max-width: 390px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const City = styled.p`
  font-size: 40px;
  line-height: 48px;
  font-weight: 300px;
  margin-bottom: 16px;

  @media (max-width: 604px) {
    font-size: 25px;
    line-height: 38px;
  }
  @media (max-width: 419px) {
    font-size: 22px;
    line-height: 33px;
  }
  @media (max-width: 390px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
`;
export const Address = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 300px;

  a {
    color: ${theme.black};
    font-weight: 400;
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }
`;

export const ContainerRow = styled(Row)`
  margin-top: 106px;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    margin-top: 72px;
  }
`;

export const LeftSectionCol = styled(Col)`
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

export const RightHeading = styled.div`
  border-top: 1px solid ${theme.black};
`;
export const LeftHeading = styled.div`
  border-top: 1px solid ${theme.black};
`;
