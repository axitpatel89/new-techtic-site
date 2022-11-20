import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
}

export const useWordPressBenefitsQuery = () => {
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
      query MyQueryWordPressBenefitSection {
        tsPage(slug: { eq: "wordpress-development-company" }) {
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

  const WordPressBenefitsData = data.tsPage.flexibleContent.flexibleContent[1];
  return { WordPressBenefitsData };
};
