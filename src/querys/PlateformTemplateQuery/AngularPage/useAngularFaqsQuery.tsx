import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  heading: string;
  content: string;
}

export const useAngularFaqsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          6: any;
          contentLists: pointsListsType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryAngularFAQSection {
        tsPage(slug: { eq: "angular-development-company" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingWithContentListsSection {
                lineHeading
                lineNumber
                heading
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

  const AngularFaqsData = data.tsPage.flexibleContent.flexibleContent[6];
  return { AngularFaqsData };
};
