import { Col, Row } from "antd";
import React from "react";
import { StyledHeadingh2 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import {
  BannerDescription,
  BannerList,
  FormHeading,
  FormSection,
  StaffIntroSection,
  RightCol,
  SectionTitle,
  SubHeading,
} from "./style";

const StaffBanner = ({ BannerData }: any) => {
  return (
    <StaffIntroSection>
      <GlobalContainer>
        <Row>
          <Col xs={24} sm={24} md={24} lg={13} xl={13}>
            <StyledHeadingh2 maxWidth="715px" text={BannerData.heading} />
            <SubHeading>{BannerData.subHeading}</SubHeading>
            <BannerDescription
              dangerouslySetInnerHTML={{
                __html: BannerData.content,
              }}
            />

            <BannerList
              dangerouslySetInnerHTML={{
                __html: BannerData.contentsLists,
              }}
            />
          </Col>
          <RightCol xs={24} sm={24} md={24} lg={11} xl={11}>
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
    </StaffIntroSection>
  );
};

export default StaffBanner;
