import { Col, Form, Row } from "antd";
import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { PrimaryButton } from "../Global/button";
import {
  //   StyledHeadingh2,
  //   StyledHeadingh4,
  StyledHeadingh5,
} from "../Global/headings";
// import { GlobalContainer } from "../Global/layout";
import {
  FooterComponent,
  FooterCol,
  Paragraph,
  FooterNavigation,
  EmailLink,
  InputText,
  FooterLetsTalk,
  FooterButton,
  ContactUsSection,
  EmailLinkCont,
  FooterContent,
} from "./ModalFooterStyle";
import { useFooterTitleQuery } from "../../querys/globalQuery/useFooterTitleQuery";
import { useFooterContentQuery } from "../../querys/globalQuery/useFooterContentQuery";
import { useWindowDimensions } from "../../querys/globalQuery/useWindowDimensions";
import theme from "../../theme";

const activeStyles = {
  color: "cyan",
};

const ModalFooter = () => {
  const [validationMsg, setValidationMsg] = useState("");

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

  const handleClick = () => {
    navigate("/");
  };

  return (
    <FooterContent xl={24}>
      <Row gutter={20}>
        <Col span={9} xs={24} sm={24} md={24} lg={9} xl={9}>
          <FooterCol>
            <StyledHeadingh5 color="white" text={footerNewslatter.heading} />
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
            {/* <Form
              name="footer-form"
              // onFinishFailed={() => setValidationMsg("Invalid Email")}
              // onFinish={() => setValidationMsg("Suceessfully Submit)}
              onFinish={() => setValidationMsg("Suceessfully Submit")}
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <InputText placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <FooterButton htmlType="submit">Submit</FooterButton>
              </Form.Item>
              <p style={{ color: "cyan" }}>{validationMsg}</p>
            </Form> */}
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
              <StyledHeadingh5 color="white" text={footerExploreMenuTitle} />
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
              <StyledHeadingh5 color="white" text={footerSocialMediaTitle} />
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
    </FooterContent>
  );
};

export default ModalFooter;
