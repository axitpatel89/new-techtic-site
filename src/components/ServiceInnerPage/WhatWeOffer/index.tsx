import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  Description,
  FirstImage,
  ImgContainer,
  Logo,
  LogoContainer,
  SecondImage,
  WhatWeOfferSection,
} from "./style";

const WhatWeOffer = ({ WhatWeOffer }: any) => {
  return (
    <WhatWeOfferSection color="">
      <GlobalContainer>
        <LineHeading
          title={WhatWeOffer.lineHeading}
          number={WhatWeOffer.lineNumber}
        />
        <StyledHeadingh1 maxWidth="1135px" text={WhatWeOffer.heading} />
        <ImgContainer>
          <FirstImage xs={24} sm={24} md={12} lg={12} xl={12}>
            <GatsbyImage
              image={WhatWeOffer.imageOne.gatsbyImage}
              alt={WhatWeOffer.imageOne.altText}
            />
          </FirstImage>
          <SecondImage xs={24} sm={24} md={12} lg={12} xl={12}>
            <GatsbyImage
              image={WhatWeOffer.imageSecond.gatsbyImage}
              alt={WhatWeOffer.imageSecond.altText}
            />
          </SecondImage>
        </ImgContainer>
        <Description
          dangerouslySetInnerHTML={{ __html: WhatWeOffer.content }}
        />
        <LogoContainer gutter={20}>
          {WhatWeOffer.technologyLogo.map((item: any, index: number) => {
            return (
              <Logo key={index} xs={12} sm={12} md={12} lg={6} xl={6}>
                <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
              </Logo>
            );
          })}
        </LogoContainer>
      </GlobalContainer>
    </WhatWeOfferSection>
  );
};

export default WhatWeOffer;
