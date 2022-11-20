import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import theme from "../../../theme";
import { StyledHeadingh2 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { BlackBackground, ContentList, Imagecont } from "./style";

const MoSCowPrioritization = ({ MoscowPrioritizationData }: any) => {
  return (
    <BlackBackground color={MoscowPrioritizationData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={MoscowPrioritizationData.lineHeading}
          number="01"
          color={theme.white}
        />
        <Imagecont>
          <GatsbyImage
            image={MoscowPrioritizationData.image.gatsbyImage}
            alt={MoscowPrioritizationData.image.altText}
          />
        </Imagecont>
        <StyledHeadingh2
          maxWidth="1095px"
          color={theme.white}
          text={MoscowPrioritizationData.heading}
        />
        <ContentList
          dangerouslySetInnerHTML={{ __html: MoscowPrioritizationData.content }}
        />
      </GlobalContainer>
    </BlackBackground>
  );
};

export default MoSCowPrioritization;
