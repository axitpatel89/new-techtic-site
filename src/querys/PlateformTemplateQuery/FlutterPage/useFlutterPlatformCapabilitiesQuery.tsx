import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
  heading: string;
}

export const useFlutterPlatformCapabilitiesQuery = () => {
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
      query MyQueryFlutterPlatformCapabilitesSection {
        tsPage(slug: { eq: "flutter-app-development" }) {
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

  const FlutterPlatformCapabilitiesData =
    data.tsPage.flexibleContent.flexibleContent[3];

  return { FlutterPlatformCapabilitiesData };
};
