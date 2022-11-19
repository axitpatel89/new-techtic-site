import React from "react";
import { ImageContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { useAboutSectionQuery } from "../../../querys/homePageQuery/useAboutSectionQuery";
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageBox = () => {
  const { Gallery } = useAboutSectionQuery();

  return (
    <ImageContainer>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={70}
        breakpoints={{
          320: {
            spaceBetween: 30,
          },
          640: {
            spaceBetween: 70,
          },
        }}
      >
        {Gallery.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ImageContainer>
  );
};
