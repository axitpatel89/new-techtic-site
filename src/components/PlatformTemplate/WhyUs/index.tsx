import React, { useEffect, useState } from "react";
import { StyledHeadingh2 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { Div, ImageCol, WhyUsSection } from "./style";
import { AboutParagraph } from "../../Global/globalStyle";
import { BlackButton } from "../../Global/button";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import StarterModal from "../../Models/StarterModal";

const WhyUs = ({ WhyUsData }: any) => {
  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const handleLatsTalkBtn = (e: any) => {
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
      <StarterModal visible={letsTalkVisible} setVisible={setLetsTalkVisible} />
      <WhyUsSection color={WhyUsData.backgroundColor}>
        <GlobalContainer>
          <LineHeading
            title={WhyUsData.lineHeading}
            number={WhyUsData.lineNumber}
          />
          <StyledHeadingh2 maxWidth="925px" text={WhyUsData.heading} />
          <ImageCol>
            {WhyUsData.images.map((item: any, index: number) => {
              return (
                <GatsbyImage key={index} image={item.gatsbyImage} alt={item.altText} />
              );
            })}
          </ImageCol>
          <Div>
            <AboutParagraph
              dangerouslySetInnerHTML={{ __html: WhyUsData.content }}
            />
            <BlackButton onClick={handleLatsTalkBtn}>
              {WhyUsData.cta.title}
            </BlackButton>
          </Div>
        </GlobalContainer>
      </WhyUsSection>
    </>
  );
};

export default WhyUs;
