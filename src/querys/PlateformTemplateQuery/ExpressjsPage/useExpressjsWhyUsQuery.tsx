import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useExpressjsWhyUsQuery = () => {
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
      query MyQueryExpressjsWhyUsSection {
        tsPage(slug: { eq: "expressjs-development" }) {
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

  const ExpressjsWhayUsData = data.tsPage.flexibleContent.flexibleContent[2];

  return { ExpressjsWhayUsData };
};
