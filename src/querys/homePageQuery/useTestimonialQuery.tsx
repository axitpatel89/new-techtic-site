import { useStaticQuery, graphql } from "gatsby";

export interface ImageType {
  gatsbyImage: any;
  altText: string;
}

export interface CaseStudyCategoryType {
  0: any;
  link: string;
  name: string;
}

export interface workRelationShipType {
  0: any;
  title: string;
  slug: string;
  link: string;
  featuredImage: {
    node: ImageType;
  };
  caseStudyCategory: {
    nodes: CaseStudyCategoryType[];
  };
  newCaseStudy: {
    shortContent: string;
  };
}

export interface allTsTestimonialType {
  node: {
    title: string;
    content: string;
    TestimonialsForCaseStudies: {
      author: string;
      company: string;
      jobTitle: string;
      workRelationship: workRelationShipType[];
    };
  };
}

export const useTestimonialQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          4: any;
        };
      };
    };
    allTsTestimonial: {
      edges: allTsTestimonialType[];
    };
  } = useStaticQuery(
    graphql`
      query MyQuerytestimonial {
        tsPage(slug: { eq: "home" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_TestimonialSection {
                heading
              }
            }
          }
        }
        allTsTestimonial {
          edges {
            node {
              title
              content
              TestimonialsForCaseStudies {
                author
                company
                jobTitle
                workRelationship {
                  ... on tsCaseStudy {
                    title
                    slug
                    link
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 671)
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

  const Title = data.tsPage.flexibleContent.flexibleContent[4].heading;

  const Testimonial: allTsTestimonialType[] = data.allTsTestimonial.edges;

  return { Title, Testimonial };
};
