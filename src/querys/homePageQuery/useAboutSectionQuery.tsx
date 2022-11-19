import { useStaticQuery, graphql } from "gatsby";

export interface pointsListsType {
  pointContent: string;
  1: any;
}
export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useAboutSectionQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          1: any;
          pointsLists: pointsListsType[];
          cta: CTAType[];
          gallery: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryAboutSection {
        tsPage(databaseId: { eq: 38 }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_AboutSection {
                lineHeading
                lineNumber
                heading
                content
                pointsLists {
                  pointContent
                }
                gallery {
                  altText
                  gatsbyImage(width: 332, layout: CONSTRAINED)
                }
                cta {
                  title
                  url
                  target
                }
              }
            }
          }
        }
      }
    `
  );
  const LineTitle = data.tsPage.flexibleContent.flexibleContent[1].lineHeading;

  const LineNumber = data.tsPage.flexibleContent.flexibleContent[1].lineNumber;

  const Title = data.tsPage.flexibleContent.flexibleContent[1].heading;

  const Points: pointsListsType[] =
    data.tsPage.flexibleContent.flexibleContent[1].pointsLists;

  const Content = data.tsPage.flexibleContent.flexibleContent[1].content;

  const CTA: CTAType = data.tsPage.flexibleContent.flexibleContent[1].cta;

  const Gallery = data.tsPage.flexibleContent.flexibleContent[1].gallery;

  return {
    LineTitle,
    LineNumber,
    Title,
    Points,
    Content,
    CTA,
    Gallery,
  };
};
