import { Col } from "antd";
import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  BlueDot,
  CTAInner,
  Heading,
  Paragraph,
  ShopifyBenefitSection,
  PointsContainer,
} from "./style";

const ShopifyBenefits = ({ BenefitsData }: any) => {
  const pointContent = BenefitsData.contentLists;
  return (
    <ShopifyBenefitSection color={BenefitsData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={BenefitsData.lineHeading}
          number={BenefitsData.lineNumber}
        />
        <Heading dangerouslySetInnerHTML={{ __html: BenefitsData.heading }} />
        <PointsContainer>
          {pointContent.map((item: any, index: number) => {
            return (
              <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                <CTAInner>
                  <BlueDot></BlueDot>
                  <Paragraph
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </CTAInner>
              </Col>
            );
          })}
        </PointsContainer>
      </GlobalContainer>
    </ShopifyBenefitSection>
  );
};

export default ShopifyBenefits;
