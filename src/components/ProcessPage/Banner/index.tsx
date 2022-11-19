import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { BannerSection, SubTitle } from "./style";

const Banner = ({ ProcessData }: any) => {
  return (
    <BannerSection>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="1032" text={ProcessData.title} />
        <SubTitle dangerouslySetInnerHTML={{ __html: ProcessData.content }} />
      </GlobalContainer>
    </BannerSection>
  );
};

export default Banner;
