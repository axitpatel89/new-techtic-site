import { useStaticQuery, graphql } from "gatsby";

export interface ContentLists {
  heading: string;
  content: string;
}

export const useDigitalProductTechQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          3: any;
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          contentLists: ContentLists[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalProductTechSection {
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
  const TechData = data.tsPage.flexibleContent.flexibleContent[3];

  return { TechData };
};
