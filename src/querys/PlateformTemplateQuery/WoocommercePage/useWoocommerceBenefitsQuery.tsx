import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
}

export const useWoocommerceBenefitsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          1: any;
          contentLists: pointsListsType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryWoocommerceBenefitSection {
        tsPage(slug: { eq: "woocommerce-development" }) {
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

  const WoocommerceBenefitsData = data.tsPage.flexibleContent.flexibleContent[1];
  return { WoocommerceBenefitsData };
};
