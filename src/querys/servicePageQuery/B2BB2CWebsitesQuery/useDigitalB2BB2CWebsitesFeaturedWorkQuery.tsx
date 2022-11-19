import { useStaticQuery, graphql } from "gatsby";

export interface ImageLists {
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
}

export const useDigitalB2BB2CWebsitesFeaturedWorkQuery = () => {
  const data: {
    tsPage: {
      slug: string;
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          3: any;
          featuredWorks: ImageLists;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryB2BB2CFeaturedWorkSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
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
  const B2BB2CFeaturedWorkData = data.tsPage.flexibleContent.flexibleContent[3];
  return { B2BB2CFeaturedWorkData };
};
