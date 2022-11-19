import React from "react";
import { useEffect, useRef, useState } from "react";
import { GrowthStageSection, WrapperLG, WrapperSM } from "./style";
import { Carousel } from "antd";
import type { DotPosition } from "antd/es/carousel";
import { useWindowDimensions } from "../../../querys/globalQuery/useWindowDimensions";
import { useGrowthStagesQuary } from "../../../querys/servicePageQuery/DigitalProductQuery/useGrowthStagesQuary";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh3 } from "../../Global/headings";
import FirstImage from "../../../images/Group 68.svg";
import SecondImage from "../../../images/Group 70.svg";
import ThirdImage from "../../../images/Group 69.svg";
import { BlackButton } from "../../Global/button";

const GrowthStages = () => {
  const { GrowthStagesData } = useGrowthStagesQuary();

  const [imgSource, setImgSrc] = useState(FirstImage);
  const leftDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    const leftDiv = leftDivRef.current;
    if (leftDiv) {
      const scrollTop = 0 - leftDiv.getBoundingClientRect().top;
      if (scrollTop < 200) {
        setImgSrc(FirstImage);
      } else if (scrollTop < 900) {
        setImgSrc(SecondImage);
      } else {
        setImgSrc(ThirdImage);
      }
    }
  };

  const [dotPosition, setDotPosition] = useState<DotPosition>("bottom");

  const [slideIndex, setSlideIndex] = useState(0);

  const onChange = (from: number, to: number) => {
    setSlideIndex(to);
  };

  const windowDimensions = useWindowDimensions();

  return (
    <GrowthStageSection color={GrowthStagesData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={GrowthStagesData.lineHeading}
          number={GrowthStagesData.lineNumber}
        />

        {windowDimensions.width >= 992 ? (
          <WrapperLG>
            <div className="container">
              <div className="middle" ref={leftDivRef}>
                <div className="in-middle">
                  <StyledHeadingh3
                    maxWidth="505px"
                    style={{ marginBottom: "48px" }}
                    text={GrowthStagesData.heading}
                  />
                  {GrowthStagesData.growthStagesCta.map(
                    (item: any, index: number) => {
                      return (
                        <div key={index} className="in-in-middle">
                          <h1>{item.heading}</h1>
                          <div
                            style={{ paddingRight: "50px" }}
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                          <BlackButton style={{ marginTop: "38px" }}>
                            {item.cta.title}
                          </BlackButton>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="left">
                <img
                  style={{ marginTop: "110px" }}
                  src={imgSource}
                  alt="placeholder"
                />
              </div>
            </div>
          </WrapperLG>
        ) : (
          <WrapperSM>
            <h1
              style={{
                marginBottom: "48px",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "31px",
              }}
            >
              {GrowthStagesData.heading}
            </h1>
            <Carousel
              style={{ marginBottom: "40px" }}
              beforeChange={onChange}
              dotPosition={dotPosition}
            >
              <div>
                <img src={FirstImage} alt="placeholder" />
              </div>
              <div>
                <img src={SecondImage} alt="placeholder" />
              </div>
              <div>
                <img src={ThirdImage} alt="placeholder" />
              </div>
            </Carousel>
            <div>
              <div className="container">
                <div className="middle" ref={leftDivRef}>
                  <div className="in-middle">
                    {slideIndex == 0 && (
                      <div className="in-in-middle">
                        <h1>{GrowthStagesData.growthStagesCta[0].heading}</h1>
                        <div
                          style={{ paddingRight: "50px" }}
                          dangerouslySetInnerHTML={{
                            __html: GrowthStagesData.growthStagesCta[0].content,
                          }}
                        />
                        <BlackButton style={{ marginTop: "38px" }}>
                          {GrowthStagesData.growthStagesCta[0].cta.title}
                        </BlackButton>
                      </div>
                    )}

                    {slideIndex == 1 && (
                      <div className="in-in-middle">
                        <h1>{GrowthStagesData.growthStagesCta[1].heading}</h1>
                        <div
                          style={{ paddingRight: "50px" }}
                          dangerouslySetInnerHTML={{
                            __html: GrowthStagesData.growthStagesCta[1].content,
                          }}
                        />
                        <BlackButton style={{ marginTop: "38px" }}>
                          {GrowthStagesData.growthStagesCta[1].cta.title}
                        </BlackButton>
                      </div>
                    )}

                    {slideIndex == 2 && (
                      <div className="in-in-middle">
                        <h1>{GrowthStagesData.growthStagesCta[2].heading}</h1>
                        <div
                          style={{ paddingRight: "50px" }}
                          dangerouslySetInnerHTML={{
                            __html: GrowthStagesData.growthStagesCta[2].content,
                          }}
                        />
                        <BlackButton style={{ marginTop: "38px" }}>
                          {GrowthStagesData.growthStagesCta[2].cta.title}
                        </BlackButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </WrapperSM>
        )}
      </GlobalContainer>
    </GrowthStageSection>
  );
};

export default GrowthStages;
