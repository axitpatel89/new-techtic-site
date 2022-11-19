import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { StyledHeadingh1 } from "../../Global/headings";
import { ServiceInnerIntroConut, Description } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const BannerSection = ({ IntroData }: any) => {
  return (
    <ServiceInnerIntroConut color={IntroData.backgroundColor}>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="1032px" text={IntroData.heading} />
        <GatsbyImage image={IntroData.image.gatsbyImage} alt={IntroData.image.altText} />
        <Description dangerouslySetInnerHTML={{ __html: IntroData.content }} />
      </GlobalContainer>
    </ServiceInnerIntroConut>
  );
};

export default BannerSection;
