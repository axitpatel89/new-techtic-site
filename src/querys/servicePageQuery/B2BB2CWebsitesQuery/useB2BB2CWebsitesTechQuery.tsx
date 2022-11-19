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

export const useB2BB2CWebsitesTechQuery = () => {
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
          image: {
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryB2BB2CWebsitesTechSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
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
                    target
                    title
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const B2BB2CTechData = data.tsPage.flexibleContent.flexibleContent[2];

  return { B2BB2CTechData };
};
