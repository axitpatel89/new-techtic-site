import { useStaticQuery, graphql } from "gatsby";

export interface ImageLists {
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
}

export const useScaleFeaturedWorkQuery = () => {
  const data: {
    tsPage: {
      slug: string;
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          7: any;
          featuredWorks: ImageLists;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleFeaturedWorkSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_FeaturedWorkSection {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                featuredWorks {
                  ... on tsCaseStudy {
                    title
                    link
                    slug
                    newCaseStudy {
                      shortContent
                    }
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 710)
                      }
                    }
                    caseStudyCategory {
                      nodes {
                        link
                        name
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
  const ScaleFeaturedWorkData = data.tsPage.flexibleContent.flexibleContent[7];
  return { ScaleFeaturedWorkData };
};
