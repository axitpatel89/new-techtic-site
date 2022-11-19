import { graphql, useStaticQuery } from "gatsby";

export const useBannerSectionQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: string;
          heading: string;
          0: any;
          pointsLists: {
            pointContent: string;
          };
          gallery: {
            altText: string;
            gatsbyImage: any;
          };
          content: string;
          cta: {
            title: string;
            target: string;
            url: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCareerBannerSection {
        tsPage(slug: { eq: "careers" }) {
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
                  gatsbyImage(layout: CONSTRAINED, width: 382)
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

  const CareersData = data.tsPage.flexibleContent.flexibleContent[0];

  return { CareersData };
};
