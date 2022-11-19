import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export const useB2BB2CWebsitesEBookQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          7: any;
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
      query MyQueryB2BB2CWebsitesEBookSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 671)
                }
                content
                needCta
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
  const B2BB2CEBookData = data.tsPage.flexibleContent.flexibleContent[7];
  return { B2BB2CEBookData };
};
