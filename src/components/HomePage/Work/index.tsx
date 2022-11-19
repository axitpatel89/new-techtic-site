import React from "react";
import { BlackButton } from "../../Global/button";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { AboutText, Description, ImageCol, WorkComponent } from "./style";
import { useWorkQuery } from "../../../querys/homePageQuery/useWorkQuery";
import { navigate } from "gatsby";
import { WorkImageGrid } from "./workImageGrid";
import { GatsbyImage } from "gatsby-plugin-image";

const Work = () => {
  const { WorkData } = useWorkQuery();

  const handleWorkBtn = (e: any) => {
    e.preventDefault();
    navigate(WorkData.cta.url);
  };

  return (
    <WorkComponent>
      <GlobalContainer>
        <LineHeading
          title={WorkData.lineHeading}
          number={WorkData.lineNumber}
        />
        <StyledHeadingh1 text={WorkData.heading} />
        <ImageCol>
          {WorkData.images?.map((item: any, index: number) => {
            return (
              <GatsbyImage
                key={index}
                image={item.gatsbyImage}
                alt={item.altText}
              />
            );
          })}
        </ImageCol>
        <Description>
          <AboutText dangerouslySetInnerHTML={{ __html: WorkData.content }} />
          <BlackButton onClick={handleWorkBtn}>
            {WorkData.cta.title}
          </BlackButton>
        </Description>
        <WorkImageGrid WorkData={WorkData} />
      </GlobalContainer>
    </WorkComponent>
  );
};

export default Work;
