import React from "react";
import { GlobalContainer } from "../Global/layout";
import { StyledHeadingh1 } from "../Global/headings";
import { AboutInnerIntro, Description } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutIntro = ({ IntroData, ServiceMenu }: any) => {
  return (
    <AboutInnerIntro color={IntroData.backgroundColor}>
      <GlobalContainer>
        <StyledHeadingh1
          style={{ marginBottom: "96px" }}
          maxWidth="1084px"
          text={IntroData.heading}
        />
        <GatsbyImage image={IntroData?.image?.gatsbyImage} alt={IntroData?.image?.altText} />
        <Description dangerouslySetInnerHTML={{ __html: IntroData.content }} />
      </GlobalContainer>
    </AboutInnerIntro>
  );
};

export default AboutIntro;
