import styled from "styled-components";
import theme from "../../../theme";

export const AccomplishmentsComponent = styled.div`
  margin-bottom: 109px;

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media (max-width: 425px) {
    margin-bottom: 52px;
  }
`;

export const StyledFirstCol = styled.div`
  font-size: 44px;
  font-weight: 400;
  line-height: 57px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 34px;
    line-height: 45px;
  }

  @media (max-width: 425px) {
    width: 216px;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
  }
`;

export const StyledSecondCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    max-width: 100% !important;
    margin-top: 50px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  @media (max-width: 425px) {
    max-width: 100% !important;
    margin-top: 48px !important;
  }
`;

export const StyledDiv = styled.div`
  width: 41% !important;

  @media (max-width: 425px) {
    width: 45% !important;
  }
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 8px;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Number = styled.p`
  font-size: 100px;
  font-weight: 400;
  line-height: 130px;
  color: ${theme.cyan};
  margin-bottom: 8px;

  @media (max-width: 990px) {
    font-size: 70px;
    line-height: 100px;
  }
  @media (max-width: 768px) {
    font-size: 60px;
    line-height: 80px;
  }
  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 48px;
    line-height: 62px;
    margin-top: -15px;
    margin-bottom: 8px;
  }
`;

export const Discription = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  color: ${theme.black};
  margin-bottom: 46px !important;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 35px !important;
  }
  @media (max-width: 425px) {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 72px !important;
  }
`;
