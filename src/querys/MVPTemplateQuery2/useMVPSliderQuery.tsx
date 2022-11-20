import { useStaticQuery, graphql } from "gatsby";

export const useMVPSliderQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          3: any;
          backgroundColor: string;
          needBackgroundColor: string;
          needLine: string;
          lineHeading: string;
          lineNumber: string;
          heading: string;
          featuredWorks: {
            title: string;
            link: string;
            caseStudyCategory: {
              nodes: {
                name: string;
                link: string;
                slug: string;
              };
            };
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
      query MyQueryMVPSliderSection {
        tsPage(slug: { eq: "mvp-template" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_FeaturedWorkSection {
                backgroundColor
                needBackgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                content
                featuredWorks {
                  ... on tsCaseStudy {
                    title
                    link
                    caseStudyCategory {
                      nodes {
                        name
                        link
                        slug
                      }
                    }
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(width: 600, layout: CONSTRAINED)
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

  const MVPSliderData = data.tsPage.flexibleContent.flexibleContent[3];

  return {
    MVPSliderData,
  };
};
