import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  heading: string;
  content: string;
}

export const useIotFaqsQuery = () => {
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
      query MyQueryIotFAQSection {
        tsPage(slug: { eq: "internet-of-things" }) {
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

  const IotFaqsData = data.tsPage.flexibleContent.flexibleContent[6];
  return { IotFaqsData };
};
