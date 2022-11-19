// import styled from "styled-components";
// import theme from "../../../theme";

// export const FAQsSection = styled.div`
//   background: ${(props) => props.color || theme.black};
//   padding-top: 156px;
//   padding-bottom: 156px;
//   margin-bottom: 156px;
//   color: ${theme.white} !important;
//   @media (max-width: 426px) {
//     padding-top: 72px;
//     padding-bottom: 96px;
//     margin-bottom: 124px;
//   }
// `;

// export const Heading = styled.p`
//   font-size: 48px;
//   font-weight: 300px;
//   line-height: 62px !important;
//   text-align: center;
//   margin-bottom: 40px;
// `;

// export const StyledDiv = styled.div`
// border-bottom: 1px solid white;
//   .ant-collapse-icon-position-end > .ant-collapse-item > .ant-collapse-header {
//     position: relative;
//     padding: 30px 0px;
//   }

//   ul{
//     padding-left: 20px;
//   }

//   .ant-collapse-content-box {
//     color: white !important;
//   }

//   span.ant-collapse-header-text {
//     font-size: 28px;
//     font-weight: 300;
//   }

//   @media only screen and (max-width: 575px) {
//     .ant-collapse-icon-position-end
//       > .ant-collapse-item
//       > .ant-collapse-header {
//       padding: 24px 0;
//     }
//   }

//   .ant-collapse-header {
//     display: flex;
//     border-top: 1px solid ${theme.white};
//     font-size: 40px;
//     font-weight: 300;
//     line-height: 48px !important;
//     color: ${theme.white} !important;

//     @media (max-width: 757px) {
//       font-weight: 300;
//       font-size: 24px !important;
//       line-height: 31.2px !important;
//     }
//     @media (max-width: 400px) {
//       padding-right: 40px !important;
//     }
//   }

//   .ant-collapse-ghost
//     > .ant-collapse-item
//     > .ant-collapse-content
//     > .ant-collapse-content-box {
//     padding-top: 0;
//     padding-bottom: 0;
//   }
//   .ant-collapse-content > .ant-collapse-content-box {
//     padding: 0px;
//   }
//   .ant-collapse-content-box {
//     font-weight: 300;
//     font-size: 18px;
//     line-height: 24px;
//     color: ${theme.white} !important;

//     @media (max-width: 604px) {
//       font-weight: 300;
//       font-size: 16px;
//       line-height: 25px;
//     }
//     @media (max-width: 419px) {
//       font-weight: 300;
//       font-size: 13px;
//       line-height: 20px;
//     }
//     @media (max-width: 390px) {
//       font-weight: 300;
//       font-size: 16px;
//       line-height: 24px;
//     }
//   }

//   @media (max-width: 992px) {
//     margin-top: 96px;
//   }
//   @media (max-width: 390px) {
//     margin-top: 96px;
//   }

//   .ant-collapse-arrow {
//     font-size: 20px !important;
//   }
// `;

import { Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const FAQsSection = styled.div`
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
    color: black;

    &:hover {
      text-decoration: underline;
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
    padding-left: 20px;
  }
`;
