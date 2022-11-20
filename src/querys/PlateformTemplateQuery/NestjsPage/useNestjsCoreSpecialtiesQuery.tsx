import { useStaticQuery, graphql } from "gatsby";

export const useNestjsCoreSpecialtiesQuery = () => {
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
            featuredImage: { node: { gatsbyImage: any;  altText: string; } };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryNestjsCoreSpecialtiesSection {
        tsPage(slug: { eq: "nestjs-development-company" }) {
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

  const NestjsCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[4];

  return { NestjsCoreSpecialtiesData };
};
