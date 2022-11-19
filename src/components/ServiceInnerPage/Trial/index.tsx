import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  ColContent,
  ImgContainer,
  Paragraph,
  StyledRow,
  TrialSection,
} from "./style";
import { StyledHeadingh3 } from "../../Global/headings";
import { BlackButton } from "../../Global/button";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Trial = ({ TrialData }: any) => {
  const handleBuildTeamBtn = (e: any) => {
    e.preventDefault();
    navigate(TrialData.cta.url);
  };
  return (
    <TrialSection color={TrialData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={TrialData.lineHeading}
          number={TrialData.lineNumber}
        />
        <StyledRow>
          <ImgContainer xs={24} sm={24} md={24} lg={12} xl={12}>
            <GatsbyImage image={TrialData.image.gatsbyImage} alt={TrialData.image.altText} />
          </ImgContainer>
          <ColContent xs={24} sm={24} md={24} lg={12} xl={12}>
            <StyledHeadingh3 maxWidth="505px" text={TrialData.heading} />
            <Paragraph
              dangerouslySetInnerHTML={{ __html: TrialData.content }}
            />
            <BlackButton onClick={handleBuildTeamBtn}>
              {TrialData.cta.title}
            </BlackButton>
          </ColContent>
        </StyledRow>
      </GlobalContainer>
    </TrialSection>
  );
};

export default Trial;
