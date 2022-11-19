import { useStaticQuery, graphql } from "gatsby";

export interface ContentLists {
  heading: string;
  content: string;
}

export const useTypeOfCommerceQuery = () => {
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
      query MyQueryTypesofCommerceSection {
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
  const DCTypeOfCommerceData = data.tsPage.flexibleContent.flexibleContent[3];

  return { DCTypeOfCommerceData };
};
