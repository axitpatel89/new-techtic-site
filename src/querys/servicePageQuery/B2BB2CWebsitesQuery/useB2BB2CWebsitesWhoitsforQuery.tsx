import { useStaticQuery, graphql } from "gatsby";

export const useB2BB2CWebsitesWhoitsforQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          5: any;
          pointsLists: {
            pointContent: string;
          };
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryB2BB2CWebsitesWhoitsforSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
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
  const B2BB2CWhoitsforData = data.tsPage.flexibleContent.flexibleContent[5];
  return { B2BB2CWhoitsforData };
};
