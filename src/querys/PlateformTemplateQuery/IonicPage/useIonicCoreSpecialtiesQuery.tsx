import { useStaticQuery, graphql } from "gatsby";

export const useIonicCoreSpecialtiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          4: any;
          coreSpecialtiesPages: {
            slug: string;
            title: string;
            link: string;
            featuredImage: {
              node: {
                altText: string;
                gatsbyImage: any;
              };
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryIonicCoreSpecialtiesSection {
        tsPage(slug: { eq: "ionic-app-development" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_CoreSpecialtiesSection {
                lineHeading
                lineNumber
                content
                coreSpecialtiesPages {
                  ... on tsPage {
                    slug
                    title
                    link
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 505)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const IonicCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[4];

  return { IonicCoreSpecialtiesData };
};
