import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  ContentCol,
  Description,
  ImageWithContentSection,
  ImgCol,
  ProcessRow,
  SubTitle,
} from "./style";

const ImageWithContent = ({ ProcessData }: any) => {
  return (
    <div>
      {ProcessData.flexibleContent?.flexibleContent?.map(
        (item: any, index: number) => {
          return (
            <ImageWithContentSection color={item.backgroundColor} key={index}>
              <GlobalContainer>
                <LineHeading
                  title={item.countTitle}
                  number={item.count}
                  color={item.textColor}
                />
                <StyledHeadingh1
                  maxWidth="1175px"
                  text={item.heading}
                  color={item.textColor}
                />
                <ProcessRow color={item.textColor}>
                  <ContentCol xs={24} sm={24} md={24} lg={11} xl={11}>
                    <div>
                      <SubTitle>{item.subHeading}</SubTitle>
                      <Description>{item.content}</Description>
                    </div>
                  </ContentCol>
                  <ImgCol xs={24} sm={24} md={24} lg={13} xl={13}>
                    <GatsbyImage
                      image={item.image?.gatsbyImage}
                      alt={item.image?.altText}
                    />
                  </ImgCol>
                </ProcessRow>
              </GlobalContainer>
            </ImageWithContentSection>
          );
        }
      )}
    </div>
  );
};

export default ImageWithContent;
