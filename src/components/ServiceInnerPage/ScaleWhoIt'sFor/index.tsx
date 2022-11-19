import { Col, Row } from "antd";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { StyledHeadingh3 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  BuildTeamButton,
  ImageContainer,
  StyledDiscription,
  StyledDiv,
  StyledTitle,
  WhoItsForSection,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { GatsbyImage } from "gatsby-plugin-image";
import HireDeveloperModal from "../../Models/HireDeveloperModal";

const ScaleWhoItsFor = ({ WhoItsForData }: any) => {
  // const handleBuildTeamBtn = (e: any) => {
  //   e.preventDefault();
  //   navigate(WhoItsForData.cta.url);
  // };

  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const handleBuildTeamBtn = (e: any) => {
    // e.preventDefault();
    setLetsTalkVisible(true);
  };

  useEffect(() => {
    if (letsTalkVisible) {
      document.body.classList.add("fullscreen-model");
    } else {
      document.body.classList.remove("fullscreen-model");
    }
  }, [letsTalkVisible]);

  return (
    <>
      <HireDeveloperModal
        visible={letsTalkVisible}
        setVisible={setLetsTalkVisible}
      />
      <WhoItsForSection color={WhoItsForData.backgroundColor}>
        <GlobalContainer>
          <LineHeading
            title={WhoItsForData.lineHeading}
            number={WhoItsForData.lineNumber}
            color=""
          />
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <StyledHeadingh3
                maxWidth="505px"
                color=""
                text={WhoItsForData.heading}
              />
              <BuildTeamButton onClick={handleBuildTeamBtn}>
                {WhoItsForData.cta.title}
              </BuildTeamButton>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {WhoItsForData.contentLists.map((item: any, index: number) => {
                return (
                  <StyledDiv key={index}>
                    <StyledTitle>{item.heading}</StyledTitle>
                    <StyledDiscription
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </StyledDiv>
                );
              })}
            </Col>
          </Row>
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
            {WhoItsForData.imageGallery.map((item: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ImageContainer>
      </WhoItsForSection>
    </>
  );
};

export default ScaleWhoItsFor;
