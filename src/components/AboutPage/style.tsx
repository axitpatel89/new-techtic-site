import styled from "styled-components";
import { Col, Row } from "antd";
import theme from "../../theme";
import { AboutParagraph } from "../Global/globalStyle";

export const AboutInnerIntro = styled.div`
  margin-top: 104px;
  background-color: ${(props) => props.color || theme.white};

  @media (max-width: 426px) {
    margin-top: 50px;
  }
`;

export const Description = styled(AboutParagraph)`
  max-width: 820px;
  margin: 156px auto 248px !important;

  @media (max-width: 767px) {
    margin: 124px auto 124px !important;
  }

  @media (max-width: 426px) {
    margin: 95px auto 95px !important;
  }
`;

export const ValuesComponent = styled.div`
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

export const Paragraph = styled.p`
  max-width: 925px;
  font-size: 40px;
  line-height: 48px;
  padding-bottom: 178px;
  margin-top: 37px;

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

export const StyledParagraph = styled.p`
  margin-top: 56px;
  margin-bottom: 48px;
  max-width: 809px;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;

  @media (max-width: 890px) {
    margin-top: 24px;
    margin-bottom: 40px;
    font-weight: 300;
    font-size: 35px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    margin-top: 24px;
    margin-bottom: 40px;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
  }
  @media (max-width: 425px) {
    margin-top: 24px;
    margin-bottom: 40px;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
`;

export const TeamComponent = styled.div`
  margin-top: 124px;
  padding-bottom: 0px;
  background: ${theme.white};
  color: ${theme.black};
  h1.antd-title-1 {
    color: ${theme.black};
    padding-bottom: 156px;
    max-width: 925px;
  }
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const CareersComponent = styled.div`
  margin-top: 124px;
  padding-bottom: 90px;
  background: ${theme.white};
  color: ${theme.black};
  h1.antd-title-1 {
    color: ${theme.black};
    padding-bottom: 156px;
    max-width: 925px;
  }
  @media (max-width: 768px) {
    padding-bottom: 72px;
  }
`;

export const LineComponent = styled.div`
  max-width: 100%;
  padding-bottom: 16px;
  margin-top: 16px;
  span {
    &:first-child {
      float: left;
    }
    &:last-child {
      float: right;
      max-width: 60%;
      text-align: right;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const ImageContainer = styled(Col)`
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 50px;

  @media only screen and (max-width: 575px) {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
`;

export const StyledRow = styled(Row)`
  display: flex;
  width: auto;
`;

export const StyledCareerRow = styled(Row)`
  align-items: flex-end;
`;
export const StyledImageContainer = styled.div`
  @media (max-width: 1199px) {
    padding-top: 72px;
  }
`;

export const LeftSide = styled.div`
  position: sticky;
  z-index: 1;
  top: 50%;
  left: 0;
  height: 50vh !important;
  display: flex;
  // flex-direction: column;
  // justify-content: ${(props) => props.theme} !important;
`;

export const WrapperLG = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .container > div {
    height: 100%;
    width: 45vw;
  }
  .container .in-in-middle {
    height: auto !important;
    margin-bottom: 100px;

    h1 {
      font-size: 40px;
      font-weight: 300;
      line-height: 48px;
    }
    p {
      font-size: 40px;
      font-weight: 300;
      line-height: 48px;
    }

    @media (max-width: 426px) {
      h1 {
        font-size: 24px;
        font-weight: 300;
        line-height: 31px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }
    }
  }
`;

export const InfoModal = styled.div``;
export const Name = styled.h3`
  font-size: 24px;
  font-weight: 400;
  /* line-height: 48px; */
  color: ${theme.black};
  /* margin-top: 21px 0 16px; */
  margin-top: 21px;
  margin-bottom: 16px;
`;
export const Designation = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
  color: ${theme.black};
`;

export const PersonalInfo = styled.div`
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.black};
  }
`;
