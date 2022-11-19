import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { StyledHeadingh1 } from "../../Global/headings";
import {
  StyledSpace,
  StyledLink,
  ServiceInnerIntroConut,
  Description,
} from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const activeStyles = {
  display: "block",
  borderBottom: "1px solid black",
  paddingbottom: "-2px",
};

const ServiceInnerIntro = ({ IntroData, ServiceMenu }: any) => {
  return (
    <ServiceInnerIntroConut color={IntroData.backgroundColor}>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="1032px" text={IntroData.heading} />
        <StyledSpace>
          {ServiceMenu.map((item: any, index: number) => {
            return (
              <StyledLink activeStyle={activeStyles} key={index} to={item.url}>
                {item.label}
              </StyledLink>
            );
          })}
        </StyledSpace>
        <GatsbyImage
          style={{ imageRendering: "pixelated" }}
          image={IntroData.image.gatsbyImage}
          alt={IntroData.image.altText}
        />
        <Description dangerouslySetInnerHTML={{ __html: IntroData.content }} />
      </GlobalContainer>
    </ServiceInnerIntroConut>
  );
};

export default ServiceInnerIntro;
