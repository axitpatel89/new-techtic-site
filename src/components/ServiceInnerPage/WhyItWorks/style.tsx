import styled from "styled-components";
import theme from "../../../theme";

export const WhyItWorksSection = styled.div`
  background: ${(props) => props.color || theme.white};
`;

export const SubTitle = styled.div`
  max-width: 809px !important;
  font-size: 40px;
  line-height: 48px !important;
  font-weight: 300px;
  margin-top: 55px;
  margin-bottom: 156px;

  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 125px;
  }

  @media (max-width: 604px) {
    font-size: 30px !important;
    line-height: 40px !important;
    margin-top: 24px;
    margin-bottom: 72px;
  }
  @media (max-width: 426px) {
    font-weight: 300 !important;
    font-size: 24px !important;
    line-height: 31px !important;
  }
`;

export const CTAInner = styled.div`
  max-width: 295px;
  @media (max-width: 700px) {
    padding-right: 10px;
  }
`;

export const Paragraph = styled.div`
  font-size: 24px;
  line-height: 31px;
  font-weight: 300;
  margin-bottom: 121px;

  a {
    text-decoration: underline;
    color: ${theme.black};
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }

  @media (max-width: 790px) {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 90px;
  }
  @media (max-width: 604px) {
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 60px;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 48px;
  }
`;

export const BlueDot = styled.div`
  background: ${theme.cyan};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-bottom: 16px;

  @media (max-width: 790px) {
    width: 20px;
    height: 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 604px) {
    width: 17px;
    height: 17px;
    margin-bottom: 16px;
  }
  @media (max-width: 426px) {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
  }
`;

export const ImageCol = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 133px;
  margin-bottom: 156px;

  @media (max-width: 768px) {
    margin-top: 47px;
    margin-bottom: 124px;
  }

  & div:first-child {
    width: 715px;
    height: 512px;
    @media (max-width: 426px) {
      width: 100%;
      height: 100%;
    }
  }
  & div:last-child {
    width: 820px;
    height: 552px;
    margin-top: -88px !important;
    margin-left: -315px !important;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
