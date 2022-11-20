import { Col, Row } from "antd";
import styled from "styled-components";

export const LogoContainer = styled(Row)`
  margin: 112px 0 48px;
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: space-between !important;
    margin: 75px 0 69px;
  }
`;

export const DevelopmentDescription = styled.div`
  max-width: 809px;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 57px;
  margin-top: 30px;
  h3 {
    max-width: 659px;
    font-size: 40px;
    font-weight: 300;
    line-height: 48px;
    margin-bottom: 36px;
    /* margin-top: 30px; */

    @media (max-width: 768px) {
      font-size: 34px;
      font-weight: 300;
      line-height: 38px;
    }
    @media (max-width: 426px) {
      font-size: 30px;
      font-weight: 300;
      line-height: 36px;
    }
  }

  @media (max-width: 426px) {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
  }
`;

export const Logo = styled(Col)`
  margin-bottom: 120px;
  img {
    margin-bottom: 0rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 48px !important;
  }

  @media (max-width: 426px) {
    img {
      object-fit: contain !important;
      opacity: 1;
      max-height: 57px !important;
      max-width: 120px;
    }
  }
`;
