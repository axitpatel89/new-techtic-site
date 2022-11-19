import { useStaticQuery, graphql } from "gatsby";

export interface TestimonialType {
  0: any;
  node: {
    content: string;
    title: string;
    TestimonialsForCaseStudies: {
      author: string;
      company: string;
      jobTitle: string;
    };
    featuredImage: {
      node: {
        altText: string;
        gatsbyImage: any;
      };
    };
  };
}

export const useHireDeveloperModalQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          0: any;
          formHeading: string;
          testimonialsHeading: string;
          recognitionsHeading: string;
          getInTouchHeading: string;
          trustedByHeading: string;
        };
      };
    };
    ts: {
      tsOptions: {
        generaloptions: {
          trustedBy: {
            logo: {
              altText: string;
              gatsbyImage: any;
            };
          };
          recognition: {
            logo: {
              altText: string;
              gatsbyImage: any;
            };
          };
        };
      };
    };
    allTsTestimonial: {
      edges: TestimonialType;
    };
  } = useStaticQuery(
    graphql`
      query MyQueryHireDeveloper {
        tsPage(slug: { eq: "hire-a-developer" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_FormModelSection {
                formHeading
                testimonialsHeading
                recognitionsHeading
                getInTouchHeading
                trustedByHeading
              }
            }
          }
        }
        ts {
          tsOptions {
            generaloptions {
              trustedBy {
                logo {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 98)
                }
              }
              recognition {
                logo {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 112)
                }
              }
            }
          }
        }
        allTsTestimonial(limit: 1) {
          edges {
            node {
              content
              title
              TestimonialsForCaseStudies {
                author
                company
                jobTitle
              }
              featuredImage {
                node {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 100)
                }
              }
            }
          }
        }
      }
    `
  );

  const HireDeveloperModalHeadings =
    data.tsPage.flexibleContent.flexibleContent[0];
  const HireDeveloperModalData = data.ts.tsOptions.generaloptions;
  const HireDeveloperModalTestimonials = data.allTsTestimonial.edges[0];

  return {
    HireDeveloperModalHeadings,
    HireDeveloperModalData,
    HireDeveloperModalTestimonials,
  };
};
