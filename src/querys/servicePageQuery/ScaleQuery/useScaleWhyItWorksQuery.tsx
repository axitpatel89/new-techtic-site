import { useStaticQuery, graphql } from "gatsby";

export const useScaleWhyItWorksQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          4: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          gallery: { gatsbyImage: any; altText: string };
          pointsLists: {
            pointContent: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleWhyItWorksSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_AboutSection {
                lineHeading
                lineNumber
                heading
                content
                pointsLists {
                  pointContent
                }
                gallery {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 820)
                }
                cta {
                  target
                  title
                  url
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleWhyItWorks = data.tsPage.flexibleContent.flexibleContent[4];
  return { ScaleWhyItWorks };
};
