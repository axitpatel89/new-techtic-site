import { Col, Row } from "antd";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import theme from "../../../theme";
import { StyledHeadingh2 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { BlackBackground, RightContent, SecondCol } from "./style";

const WhyDoYouNeed = ({ WhyDoYouNeedData }: any) => {
  return (
    <BlackBackground>
      <GlobalContainer>
        <LineHeading
          title={WhyDoYouNeedData.lineHeading}
          number="03"
          color={theme.white}
        />
        <Row>
          <Col xs={24} sm={18} md={18} lg={12} xl={12}>
            <GatsbyImage
              image={WhyDoYouNeedData.image.gatsbyImage}
              alt={WhyDoYouNeedData.image.altText}
            />
          </Col>
          <Col xs={0} sm={6} md={6} lg={12} xl={12}></Col>
          <Col  xs={0} sm={6} md={6} lg={12} xl={12}></Col>
          <SecondCol xs={24} sm={18} md={18} lg={12} xl={12}>
            <StyledHeadingh2
              maxWidth="1095px"
              color={theme.white}
              text={WhyDoYouNeedData.heading}
            />
            <RightContent
              dangerouslySetInnerHTML={{ __html: WhyDoYouNeedData.content }}
            />
          </SecondCol>
        </Row>
      </GlobalContainer>
    </BlackBackground>
  );
};

export default WhyDoYouNeed;
