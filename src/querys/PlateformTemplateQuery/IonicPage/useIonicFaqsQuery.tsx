import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  heading: string;
  content: string;
}

export const useIonicFaqsQuery = () => {
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
      query MyQueryIonicFAQSection {
        tsPage(slug: { eq: "ionic-app-development" }) {
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

  const IonicFaqsData = data.tsPage.flexibleContent.flexibleContent[6];
  return { IonicFaqsData };
};
