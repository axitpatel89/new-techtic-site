import { graphql, useStaticQuery } from "gatsby";

export const useCareersOpenRolesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          1: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: string;
          openRolesContents: {
            heading: string;
            positionsListing: {
              title: string;
              link: string;
              slug: string;
              careers: {
                jobLocation: string;
                experience: string;
                applyNowForThisPosition: {
                  title: string;
                  target: string;
                  url: string;
                };
              };
              content: string;
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCareersOpenRolesSection {
        tsPage(slug: { eq: "careers" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_OpenRolesSection {
                fieldGroupName
                backgroundColor
                lineHeading
                lineNumber
                openRolesContents {
                  heading
                  positionsListing {
                    ... on tsCareers {
                      title
                      link
                      slug
                      careers {
                        jobLocation
                        experience
                        applyNowForThisPosition {
                          title
                          target
                          url
                        }
                      }
                      content
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

  const CareersOpenRolesData = data.tsPage.flexibleContent.flexibleContent[1];

  return { CareersOpenRolesData };
};
