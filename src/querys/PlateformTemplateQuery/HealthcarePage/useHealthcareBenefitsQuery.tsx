import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
}

export const useHealthcareBenefitsQuery = () => {
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
      query MyQueryHealthcareBenefitSection {
        tsPage(slug: { eq: "healthcare" }) {
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

  const HealthcareBenefitsData = data.tsPage.flexibleContent.flexibleContent[1];
  return { HealthcareBenefitsData };
};
