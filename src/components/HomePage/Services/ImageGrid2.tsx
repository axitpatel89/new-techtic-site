import React from "react";
import { SecondaryButton } from "../../Global/button";
import {
  ImageBox,
  ImageBoxRight,
  ImageCont,
  ImageContRight,
  ServicesParagraph,
  DigitalComContent,
  DigitalProdContent,
  B2BContent,
  ScaleContent,
  Content,
} from "./style";
import { useServicesQuery } from "../../../querys/homePageQuery/useServicesQuery";
import { StyledHeadingh4 } from "../../Global/headings";
import { navigate } from "gatsby";
import theme from "../../../theme";
import { GatsbyImage } from "gatsby-plugin-image";

const ImageGrid2 = () => {
  const { CTA } = useServicesQuery();

  const handleDigitlCommBtn = (e: any) => {
    navigate(CTA[0].cta.url);
  };
  const handleDigitlProductBtn = (e: any) => {
    navigate(CTA[1].cta.url);
  };
  const handleB2BBtn = (e: any) => {
    navigate(CTA[2].cta.url);
  };
  const handleScaleBtn = (e: any) => {
    navigate(CTA[3].cta.url);
  };

  return (
    <>
      <ImageBox>
        <ImageCont>
          <GatsbyImage
            image={CTA[0].image.gatsbyImage}
            alt={CTA[0].image.altText}
          />
        </ImageCont>
        <DigitalComContent>
          <Content>
            <StyledHeadingh4 color={theme.white} text={CTA[0].heading} />
            <ServicesParagraph
              dangerouslySetInnerHTML={{ __html: CTA[0].content }}
            />
            <SecondaryButton onClick={handleDigitlCommBtn}>
              {CTA[0].cta.title}
            </SecondaryButton>
          </Content>
        </DigitalComContent>
      </ImageBox>

      <ImageBoxRight>
        <ImageContRight>
          <GatsbyImage
            image={CTA[1].image.gatsbyImage}
            alt={CTA[1].image.altText}
          />
        </ImageContRight>
        <DigitalProdContent>
          <Content>
            <StyledHeadingh4 color={theme.white} text={CTA[1].heading} />
            <ServicesParagraph
              dangerouslySetInnerHTML={{ __html: CTA[1].content }}
            />
            <SecondaryButton onClick={handleDigitlProductBtn}>
              {CTA[1].cta.title}
            </SecondaryButton>
          </Content>
        </DigitalProdContent>
      </ImageBoxRight>

      <ImageBox>
        <ImageCont>
          <GatsbyImage
            image={CTA[2].image.gatsbyImage}
            alt={CTA[2].image.altText}
          />
        </ImageCont>
        <B2BContent>
          <Content>
            <StyledHeadingh4 color={theme.white} text={CTA[2].heading} />
            <ServicesParagraph
              dangerouslySetInnerHTML={{ __html: CTA[2].content }}
            />
            <SecondaryButton onClick={handleB2BBtn}>
              {CTA[2].cta.title}
            </SecondaryButton>
          </Content>
        </B2BContent>
      </ImageBox>

      <ImageBoxRight>
        <ImageContRight>
          <GatsbyImage
            image={CTA[3].image.gatsbyImage}
            alt={CTA[3].image.altText}
          />
        </ImageContRight>
        <ScaleContent>
          <Content>
            <StyledHeadingh4 color={theme.white} text={CTA[3].heading} />
            <ServicesParagraph
              dangerouslySetInnerHTML={{ __html: CTA[3].content }}
            />
            <SecondaryButton onClick={handleScaleBtn}>
              {CTA[3].cta.title}
            </SecondaryButton>
          </Content>
        </ScaleContent>
      </ImageBoxRight>
    </>
  );
};

export default ImageGrid2;
