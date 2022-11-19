import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export interface contentType {
  heading: string;
  content: string;
}

export const useScaleWhoitsforQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          1: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          cta: CTAType;
          imageGallery: { gatsbyImage: any; altText: string };
          contentLists: contentType;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleWhoitsforSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingContentListsWithGallery {
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
                  needHeading
                  heading
                  content
                  needImage
                  needCta
                }
                imageGallery {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 382)
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleWhoitsfor = data.tsPage.flexibleContent.flexibleContent[1];
  return { ScaleWhoitsfor };
};
