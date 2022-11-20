import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
  heading: string;
}

export const useBigCommercePlatformCapabilitiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          3: any;
          contentLists: pointsListsType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryBigCommercePlatformCapabilitiesSection {
        tsPage(slug: { eq: "bigcommerce-development-company" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingWithContentListsSection {
                backgroundColor
                lineHeading
                lineNumber
                heading
                cta {
                  title
                  url
                  target
                }
                contentLists {
                  heading
                  content
                }
              }
            }
          }
        }
      }
    `
  );

  const BigCommercePlatformCapabilitiesData =
    data.tsPage.flexibleContent.flexibleContent[3];

  return { BigCommercePlatformCapabilitiesData };
};
