import styled from "styled-components";
import { Col, Row, Space } from "antd";
import ViewButton from "../../../images/Group 67ViewButton-2.svg";
import theme from "../../../theme";

export const StyledIndustryList = styled(Row)`
  width: 100%;
  max-width: 1047px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  & div {
    margin-top: 10px;
  }
`;

export const PostContainer = styled(Col)`
  cursor: url(${ViewButton}), auto;

  /* & :hover {
    &.descrip {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
  } */
`;

export const SubMenu = styled(Space)`
  margin-top: 56px;
  margin-bottom: 96px;
  display: flex;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  overflow-x: scroll !important;
  white-space: nowrap;

  /* -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  } */

  @media (max-width: 575px) {
    margin-top: 32px;
    margin-bottom: 72px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  @media (max-width: 426px) {
    margin-top: 46px;
    margin-bottom: 80px;
  }
`;
export const AllIndustry = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  padding-right: 40px;
  min-width: max-content;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
    color: ${theme.cyan};
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

export const WorkInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    margin: 16px 0;
  }
  & span {
    text-align: right;
  }
`;

export const WorkCardDescrip = styled.div`
  border-top: 1px solid black;

  &.descrip {
    opacity: 0;
    transition: 0.5s ease-in-out;
  }

  ${PostContainer}:hover & {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }

  & p {
    margin: 16px 0;
  }
`;

export const CardView = styled.div`
  top: 50%;
  left: 36px;
  width: 98px;
  height: 98px;
  color: #fff;
  position: absolute;
  border-radius: 100%;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  background-color: #00afaa;

  & p {
    margin-bottom: 0;
  }
`;

export const StyledLoadingButton = styled(Row)`
  margin-bottom: 248px;
  margin-top: 30px;
  justify-content: center;
`;
