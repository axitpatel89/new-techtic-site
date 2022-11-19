import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useScaleEBookQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          9: any;
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          content: string;
          cta: CTAType;
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScaleEBookSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                content
                needCta
                cta {
                  title
                  url
                  target
                }
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 671)
                }
              }
            }
          }
        }
      }
    `
  );
  const ScaleEBookData = data.tsPage.flexibleContent.flexibleContent[9];
  return { ScaleEBookData };
};
