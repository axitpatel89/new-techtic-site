import { Col, Row } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  BlueDot,
  CTAInner,
  ImageCol,
  Paragraph,
  SubTitle,
  WhyItWorksSection,
} from "./style";

const WhyItWorks = ({ WhyItWorks }: any) => {
  return (
    <WhyItWorksSection color={WhyItWorks.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={WhyItWorks.lineHeading}
          number={WhyItWorks.lineNumber}
        />
        <StyledHeadingh1 maxWidth="925px" color="" text={WhyItWorks.heading} />
        <SubTitle dangerouslySetInnerHTML={{ __html: WhyItWorks.content }} />
        <Row>
          {WhyItWorks.pointsLists.map((item: any, index: number) => {
            return (
              <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                <CTAInner>
                  <BlueDot></BlueDot>
                  <Paragraph
                    dangerouslySetInnerHTML={{ __html: item.pointContent }}
                  />
                </CTAInner>
              </Col>
            );
          })}
        </Row>
        <ImageCol>
          {WhyItWorks.gallery.map((item: any, index: number) => {
            return (
              <GatsbyImage
                key={index}
                image={item.gatsbyImage}
                alt={item.altText}
              />
            );
          })}
        </ImageCol>
      </GlobalContainer>
    </WhyItWorksSection>
  );
};

export default WhyItWorks;
