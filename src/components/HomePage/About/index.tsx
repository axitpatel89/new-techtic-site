import React from "react";
import { BlackButton } from "../../Global/button";
import { AboutDescription } from "../../Global/globalStyle";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { BlueDotsWithTextCTA } from "../BlueDotsWithTextCTA";
import { ImageBox } from "./image-box";
import { AboutComponent, DescriptionPoints } from "./style";
import { useAboutSectionQuery } from "../../../querys/homePageQuery/useAboutSectionQuery";
import { StyledHeadingh1 } from "../../Global/headings";
import { navigate } from "gatsby";

export const About = () => {
  const { LineTitle, LineNumber, Title, Content, CTA, Points } =
    useAboutSectionQuery();

  const handleAboutBtn = (e: any) => {
    navigate(CTA.url);
  };

  return (
    <>
      <AboutComponent>
        <GlobalContainer>
          <LineHeading title={LineTitle} number={LineNumber} color="" />
          <StyledHeadingh1 text={Title} />
          <BlueDotsWithTextCTA Points={Points} />
        </GlobalContainer>
        <ImageBox />
        <GlobalContainer>
          <AboutDescription>
            <DescriptionPoints dangerouslySetInnerHTML={{ __html: Content }} />
            <BlackButton onClick={handleAboutBtn}>{CTA.title}</BlackButton>
          </AboutDescription>
        </GlobalContainer>
      </AboutComponent>
    </>
  );
};
