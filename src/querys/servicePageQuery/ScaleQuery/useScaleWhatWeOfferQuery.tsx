import { useStaticQuery, graphql } from "gatsby";

export const useScaleWhatWeOfferQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          gallery: { gatsbyImage: any; altText: string };
          imageOne: { gatsbyImage: any; altText: string };
          imageSecond: { gatsbyImage: any; altText: string };
          technologyLogo: { gatsbyImage: any; altText: string };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleWhatWeOffersection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_WhatWeOfferSection {
                backgroundColor
                needBackgroundColor
                lineHeading
                lineNumber
                heading
                imageOne {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 587)
                }
                imageSecond {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 610)
                }
                content
                technologyLogo {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 250)
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleWhatWeOffer = data.tsPage.flexibleContent.flexibleContent[2];
  return { ScaleWhatWeOffer };
};
