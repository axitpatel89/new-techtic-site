import { useStaticQuery, graphql } from "gatsby";

export interface CaseStudyType {
  title: string;
  link: string;
  slug: string;
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
  caseStudyCategory: {
    nodes: {
      link: string;
      name: string;
    };
  };
  newCaseStudy: {
    shortContent: string;
  };
}

export const useWorkQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: string;
          heading: string;
          3: any;
          content: string;
          cta: {
            title: string;
            url: string;
            target: string;
          };
          images: { gatsbyImage: any; altText: string };
          caseStudy: CaseStudyType;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryWorksSection {
        tsPage(slug: { eq: "home" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_WorkSection {
                lineHeading
                lineNumber
                heading
                content
                cta {
                  title
                  url
                  target
                }
                images {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 820)
                }
                caseStudy {
                  ... on tsCaseStudy {
                    title
                    link
                    slug
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 647)
                      }
                    }
                    caseStudyCategory {
                      nodes {
                        link
                        name
                      }
                    }
                    newCaseStudy {
                      shortContent
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

  const WorkData = data.tsPage.flexibleContent.flexibleContent[3];

  return { WorkData };
};
