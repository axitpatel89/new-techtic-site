import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useUIUXWhyUsQuery = () => {
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
          images: { gatsbyImage: any; altText: string };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryUIUXWhyUsSection {
        tsPage(slug: { eq: "ui-ux-development-company" }) {
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

  const UIUXWhayUsData = data.tsPage.flexibleContent.flexibleContent[2];

  return { UIUXWhayUsData };
};
