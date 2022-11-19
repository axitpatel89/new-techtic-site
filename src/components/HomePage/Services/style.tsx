import { Col, Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const ServicesComponent = styled.div`
  padding-top: 156px;
  padding-bottom: 44px;
  background: ${theme.black};
  color: ${theme.white};
  h1.antd-title-1 {
    color: ${theme.white};
    padding-bottom: 56px;
    max-width: 925px;
  }
  @media (max-width: 768px) {
    padding-bottom: 4px;
    padding-top: 72px;
  }
  @media (max-width: 480px) {
    padding-top: 72px;
    padding-bottom: 4px;
  }

  @media (max-width: 390px) {
    padding-top: 72px;
    padding-bottom: 4px;
    h1.antd-title-1 {
      padding-bottom: 24px;
      max-width: 348px;
    }
  }
`;

export const Paragraph = styled.div`
  max-width: 925px;
  font-size: 40px;
  line-height: 48px;
  padding-bottom: 178px;
  margin-top: 55px;

  @media (max-width: 890px) {
    font-weight: 300;
    font-size: 35px;
    line-height: 38px;
    padding-bottom: 170px;
  }
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 30px;
    line-height: 32px;
    padding-bottom: 66px;
  }
  @media (max-width: 425px) {
    max-width: 348px;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    padding-bottom: 66px;
  }
`;

export const ServicesParagraph = styled.div`
  font-size: 18px;
  line-height: 23px;
  padding-bottom: 40px;
  margin: 0;
  max-width: 356px;

  @media (max-width: 768px) {
    padding-bottom: 24px;
  }

  @media (max-width: 425px) {
    max-width: 226px;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    padding-bottom: 30px;
  }
`;

export const ImageBox = styled(Row)`
  margin-bottom: 112px;

  @media (max-width: 768px) {
    margin-bottom: 96px;
  }
`;
export const ImageBoxRight = styled(Row)`
  margin-bottom: 112px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    margin-bottom: 96px;
  }
`;
export const ImageCont = styled(Col)`
  width: 55%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ImageContRight = styled(Col)`
  width: 55%;
  order: 2;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DigitalComContent = styled(Col)`
  width: 45%;
  align-self: flex-end;
  padding-left: 112px;

  @media (max-width: 1220px) {
    padding-left: 40px;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }
`;

export const DigitalProdContent = styled(Col)`
  width: 45%;
  align-self: flex-end;
  padding-left: 74px;

  @media (max-width: 1220px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 991px) {
    padding-left: 0%;
  }
  @media (max-width: 768px) {
    width: 80%;
    order: 2;
  }
`;

export const B2BContent = styled(Col)`
  width: 45%;
  align-self: flex-end;
  padding-left: 112px;

  @media (max-width: 1220px) {
    padding-left: 40px;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding-left: 0;
  }
`;

export const ScaleContent = styled(Col)`
  width: 45%;
  align-self: flex-end;
  padding-left: 80px;

  @media (max-width: 1220px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 991px) {
    padding-left: 0%;
  }
  @media (max-width: 768px) {
    width: 80%;
    order: 2;
  }
`;

export const Content = styled.div`
  max-width: 356px;
  margin-top: 16px;
`;
