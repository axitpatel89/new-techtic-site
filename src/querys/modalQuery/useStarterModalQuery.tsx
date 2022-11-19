import { useStaticQuery, graphql } from "gatsby";

export interface ImageType {
  altText: string;
  gatsbyImage: any;
}

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
      node: ImageType;
    };
  };
}

export const useStarterModalQuery = () => {
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
            logo: ImageType[];
          };
          recognition: {
            logo: ImageType[];
          };
        };
      };
    };
    allTsTestimonial: {
      edges: TestimonialType;
    };
  } = useStaticQuery(
    graphql`
      query MyQueryProjectStartup {
        tsPage(slug: { eq: "start-your-project-startup" }) {
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

  const StarterModalHeadings = data.tsPage.flexibleContent.flexibleContent[0];
  const StarterModalData = data.ts.tsOptions.generaloptions;
  const StarterModalTestimonials = data.allTsTestimonial.edges[0];

  return { StarterModalHeadings, StarterModalData, StarterModalTestimonials };
};
