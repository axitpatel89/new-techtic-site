import { useStaticQuery, graphql } from "gatsby";

export interface ImageLists {
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
}

export const useDigitalProductFeaturedWorkQuery = () => {
  const data: {
    tsPage: {
      slug: string;
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          4: any;
          featuredWorks: ImageLists;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalProductFeaturedWorkSection {
        tsPage(slug: { eq: "digital-products" }) {
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
  const DpFeaturedWorkData = data.tsPage.flexibleContent.flexibleContent[4];
  return { DpFeaturedWorkData };
};
