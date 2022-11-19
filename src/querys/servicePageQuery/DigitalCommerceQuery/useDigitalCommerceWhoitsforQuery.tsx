import { useStaticQuery, graphql } from "gatsby";

export const useDigitalCommerceWhoitsforQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          7: any;
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
      query MyQueryDigitalCommerceWhoitsforSection {
        tsPage(slug: { eq: "digital-commerce" }) {
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
  const DcWhoitsforData = data.tsPage.flexibleContent.flexibleContent[7];
  return { DcWhoitsforData };
};
