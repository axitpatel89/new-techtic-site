import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useCrossPlatformAppWhyUsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          2: any;
          content: string;
          cta: CTAType;
          images: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCrossPlatformAppWhyUsSection {
        tsPage(slug: { eq: "cross-platform-app-development" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_WorkSection {
                lineHeading
                lineNumber
                heading
                images {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 820)
                }
                content
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

  const CrossPlatformAppWhayUsData =
    data.tsPage.flexibleContent.flexibleContent[2];

  return { CrossPlatformAppWhayUsData };
};
