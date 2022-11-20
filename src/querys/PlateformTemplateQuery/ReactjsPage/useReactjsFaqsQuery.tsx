import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  heading: string;
  content: string;
}

export const useReactjsFaqsQuery = () => {
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
      query MyQueryReactjsFAQSection {
        tsPage(slug: { eq: "reactjs-development-company" }) {
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

  const ReactjsFaqsData = data.tsPage.flexibleContent.flexibleContent[6];
  return { ReactjsFaqsData };
};
