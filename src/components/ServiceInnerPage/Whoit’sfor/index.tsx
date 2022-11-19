import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh1 } from "../../Global/headings";
import { BlueDotsWithTextCTA } from "../../HomePage/BlueDotsWithTextCTA";
import { ImageCol } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Whoitsfor = ({ WhoitsforData }: any) => {
  const Image = WhoitsforData.gallery;

  return (
    <GlobalContainer>
      <LineHeading
        title={WhoitsforData.lineHeading}
        number={WhoitsforData.lineNumber}
      />
      <StyledHeadingh1 maxWidth="925px" text={WhoitsforData.heading} />
      <BlueDotsWithTextCTA Points={WhoitsforData.pointsLists} />
      <ImageCol>
        {Image.map((item: any, index: number) => {
          return (
            <GatsbyImage
              key={index}
              image={item.gatsbyImage}
              alt={item.altText}
            />
          );
        })}
      </ImageCol>
    </GlobalContainer>
  );
};

export default Whoitsfor;
