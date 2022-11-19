import React, { useState } from "react";
import { HeroComponent, ImgContainer, StyledTitle } from "./style";
import { GlobalContainer } from "../../Global/layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Hero = () => {
  const [video, setVideo] = useState(false);
  const handleClick = () => {
    setVideo(true);
  };

  const data = useStaticQuery(
    graphql`
      query MyQueryHeroBanner {
        tsPage(databaseId: { eq: 38 }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeroBanner {
                bannerContent
                bannerVideoLink
                bannerImage {
                  altText
                  gatsbyImage(layout: FULL_WIDTH, width: 1440)
                }
              }
            }
          }
        }
      }
    `
  );

  const title = data.tsPage.flexibleContent.flexibleContent[0].bannerContent;

  const Video = data.tsPage.flexibleContent.flexibleContent[0].bannerVideoLink;

  const ImageData =
    data.tsPage.flexibleContent.flexibleContent[0].bannerImage.gatsbyImage;

  return (
    <HeroComponent>
      <GlobalContainer>
        <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
      </GlobalContainer>
      <ImgContainer className={video ? "cursor" : ""} onClick={handleClick}>
        {video ? (
          <div className="videoWrapper">
            <iframe
              src={Video}
              allowFullScreen
              frameBorder="0"
              className="iframe"
              allow="autoplay"
            />
          </div>
        ) : (
          <GatsbyImage
            image={ImageData}
            alt={
              data.tsPage.flexibleContent.flexibleContent[0].bannerImage.altText
            }
          />
        )}
      </ImgContainer>
    </HeroComponent>
  );
};
