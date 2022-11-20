import { useStaticQuery, graphql } from "gatsby";

export const useStaffAugmentationSliderQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          backgroundColor: string;
          needBackgroundColor: string;
          needLine: string;
          lineHeading: string;
          lineNumber: string;
          heading: string;
          content: string;
          featuredWorks: {
            title: string;
            link: string;
            caseStudyCategory: {
              nodes: {
                name: string;
                link: string;
                slug: string;
              };
            };
            featuredImage: {
              node: {
                altText: string;
                gatsbyImage: any;
              };
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryStaffAugmentationCaseStudySection {
        tsPage(slug: { eq: "staff-augmentation-guide-2021" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_FeaturedWorkSection {
                backgroundColor
                needBackgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                content
                featuredWorks {
                  ... on tsCaseStudy {
                    title
                    link
                    caseStudyCategory {
                      nodes {
                        name
                        link
                        slug
                      }
                    }
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(width: 800, layout: CONSTRAINED)
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

  const StaffAugmentationSlider =
    data.tsPage.flexibleContent.flexibleContent[2];

  return {
    StaffAugmentationSlider,
  };
};
