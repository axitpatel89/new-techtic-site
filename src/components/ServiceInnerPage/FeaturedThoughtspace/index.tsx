import React from "react";
import { BlackButton } from "../../Global/button";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { ImageContainer, LineComponent, StyledParagraph } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { navigate } from "gatsby";
import { useWindowDimensions } from "../../../querys/globalQuery/useWindowDimensions";
import { GatsbyImage } from "gatsby-plugin-image";

export const FeturedThoughtspace = ({ ThoughtspaceData }: any) => {
  const windowDimensions = useWindowDimensions();

  const length = ThoughtspaceData.relatedPosts?.length;

  const handleThoughtSpaceBtn = (e: any) => {
    navigate(`/thoughtspace`);
  };

  const handleBlog = (url: any) => {
    navigate(`/thoughtspace${url}`);
  };

  return (
    <>
      <GlobalContainer>
        <LineHeading
          title={ThoughtspaceData.lineHeading}
          number={ThoughtspaceData.lineNumber}
        />
        <StyledHeadingh1 maxWidth="945px" text={ThoughtspaceData.heading} />
        <StyledParagraph
          dangerouslySetInnerHTML={{ __html: ThoughtspaceData.content }}
        />
        <BlackButton onClick={handleThoughtSpaceBtn}>
          {ThoughtspaceData.cta?.title}
        </BlackButton>
      </GlobalContainer>
      <ImageContainer>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          breakpoints={{
            320: {
              spaceBetween: 16,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 30,
            },
            1024: {
              spaceBetween: 48,
            },
          }}
        >
          {ThoughtspaceData.relatedPosts?.map((item: any, index: number) => {
            const url = item.link;
            return (
              <SwiperSlide key={index}>
                <div onClick={() => handleBlog(url)}>
                  <GatsbyImage
                    image={item.featuredImage?.node?.gatsbyImage}
                    alt={item.featuredImage?.node?.altText}
                  />
                  <LineComponent>
                    <span>{item.title}</span>
                    {windowDimensions.width <= 768 ? (
                      <span>
                        {index + 1}/{length}
                      </span>
                    ) : (
                      <span>{item.categories.nodes[0].name}</span>
                    )}
                  </LineComponent>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ImageContainer>
    </>
  );
};
