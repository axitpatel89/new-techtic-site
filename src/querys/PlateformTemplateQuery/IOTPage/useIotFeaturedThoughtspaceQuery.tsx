import { useStaticQuery, graphql } from "gatsby";

export const useIotFeaturedThoughtspaceQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          7: any;
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
                altText: string;
                gatsbyImage: any;
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
      query MyQueryIotFeaturedThoughtspaceSection {
        tsPage(slug: { eq: "internet-of-things" }) {
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

  const IotThoughtspaceData = data.tsPage.flexibleContent.flexibleContent[7];

  return {
    IotThoughtspaceData,
  };
};
