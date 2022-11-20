import { useStaticQuery, graphql } from "gatsby";

export const useCommerceToolsCoreSpecialtiesQuery = () => {
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
      query MyQueryCommerceToolsCoreSpecialtiesSection {
        tsPage(slug: { eq: "commercetools-development" }) {
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

  const CommerceToolsCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[4];

  return { CommerceToolsCoreSpecialtiesData };
};
