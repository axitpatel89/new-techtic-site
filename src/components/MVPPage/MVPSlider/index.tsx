import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { BlackButton } from "../../Global/button";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading/index";
import { ImageContainer, LineComponent, StyledParagraph } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";
import { useWindowDimensions } from "../../../querys/globalQuery/useWindowDimensions";
import { navigate } from "gatsby";

const MVPSlider = ({ SliderData, sectionCount }: any) => {
  const windowDimensions = useWindowDimensions();

  return (
    <>
      <GlobalContainer>
        <LineHeading title={SliderData.lineHeading} number={sectionCount} />
        <StyledHeadingh1 maxWidth="945px" text={SliderData.heading} />
        {SliderData.content && (
          <StyledParagraph
            dangerouslySetInnerHTML={{ __html: SliderData.content }}
          />
        )}
        <BlackButton
          style={{ marginTop: "48px" }}
          onClick={() => navigate("/our-work")}
        >
          View All
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
          {SliderData.featuredWorks?.map((item: any, index: number) => {
            const url = item.link;
            return (
              <SwiperSlide key={index}>
                <div onClick={() => navigate(url)}>
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
                      <span>{item.caseStudyCategory.nodes[0].name}</span>
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

export default MVPSlider;
