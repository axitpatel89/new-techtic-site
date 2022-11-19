import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../../../theme";
import { AboutParagraph } from "../../Global/globalStyle";

export const BlackBackground = styled.div`
  background-color: ${(props) => props.color || theme.white};
  padding-top: 112px;
  padding-bottom: 156px;
  margin-bottom: 156px;
  color: ${theme.white} !important;
  @media (max-width: 426px) {
    padding-top: 72px;
    padding-bottom: 96px;
    margin-bottom: 124px;
  }
`;

export const StyledDiv = styled.div`
  .ant-collapse-ghost > .ant-collapse-item {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.7);
  }
  .ant-collapse-icon-position-end > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    padding: 4px 16px;
    padding-right: 40px;
    padding-left: 307px;

    @media (max-width: 1024px) {
      padding-left: 200px;
    }
    @media (max-width: 900px) {
      padding-left: 130px;
    }

    @media (max-width: 840px) {
      padding-left: 50px;
    }
    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }
  .ant-collapse-ghost
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding-top: 12px;
    padding-bottom: 44px;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding-left: 311px;
    padding-right: 40px;
    @media (max-width: 1024px) {
      padding-left: 200px;
    }
    @media (max-width: 900px) {
      padding-left: 130px;
    }

    @media (max-width: 840px) {
      padding-left: 50px;
    }
    @media (max-width: 768px) {
      padding-left: 0px;
    }
  }
  .ant-collapse-header {
    display: flex;
    /* border-top: 1px solid lightgray; */
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: ${theme.white} !important;

    .ant-collapse-header-text {
      & span {
        float: right;
        padding-right: 70px;

        @media (max-width: 1190px) {
          padding-right: 50px;
        }
        @media (max-width: 1024px) {
          padding-right: 30px;
        }

        @media (max-width: 670px) {
          float: none;
          display: flex;
          font-size: 14px;
          line-height: 18px;
          font-weight: 400;
        }
      }
    }

    @media (max-width: 604px) {
      font-weight: 400;
      font-size: 24px;
      line-height: 38px;
    }
    @media (max-width: 426px) {
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
    }
  }
  .ant-collapse-content-box {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: ${theme.white} !important;

    @media (max-width: 604px) {
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
    }
    @media (max-width: 426px) {
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

export const Heading = styled(AboutParagraph)`
  font-weight: 400;
  color: ${theme.white};
  margin-bottom: 0px;
  margin-top: 64px;
  padding-bottom: 32px;
  border-bottom: 1px solid #ffffff;
`;

export const ApplyLink = styled(Link)`
  color: ${theme.white};
  text-decoration: underline;

  &:hover {
    color: ${theme.cyan};
    text-decoration: underline;
  }
`;
export const Experience = styled.p`
  margin-bottom: 0rem;
`;
export const AcordienContent = styled.div`
  P {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  ul {
    padding-left: 25px;
  }

  li {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }

  @media (max-width: 426px) {
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 23px;
    }
  }
`;
