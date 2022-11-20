import { useStaticQuery, graphql } from "gatsby";

export interface FeaturedWorksType {
  title: string;
  link: string;
  slug: string;
  newCaseStudy: {
    shortContent: string;
  };
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
  caseStudyCategory: {
    nodes: CategoryType;
  };
}

export interface CategoryType {
  link: string;
  name: string;
  slug: string;
}

export const useCommerceToolsFeaturedWorkQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          5: any;
          featuredWorks: FeaturedWorksType;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCommerceToolsFeaturedWorkSection {
        tsPage(slug: { eq: "commercetools-development" }) {
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

  const CommerceToolsFeaturedWorkData =
    data.tsPage.flexibleContent.flexibleContent[5];

  return { CommerceToolsFeaturedWorkData };
};
