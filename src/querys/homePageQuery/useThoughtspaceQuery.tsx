import { useStaticQuery, graphql } from "gatsby";

export const useThoughtspaceQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          6: any;
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
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryThoughtspaceSection {
        tsPage(slug: { eq: "home" }) {
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
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const ThoughtspaceData = data.tsPage.flexibleContent.flexibleContent[6];

  return { ThoughtspaceData };
};
