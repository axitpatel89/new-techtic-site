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

export const useB2BB2CWebsitesPlanProjectQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          4: any;
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
      query MyQueryB2BB2CWebsitesPlanaProjectSection {
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
                }
              }
            }
          }
        }
      }
    `
  );
  const B2BB2CPlanProjectData = data.tsPage.flexibleContent.flexibleContent[4];

  return { B2BB2CPlanProjectData };
};
