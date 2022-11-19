import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useScaleTrialQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          8: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;

          cta: CTAType;
          image: { gatsbyImage: any; altText: string };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleTrialSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                content
                needCta
                cta {
                  title
                  url
                  target
                }
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 671)
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleTrial = data.tsPage.flexibleContent.flexibleContent[8];
  return { ScaleTrial };
};
