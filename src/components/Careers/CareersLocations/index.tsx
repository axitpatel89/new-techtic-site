import React from "react";
import { Col } from "antd";
import { StyledHeadingh1, StyledHeadingh3 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { Address, ImageContainer, LocationRow, LocationSection } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";

const CareersLocations = ({ Locations }: any) => {
  return (
    <LocationSection color={Locations.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={Locations.lineHeading}
          number={Locations.lineNumber}
        />
        <StyledHeadingh1 maxWidth="925px" text={Locations.heading} />
        <LocationRow>
          {Locations.locationContents.map((item: any, index: number) => {
            return (
              <Col key={index} xs={24} xl={10}>
                <StyledHeadingh3 maxWidth="400px" text={item.location} />
                <Address dangerouslySetInnerHTML={{ __html: item.address }} />
              </Col>
            );
          })}
        </LocationRow>
      </GlobalContainer>
      <ImageContainer>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          breakpoints={{
            320: {
              spaceBetween: 20,
            },
            640: {
              spaceBetween: 30,
            },
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 96,
            },
          }}
        >
          {Locations.locationImages.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <GatsbyImage
                  image={item.images.gatsbyImage}
                  alt={item.images.altText}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ImageContainer>
    </LocationSection>
  );
};

export default CareersLocations;
