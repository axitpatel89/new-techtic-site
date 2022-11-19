import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useWebsiteAuditQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          4: any;
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
      query MyQueryWebsiteAuditSection {
        tsPage(slug: { eq: "digital-commerce" }) {
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
  const DCWebsiteAuditData = data.tsPage.flexibleContent.flexibleContent[4];
  return { DCWebsiteAuditData };
};
