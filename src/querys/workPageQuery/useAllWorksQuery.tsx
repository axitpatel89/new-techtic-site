import { useStaticQuery, graphql } from "gatsby";

export interface WorksType {
  node: {
    title: string;
    link: string;
    slug: string;
    newCaseStudy: {
      shortContent: string;
      detailPageImage: {
        gatsbyImage: any;
      };
    };
    featuredImage: {
      node: {
        gatsbyImage: any;
        altText: string;
      };
    };
    portfolio: {
      listingPage: {
        gatsbyImage: any;
      };
    };
    caseStudyCategory: {
      nodes: {
        name: string;
        link: string;
        wpParent: {
          node: {
            name: string;
          };
        };
      };
    };
  };
}

export const useAllWorksQuery = () => {
  const data: {
    allTsCaseStudy: {
      edges: WorksType[];
    };
  } = useStaticQuery(
    graphql`
      query MyQueryallCaseStudyPage {
        allTsCaseStudy(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              title
              link
              slug
              newCaseStudy {
                shortContent
                detailPageImage {
                  altText
                  gatsbyImage(width: 600, layout: CONSTRAINED)
                }
              }
              featuredImage {
                node {
                  altText
                  gatsbyImage(width: 600, layout: CONSTRAINED)
                  altText
                }
              }
              portfolio {
                listingPage {
                  altText
                  gatsbyImage(width: 600, layout: CONSTRAINED)
                }
              }
              caseStudyCategory {
                nodes {
                  link
                  name
                  slug
                  wpParent {
                    node {
                      name
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
  const AllWorks: WorksType[] = data.allTsCaseStudy.edges;
  return { AllWorks };
};
