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

export const useDigitalCommercePlanProjectQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          6: any;
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
      query MyQueryDigitalCommercePlanaProjectSection {
        tsPage(slug: { eq: "digital-commerce" }) {
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
                  cta {
                    title
                    url
                    target
                  }
                  image {
                    gatsbyImage(width: 600, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const DcPlanProjectData = data.tsPage.flexibleContent.flexibleContent[6];

  return { DcPlanProjectData };
};
