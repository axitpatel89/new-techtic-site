import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export interface ContentLists {
  heading: string;
  content: string;
}

export const useScaleEngagementModelsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          3: any;
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          cta: CTAType;
          contentLists: ContentLists[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryEngagementmodelSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingWithContentListsSection {
                needBackgroundColor
                backgroundColor
                lineHeading
                lineNumber
                heading
                showCta
                cta {
                  title
                  url
                  target
                }
                contentLists {
                  needHeading
                  heading
                  content
                  needImage
                  needCta
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleEngagementModelsData =
    data.tsPage.flexibleContent.flexibleContent[3];

  return { ScaleEngagementModelsData };
};
