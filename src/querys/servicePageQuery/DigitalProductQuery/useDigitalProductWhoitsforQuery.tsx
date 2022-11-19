import { useStaticQuery, graphql } from "gatsby";

export const useDigitalProductWhoitsforQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          6: any;
          pointsLists: {
            pointContent: string;
          };
          gallery: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalProductWhoitsforSection {
        tsPage(slug: { eq: "digital-products" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_AboutSection {
                lineHeading
                lineNumber
                heading
                pointsLists {
                  pointContent
                }
                gallery {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 820)
                }
                content
                cta {
                  title
                  target
                  url
                }
              }
            }
          }
        }
      }
    `
  );
  const DpWhoitsforData = data.tsPage.flexibleContent.flexibleContent[6];
  return { DpWhoitsforData };
};
