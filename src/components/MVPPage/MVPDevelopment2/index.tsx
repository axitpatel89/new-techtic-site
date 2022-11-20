import { Col, Row } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading/index";
import { FormHeading, FormSection, RightCol, SectionTitle } from "./style";

const MVPDevelopment2 = ({ MVPDevelopment2Data, sectionCount }: any) => {
  return (
    <GlobalContainer>
      <LineHeading
        title={MVPDevelopment2Data.lineHeading}
        number={sectionCount}
      />
      <StyledHeadingh1 maxWidth="1020px" text={MVPDevelopment2Data.heading} />
      <Row style={{ marginTop: "96px", marginBottom: "230px" }}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row>
            {MVPDevelopment2Data.industriesLists.map(
              (item: any, index: number) => {
                return (
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "40px",
                      marginBottom: "40px",
                      maxWidth: "250px",
                      width: "100%",
                      height: "250px",
                      background: "#F0F0F0",
                    }}
                    key={index}
                  >
                    <GatsbyImage
                      image={item.logo.gatsbyImage}
                      alt={item.logo.altText}
                    />
                    <div style={{ paddingTop: "40px" }}>{item.title}</div>
                  </Col>
                );
              }
            )}
          </Row>
        </Col>
        <RightCol xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormSection id="Form">
            <SectionTitle>Get in touch</SectionTitle>
            <FormHeading>Tell us about your project.</FormHeading>
            <iframe
              src="//45.79.111.106/techtic/start-your-project-startup/"
              frameBorder="0"
              allowFullScreen
              allow="accelemeter; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="player-loop -visible"
              data-custom-cursor
              data-cursor-text="Learn More"
              data-lf-yt-playback-inspected-dzlr5a5rw9a8boq2="true"
            ></iframe>
          </FormSection>
        </RightCol>
      </Row>
    </GlobalContainer>
  );
};

export default MVPDevelopment2;
