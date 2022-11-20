import { useStaticQuery, graphql } from "gatsby";

export const useTravelCoreSpecialtiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          4: any;
          coreSpecialtiesPages: {
            slug: string;
            title: string;
            link: string;
            featuredImage: { node: { gatsbyImage: any; altText: string } };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryTravelCoreSpecialtiesSection {
        tsPage(slug: { eq: "travel" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_CoreSpecialtiesSection {
                lineHeading
                lineNumber
                content
                coreSpecialtiesPages {
                  ... on tsPage {
                    slug
                    title
                    link
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 505)
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

  const TravelCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[4];

  return { TravelCoreSpecialtiesData };
};
