import React from 'react'
import { StyledHeadingh2 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import {
  BannerDescription,
  BannerList,
  MVPBannerSection,
} from "./style";

const MVPIntro = ({BannerData}: any) => {
  return (
    <MVPBannerSection>
      <GlobalContainer>
        <StyledHeadingh2
          maxWidth="1068px"
          text={BannerData.heading}
        />
        <BannerDescription
          dangerouslySetInnerHTML={{
            __html: BannerData.content,
          }}
        />
        <BannerList
          dangerouslySetInnerHTML={{
            __html: BannerData.contentsLists,
          }}
        />
      </GlobalContainer>
    </MVPBannerSection>
  )
}

export default MVPIntro