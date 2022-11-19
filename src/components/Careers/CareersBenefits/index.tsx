import { Col, Row } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { CareersBenefitSection, Div } from "./style";

const CareerBenefits = ({ Benefits }: any) => {
  return (
    <CareersBenefitSection>
      <GlobalContainer>
        <LineHeading
          title={Benefits.lineHeading}
          number={Benefits.lineNumber}
        />
        <Row gutter={40}>
          {Benefits.benefitsContents?.map((item: any, index: number) => {
            return (
              <Col key={index} xs={24} sm={12} md={12} lg={8} xl={8}>
                <Div style={{ maxWidth: "295px", marginBottom: "127px" }}>
                  <GatsbyImage
                    image={item.image.gatsbyImage}
                    alt={item.image.altText}
                  />
                  <p>{item.heading}</p>
                </Div>
              </Col>
            );
          })}
        </Row>
      </GlobalContainer>
    </CareersBenefitSection>
  );
};

export default CareerBenefits;
