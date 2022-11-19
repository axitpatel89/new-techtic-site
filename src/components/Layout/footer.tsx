import { Col, Form, Row } from "antd";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../Global/button";
import {
  StyledHeadingh2,
  StyledHeadingh4,
  StyledHeadingh5,
} from "../Global/headings";
import { GlobalContainer } from "../Global/layout";
import {
  FooterComponent,
  FooterCol,
  Paragraph,
  FooterNavigation,
  EmailLink,
  FooterLetsTalk,
  ContactUsSection,
  EmailLinkCont,
} from "./footerStyles";
import { useFooterTitleQuery } from "../../querys/globalQuery/useFooterTitleQuery";
import { useFooterContentQuery } from "../../querys/globalQuery/useFooterContentQuery";
import { useWindowDimensions } from "../../querys/globalQuery/useWindowDimensions";
import theme from "../../theme";
import StarterModal from "../Models/StarterModal";
const activeStyles = {
  color: "cyan",
};

export const Footer: React.FC<{}> = () => {
  const { footer } = useFooterTitleQuery();
  const windowDimensions = useWindowDimensions();
  const {
    footerNewslatter,
    footerContactUs,
    footerExploreMenuTitle,
    footerExploreMenu,
    footerSocialMediaTitle,
    footerSocialMediaList,
  } = useFooterContentQuery();

  // const handleClick = () => {
  //   navigate("/");
  // };
  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const handleClick = (e: any) => {
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
      <FooterComponent>
        <GlobalContainer>
          <Row>
            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18}>
              <FooterLetsTalk>
                {windowDimensions.width <= 991 ? (
                  <StyledHeadingh4 color={theme.white} text={footer.content} />
                ) : (
                  <StyledHeadingh2 color={theme.white} text={footer.content} />
                )}
                <PrimaryButton onClick={handleClick}>Let’s Talk</PrimaryButton>
              </FooterLetsTalk>
            </Col>
          </Row>

          <Row gutter={20}>
            <Col span={9} xs={24} sm={24} md={24} lg={9} xl={9}>
              <FooterCol>
                <StyledHeadingh5
                  color="white"
                  text={footerNewslatter.heading}
                />
                <Paragraph
                  dangerouslySetInnerHTML={{ __html: footerNewslatter.content }}
                />
                <iframe
                  src="//45.79.111.106/techtic/get-our-newsletter/"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="player-loop -visible"
                  data-custom-cursor
                  data-cursor-text="Learn More"
                  data-lf-yt-playback-inspected-dzlr5a5rw9a8boq2="true"
                />
              </FooterCol>
            </Col>

            <ContactUsSection span={9} xs={24} sm={24} md={24} lg={8} xl={9}>
              <FooterCol>
                <StyledHeadingh5 color="white" text={footerContactUs.heading} />
                <Paragraph
                  dangerouslySetInnerHTML={{ __html: footerContactUs.content }}
                />
                <EmailLinkCont>
                  <EmailLink href={`mailto:${footerContactUs.email}`}>
                    {footerContactUs.email}
                  </EmailLink>
                </EmailLinkCont>
              </FooterCol>
            </ContactUsSection>

            <Col span={6} xs={24} sm={24} md={24} lg={7} xl={6}>
              <Row gutter={20}>
                <Col span="12">
                  <StyledHeadingh5
                    color="white"
                    text={footerExploreMenuTitle}
                  />
                  <ul>
                    {footerExploreMenu.map(({ uri, title, id }) => {
                      return (
                        <FooterNavigation key={id}>
                          <Link activeStyle={activeStyles} to={uri}>
                            {title}
                          </Link>
                        </FooterNavigation>
                      );
                    })}
                  </ul>
                </Col>
                <Col span="12">
                  <StyledHeadingh5
                    color="white"
                    text={footerSocialMediaTitle}
                  />
                  <ul>
                    {footerSocialMediaList.map(
                      ({ socialMediaName, socialMediaLinks }) => {
                        return (
                          <FooterNavigation key={socialMediaName}>
                            <Link
                              target="_blank"
                              activeStyle={activeStyles}
                              to={socialMediaLinks}
                            >
                              {socialMediaName}
                            </Link>
                          </FooterNavigation>
                        );
                      }
                    )}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </GlobalContainer>
      </FooterComponent>
    </>
  );
};
