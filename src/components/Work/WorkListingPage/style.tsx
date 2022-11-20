import styled from "styled-components";
import theme from "../../../theme";
import { Row } from "antd";

export const StyledWorkImages = styled.div`
  padding-top: 156px;
  padding-bottom: 247px;
  color: ${theme.black};
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
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 100px;
  }

  .hide_manu {
    /* opacity: 0; */
    display: none;
  }
`;

export const StyledIndustryList = styled(Row)`
  width: 100%;
  max-width: 961px;
  flex-wrap: wrap;

  & div {
    margin-top: 10px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    flex-wrap: nowrap;
    overflow-x: scroll !important;
    flex-direction: row;
    white-space: nowrap;
    display: flex;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
  }
`;

export const StyledIndustryName = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  padding-right: 40px;
  min-width: max-content;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${theme.cyan};
  }
  &.active {
    text-decoration: underline;
  }
`;

export const StyledIndustryDropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  padding-bottom: 24px;
  cursor: pointer;

  & p {
    margin-bottom: 6px;
  }

  @media (max-width: 1200px) {
    padding-top: 10px;
    justify-content: flex-start;
  }
`;

export const StyledRow = styled(Row)`
  border-bottom: 1px solid;
`;

export const StyledLoadingButton = styled(Row)`
  justify-content: center;
`;
