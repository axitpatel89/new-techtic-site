import React from "react";
import { BlackButton } from "../../Global/button";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading/index";
import { DevelopmentDescription, Logo, LogoContainer } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const MVPDevelopment = ({ MVPDevelopmentData, sectionCount }: any) => {
  return (
    <GlobalContainer>
      <LineHeading
        title={MVPDevelopmentData.lineHeading}
        number={sectionCount}
      />
      <StyledHeadingh1 maxWidth="1020px" text={MVPDevelopmentData.heading} />
      <DevelopmentDescription
        dangerouslySetInnerHTML={{ __html: MVPDevelopmentData.content }}
      />
      <Link to="#Form">
        <BlackButton>{MVPDevelopmentData.cta.title}</BlackButton>
      </Link>
      <LogoContainer gutter={20}>
        {MVPDevelopmentData.technologyIcons.map((item: any, index: number) => {
          return (
            <Logo key={index} xs={12} sm={12} md={12} lg={6} xl={6}>
              <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
            </Logo>
          );
        })}
      </LogoContainer>
    </GlobalContainer>
  );
};

export default MVPDevelopment;
