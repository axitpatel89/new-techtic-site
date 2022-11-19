import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useDigitalProducteBookQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          8: any;
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
      query MyQueryDigitalProductWebsiteAuditSection {
        tsPage(slug: { eq: "digital-products" }) {
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
  const EBookData = data.tsPage.flexibleContent.flexibleContent[8];
  return { EBookData };
};
