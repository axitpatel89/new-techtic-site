import React, { useState, useEffect, FC } from "react";
import {
  HeadComponent,
  HeaderWrapper,
  MainMenu,
  MenuItem,
  MenuButton,
  SideBar,
  MenuDivider,
  MegaMenu,
  MegaMenuContent,
  MegaMenuContentInner,
  MenuProContent,
  FooterContent,
  CloseButton,
  StyledModel,
  StyledFooterRow,
  StyledBodyRow,
  StyledBackButton,
  StyledDivider,
  CloseBtn,
  DrawerFooterCont,
  DrawerFooterContInner,
  MainMenuMobile,
} from "./headerStyles";
import { Row, Col } from "antd";
import { Link } from "gatsby";
import { useMenuQuery } from "../../querys/globalQuery/useMenuQuery";
import { useLogoAndCTAQuery } from "../../querys/globalQuery/useLogoAndCTAQuery";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";
import { GatsbyImage } from "gatsby-plugin-image";
import logoLight from "../../images/logo-light.png";
import logoImage from "../../images/logo.svg";
import { useServiceIntroQuery } from "../../querys/servicePageQuery/useServiceIntroQuery";
import { navigate } from "gatsby";
import { useFooterContentQuery } from "../../querys/globalQuery/useFooterContentQuery";
import StarterModal from "../Models/StarterModal";

