import { graphql, useStaticQuery } from "gatsby";

export const useCareersLocationsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          3: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: string;
          heading: string;
          locationContents: {
            location: string;
            address: string;
          };
          locationImages: {
            image: {
              altText: string;
              gatsbyImage: any;
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryLocationSection {
        tsPage(slug: { eq: "careers" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_LocationSection {
                backgroundColor
                lineHeading
                lineNumber
                heading
                locationContents {
                  location
                  address
                }
                locationImages {
                  images {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 510)
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const CareersLocationsData = data.tsPage.flexibleContent.flexibleContent[3];

  return { CareersLocationsData };
};
