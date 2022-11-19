import { useStaticQuery, graphql } from "gatsby";

export const useB2BB2CWebsitesFeturedThoughtspaceQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          8: any;
          cta: {
            title: string;
            url: string;
            target: string;
          };
          relatedPosts: {
            title: string;
            slug: string;
            link: string;
            featuredImage: {
              node: {
                gatsbyImage: any;
                altText: string;
              };
            };
            categories: {
              nodes: {
                name: string;
                link: string;
                slug: string;
              };
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryB2BB2CWebsitesFeaturedThoughtspaceSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_ThoughtspaceSection {
                lineHeading
                lineNumber
                heading
                content
                cta {
                  title
                  target
                  url
                }
                relatedPosts {
                  ... on tsPost {
                    title
                    slug
                    link
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 610)
                      }
                    }
                    categories {
                      nodes {
                        name
                        link
                        slug
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

  const B2BB2CThoughtspaceData = data.tsPage.flexibleContent.flexibleContent[8];

  return {
    B2BB2CThoughtspaceData,
  };
};