const activeStyles = {
  textDecoration: "underline",
};
interface HeaderProps {
  bottomShadow?: boolean;
  showNav?: boolean;
}
export const Header: FC<HeaderProps> = ({ bottomShadow, showNav }) => {
  const { servicesCta }: any = useServiceIntroQuery();
  const { footerSocialMediaList } = useFooterContentQuery();

  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const { menuAll } = useMenuQuery();
  const { logo, CTAButton } = useLogoAndCTAQuery();

  const [visible, setVisible] = useState(false);
  const [responsiveMegaMenu, setResponsiveMegaMenu] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onMouseEnter = () => {
    document.body.classList.add("mega-menu-open");
  };

  const onMouseLeave = (e: any) => {
    document.body.classList.remove("mega-menu-open");
  };

  const handleClickInnerService = (item: any) => {
    navigate(item.serviceRedirectLinks.url);
    document.body.classList.remove("mega-menu-open");
  };

  const handleTalkBtn = (e: any) => {
    e.preventDefault();
    setLetsTalkVisible(true);
  };

  useEffect(() => {
    if (letsTalkVisible) {
      document.body.classList.add("fullscreen-model");
    } else {
      document.body.classList.remove("fullscreen-model");
    }
  }, [letsTalkVisible]);

  return (
    <>
      <StarterModal visible={letsTalkVisible} setVisible={setLetsTalkVisible} />
      <StyledModel
        title={
          <>
            <img src={logoLight} alt={logo.altText} />
            <CloseBtn onClick={() => setResponsiveMegaMenu(false)}>X</CloseBtn>
          </>
        }
        closable={false}
        visible={responsiveMegaMenu}
        onOk={() => setResponsiveMegaMenu(false)}
        onCancel={() => setResponsiveMegaMenu(false)}
        footer={
          <>
            <StyledFooterRow>
              <FooterContent>
                {footerSocialMediaList.map((item: any, index: number) => {
                  const lastIndex = footerSocialMediaList.length - 1;
                  return (
                    <Link
                      activeStyle={activeStyles}
                      to={item.socialMediaLinks}
                      key={index}
                      target="_blank"
                    >
                      {item.socialMediaName}
                      {index < lastIndex && <span>, </span>}
                    </Link>
                  );
                })}
              </FooterContent>
              <FooterContent>NY, India</FooterContent>
            </StyledFooterRow>
          </>
        }
      >
        <StyledBodyRow>
          <StyledDivider />
          <StyledBackButton>
            <CloseButton
              type="primary"
              onClick={() => setResponsiveMegaMenu(false)}
            >
              &lt; Back
            </CloseButton>
          </StyledBackButton>
          {servicesCta.map((item: any, index: number) => {
            return (
              <Col
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => handleClickInnerService(item)}
              >
                <GatsbyImage image={item?.image.gatsbyImage} alt="" />
                <MenuProContent
                  dangerouslySetInnerHTML={{ __html: item.heading }}
                />
              </Col>
            );
          })}
          <StyledDivider />
        </StyledBodyRow>
      </StyledModel>

      <HeadComponent
        className={showNav ? (bottomShadow ? "bottomShadow shownav" : "") : ""}
      >
        <HeaderWrapper>
          <Row gutter={[32, 0]} align="middle">
            <Col
              xs={12}
              sm={10}
              md={4}
              lg={6}
              xl={6}
              className="header-logo-wrapper"
            >
              <Link to="/">
                <img src={logoImage} alt="Logo" />
              </Link>
            </Col>

            <Col
              xs={12}
              sm={14}
              md={20}
              lg={18}
              xl={18}
              className="menu-right-wrapper"
            >
              <div className="mobile" style={{ float: "right" }}>
                <MenuButton type="primary" onClick={showDrawer}>
                  <MenuOutlined />
                </MenuButton>
                <SideBar
                  title={<img src={logoLight} alt={logo.altText} />}
                  placement="right"
                  closable={true}
                  onClose={onClose}
                  visible={visible}
                >
                  <MainMenuMobile mode="vertical">
                    {menuAll.map(({ url, label, id }) => {
                      if (label === "Services") {
                        return (
                          <>
                            <MenuItem key={id}>
                              <div onClick={() => setResponsiveMegaMenu(true)}>
                                {label}
                                {<RightOutlined />}
                              </div>
                            </MenuItem>
                            <MenuDivider />
                          </>
                        );
                      }
                      return (
                        <>
                          <MenuItem key={id}>
                            <Link activeStyle={activeStyles} to={url}>
                              {label}
                            </Link>
                          </MenuItem>
                          <MenuDivider />
                        </>
                      );
                    })}
                  </MainMenuMobile>
                  <DrawerFooterCont>
                    <DrawerFooterContInner>
                      <StyledFooterRow>
                        <FooterContent>
                          {footerSocialMediaList.map(
                            (item: any, index: number) => {
                              const lastIndex =
                                footerSocialMediaList.length - 1;
                              return (
                                <Link
                                  activeStyle={activeStyles}
                                  to={item.socialMediaLinks}
                                  key={index}
                                  target="_blank"
                                >
                                  {item.socialMediaName}
                                  {index < lastIndex && <span>, </span>}
                                </Link>
                              );
                            }
                          )}
                        </FooterContent>
                        <FooterContent>NY, India</FooterContent>
                      </StyledFooterRow>
                    </DrawerFooterContInner>
                  </DrawerFooterCont>
                </SideBar>
              </div>
              <MainMenu mode="horizontal" className="desktop">
                {menuAll.map(({ url, label, id }) => {
                  const pageUrl =
                    typeof window !== "undefined" ? window.location.href : "";
                  const activeLink = pageUrl.includes("services");
                  if (label === "Services") {
                    return (
                      <MegaMenu
                        key={id}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <MenuItem key={id}>
                          <Link
                            className={activeLink ? "click" : ""}
                            activeStyle={activeStyles}
                            to={url}
                          >
                            {label}
                          </Link>
                        </MenuItem>
                        <MegaMenuContent className="dropdown-content">
                          <MegaMenuContentInner>
                            <Row>
                              {servicesCta.map((item: any, index: number) => {
                                return (
                                  <Col
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      handleClickInnerService(item)
                                    }
                                    span={6}
                                    key={index}
                                  >
                                    <GatsbyImage
                                      image={item?.image.gatsbyImage}
                                      alt=""
                                    />
                                    <MenuProContent
                                      dangerouslySetInnerHTML={{
                                        __html: item.heading,
                                      }}
                                    />
                                  </Col>
                                );
                              })}
                            </Row>
                          </MegaMenuContentInner>
                        </MegaMenuContent>
                      </MegaMenu>
                    );
                  }
                  return (
                    <MenuItem key={id}>
                      <Link id={id} activeStyle={activeStyles} to={url}>
                        <div>{label}</div>
                      </Link>
                    </MenuItem>
                  );
                })}
                <MenuItem key="talk" className="head-button">
                  <Link onClick={handleTalkBtn} to="">
                    {CTAButton.title}
                  </Link>
                </MenuItem>
              </MainMenu>
            </Col>
          </Row>
        </HeaderWrapper>
      </HeadComponent>
    </>
  );
};
