import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { Col } from "antd";
import { StyledRow, ImageContainer, LineComponent } from "./style";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh3 } from "../../Global/headings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const CoreSpecialties = ({ CoreSpecialtiesData }: any) => {
  const coreSpecialtiesLists = CoreSpecialtiesData.coreSpecialtiesPages;

  const length = coreSpecialtiesLists.length;

  const handleImageClick = (url: string) => {
    navigate(url);
  };
  return (
    <>
      <GlobalContainer>
        <LineHeading
          title={CoreSpecialtiesData.lineHeading}
          number={CoreSpecialtiesData.lineNumber}
        />
      </GlobalContainer>
      <StyledRow>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <StyledHeadingh3
            maxWidth="467px"
            text={CoreSpecialtiesData.content}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
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
              {coreSpecialtiesLists.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div onClick={() => handleImageClick(item.link)}>
                      <GatsbyImage
                        image={item.featuredImage.node.gatsbyImage}
                        alt={item.featuredImage.node.altText}
                      />
                      <LineComponent>
                        <span>{item.title}</span>
                        <span>
                          {index + 1}/{length}
                        </span>
                      </LineComponent>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ImageContainer>
        </Col>
      </StyledRow>
    </>
  );
};

export default CoreSpecialties;
