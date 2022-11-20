import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  content: string;
  heading: string;
}

export const useUIUXPlatformCapabilitiesQuery = () => {
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
      query MyQueryUIUXBenefitsSection {
        tsPage(slug: { eq: "ui-ux-development-company" }) {
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

  const UIUXPlatformCapabilitiesData =
    data.tsPage.flexibleContent.flexibleContent[3];

  return { UIUXPlatformCapabilitiesData };
};
