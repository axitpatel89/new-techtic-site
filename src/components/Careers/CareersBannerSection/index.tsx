import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { MainContainer, ImageContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";

const CareersBannerSection = ({ Careers }: any) => {
  return (
    <MainContainer>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="1032px" text={Careers.heading} />
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
          {Careers.gallery?.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ImageContainer>
    </MainContainer>
  );
};

export default CareersBannerSection;
