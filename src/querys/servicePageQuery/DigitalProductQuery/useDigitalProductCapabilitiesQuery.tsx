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

export const useDigitalProductCapabilitiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
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
      query DigitalProductsCapabilitiesSection {
        tsPage(slug: { eq: "digital-products" }) {
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
  const DpCapabilitiesData = data.tsPage.flexibleContent.flexibleContent[2];
  return { DpCapabilitiesData };
};
