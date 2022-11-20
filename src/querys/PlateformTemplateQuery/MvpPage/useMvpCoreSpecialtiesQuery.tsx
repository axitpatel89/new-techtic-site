import { useStaticQuery, graphql } from "gatsby";

export const useMvpCoreSpecialtiesQuery = () => {
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
            featuredImage: { node: { gatsbyImage: any; altText: string } };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMvpCoreSpecialtiesSection {
        tsPage(slug: { eq: "mvp-development" }) {
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

  const MvpCoreSpecialtiesData = data.tsPage.flexibleContent.flexibleContent[4];

  return { MvpCoreSpecialtiesData };
};
