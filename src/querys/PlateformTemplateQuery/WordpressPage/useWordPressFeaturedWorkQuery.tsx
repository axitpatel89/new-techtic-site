import { useStaticQuery, graphql } from "gatsby";

export interface FeaturedWorksType {
  title: string;
  link: string;
  slug: string;
  newCaseStudy: {
    shortContent: string;
  };
  featuredImage: { node: { gatsbyImage: any; altText: string } };
  caseStudyCategory: {
    nodes: CategoryType;
  };
}

export interface CategoryType {
  link: string;
  name: string;
  slug: string;
}

export const useWordPressFeaturedWorkQuery = () => {
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
      query MyQueryWordPressFeaturedWorkSection {
        tsPage(slug: { eq: "wordpress-development-company" }) {
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

  const WordPressFeaturedWorkData =
    data.tsPage.flexibleContent.flexibleContent[5];

  return { WordPressFeaturedWorkData };
};
