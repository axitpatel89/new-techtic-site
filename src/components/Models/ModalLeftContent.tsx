import { Col, Row } from "antd";
import React from "react";
import {
  Author,
  Company,
  ContentColMain,
  ContentRow,
  Description,
  JobTitle,
  LeftCol,
  LogoBox,
  SectionTitle,
  TestimonialsRow,
} from "./ModalLeftContentStyle";
import { GatsbyImage } from "gatsby-plugin-image";

const ModalLeftContent = ({
  ModalHeadings,
  ModalData,
  ModalTestimonials,
}: any) => {
  return (
    <LeftCol xl={12}>
      <Row>
        <ContentColMain xl={24}>
          <SectionTitle>{ModalHeadings.trustedByHeading}</SectionTitle>
          <ContentRow gutter={40}>
            {ModalData.trustedBy.map((item: any, index: number) => {
              return (
                <LogoBox xl={8} key={index}>
                  <GatsbyImage
                    image={item.logo.gatsbyImage}
                    alt={item.logo.altText}
                  />
                </LogoBox>
              );
            })}
          </ContentRow>
        </ContentColMain>

        <ContentColMain xl={24}>
          <SectionTitle>{ModalHeadings.testimonialsHeading}</SectionTitle>
          <TestimonialsRow gutter={20}>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              <GatsbyImage
                image={ModalTestimonials.node.featuredImage.node.gatsbyImage}
                alt={ModalTestimonials.node.featuredImage.node.altText}
              />
            </Col>
            <Col xs={19} sm={19} md={19} lg={19} xl={19}>
              <Description
                dangerouslySetInnerHTML={{
                  __html: ModalTestimonials.node.content,
                }}
              />
              <Author>
                -{ModalTestimonials.node.TestimonialsForCaseStudies.author}
              </Author>
              <JobTitle>
                {ModalTestimonials.node.TestimonialsForCaseStudies.jobTitle}
              </JobTitle>
              <Company>
                @{ModalTestimonials.node.TestimonialsForCaseStudies.company}
              </Company>
            </Col>
          </TestimonialsRow>
        </ContentColMain>

        <ContentColMain xl={24}>
          <SectionTitle>{ModalHeadings.recognitionsHeading}</SectionTitle>
          <ContentRow gutter={20}>
            {ModalData.recognition.map((item: any, index: number) => {
              return (
                <LogoBox xs={12} sm={12} md={8} lg={8} xl={8} key={index}>
                  <GatsbyImage
                    image={item.logo.gatsbyImage}
                    alt={item.logo.altText}
                  />
                </LogoBox>
              );
            })}
          </ContentRow>
        </ContentColMain>
      </Row>
    </LeftCol>
  );
};

export default ModalLeftContent;
