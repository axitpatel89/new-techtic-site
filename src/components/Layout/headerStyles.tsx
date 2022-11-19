import { Button, Divider, Drawer, Menu, Row, Col, Modal } from "antd";
import styled from "styled-components";
import theme from "../../theme";

export const HeadComponent = styled.header`
  background: ${theme.white};
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  @media (max-width: 425px) {
    padding-bottom: 0;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  .menu-right-wrapper {
    position: inherit;
    .ant-menu {
      li {
        z-index: 2;
      }
    }
  }

  svg {
    fill: "#fff";
  }

  .header-logo-wrapper {
    z-index: 2;
  }

  img {
    margin: auto;
    @media (max-width: 425px) {
      // height: 20px;
      width: 106px;
    }
  }

  @media (max-width: 1220px) {
    margin: 0 20px;
  }
`;

export const LogoImage = styled.img`
  margin-bottom: 0;
`;

export const MainMenu = styled(Menu)`
  border: none;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    &.desktop {
      display: none !important;
    }
  }
`;
export const MainMenuMobile = styled(Menu)`
  border: none;
  float: right;

  @media (max-width: 768px) {
    float: none;
    &.desktop {
      display: none !important;
    }
  }
`;

export const MenuItem = styled(Menu.Item)`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  height: auto;
  line-height: initial;
  padding: 0 !important;
  margin-right: 32px;
  vertical-align: middle;
  border-bottom: 1px solid transparent;
  color: ${theme.black};

  & .click {
    text-decoration: underline !important;
  }

  &:after {
    display: none;
  }
  & a {
    &:hover {
      color: ${theme.cyan} !important;
    }
  }
  &.head-button {
    margin-right: 0;
    border-bottom: 0 !important;
    a {
      background: ${theme.black};
      border-radius: 30px;
      padding: 12px 28px;
      color: ${theme.white} !important;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid ${theme.black};
        background: ${theme.white};
        color: ${theme.black} !important;
      }
    }
  }

  &.ant-menu-item a {
    color: ${theme.black};
  }

  & span.anticon.anticon-right {
    font-size: 25px;
    padding-left: 20px;
  }
`;

export const MenuButton = styled(Button)`
  padding: 4px 10px;
  background-color: transparent;
  border: none;
  text-shadow: none !important;
  box-shadow: none !important;

  &:hover {
    background-color: transparent !important;
    span {
      color: ${theme.black} !important;
    }
  }

  &.ant-btn .anticon {
    font-size: 23px;
    color: ${theme.black} !important;
  }
`;
export const CloseButton = styled.p`
  font-weight: 400;
  font-size: 20px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const SideBar = styled(Drawer)`
  /* position: relative;
  height: 100%;
  width: 100%; */
  img {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  & .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: black;
  }

  .ant-drawer-content-wrapper {
    width: 100% !important;
    /* width: 300px !important; */
  }

  .ant-menu {
    background: #000;
  }

  .ant-menu-item a {
    color: #fff;
    font-size: 40px;
  }

  .ant-drawer-content {
    background-color: black;
  }
  span.ant-menu-title-content {
    color: #fff;
    font-size: 40px;
  }

  .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-vertical-left .ant-menu-item:not(:last-child),
  .ant-menu-vertical-right .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 32px;
  }

  .ant-drawer-body {
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    background-color: black;
  }

  .ant-drawer-header {
    border-bottom: none !important;
  }

  .ant-drawer-close {
    display: inline-block;
    margin-right: 25px;
    text-align: center;
    border: 1px solid white;
    cursor: pointer;
    border-radius: 50px;
    padding: 3px;

    position: absolute;
    right: 0;
  }

  .ant-menu-vertical {
    border: none;
  }

  .ant-drawer-title {
    font-weight: 500;
    font-size: 32px;
    line-height: 22px;
  }
  span.anticon.anticon-close {
    color: ${theme.black} !important;
  }
`;

export const MenuDivider = styled(Divider)`
  margin: 0;
`;

export const MegaMenu = styled.div`
  float: left;
  overflow: hidden;

  &:hover {
    .dropdown-content {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const MegaMenuContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 0;
  background: #242553;
  padding-top: 140px;
  padding-bottom: 48px;
  transition: 0.6s ease-in-out;
  @media (max-width: 1220px) {
    margin: 0 20px;
  }
`;
export const MegaMenuContentInner = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  > .ant-row {
    margin: 0 -10px;
    > .ant-col {
      padding: 0 10px;
    }
  }
`;

export const MenuProContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;
export const FooterContent = styled.p`
  font-weight: 400;
  font-size: 10px;
  text-align: left;
  color: #ffffff;

  a {
    color: ${theme.white};
  }
`;

export const StyledFooterRow = styled(Row)`
  justify-content: space-between;
  padding: 0 8px;
`;

export const CloseBtn = styled.div`
  width: 25px;
  height: 25px;
  float: right;
  background: transparent;
  border-radius: 50%;
  border: 1px solid ${theme.white};
  color: white;
  text-align: center;
`;

export const StyledModel = styled(Modal)`
  .ant-modal,
  .ant-modal-content {
    min-height: 100vh;
    height: max-content;
    width: 100vw;
    margin: 0;
    top: 0;
    background-color: #000;
  }
  .ant-modal-body {
    min-height: calc(100vh - 110px);
    height: max-content;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  &.ant-modal,
  &.ant-modal-content {
    min-height: 100vh;
    height: max-content;
    width: 100vw;
    margin: 0;
    top: 0;
    background-color: #000;
  }

  .ant-modal-footer {
    border-top: none;
  }

  &.ant-modal-body {
    height: calc(100vh - 110px);
  }

  .ant-modal-header {
    padding-top: 40px;
    color: rgba(0, 0, 0, 0.85);
    background: black;
    border-bottom: none;
    border-radius: 2px 2px 0 0;
  }

  .ant-modal-close {
    color: #fff;
    padding-top: 25px;
    padding-bottom: 40px;
  }
  span.anticon.anticon-close svg {
    fill: white;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 5px 0px;
  color: #fff;
  border: 1px solid #fff;
`;

export const DrawerFooterCont = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  color: white;
  padding-right: 10%;
`;
export const DrawerFooterContInner = styled.div`
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid ${theme.white};
`;

export const StyledBackButton = styled(Col)`
  width: 100%;
`;

export const StyledBodyRow = styled(Row)`
  justify-content: space-around;
`;
