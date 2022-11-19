import { useStaticQuery, graphql } from "gatsby";

export interface ImageLists {
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
}

export const useDigitalCommerceFeaturedWorkQuery = () => {
  const data: {
    tsPage: {
      slug: string;
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          5: any;
          featuredWorks: ImageLists;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalCommerceFeaturedWorkSection {
        tsPage(slug: { eq: "digital-commerce" }) {
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
  const DcFeaturedWorkData = data.tsPage.flexibleContent.flexibleContent[5];
  return { DcFeaturedWorkData };
};
