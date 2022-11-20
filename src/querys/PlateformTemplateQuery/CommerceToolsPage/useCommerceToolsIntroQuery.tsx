import { useStaticQuery, graphql } from "gatsby";

export const useCommerceToolsIntroQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          content: string;
          0: any;
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCommerceToolsBannerSection {
        tsPage(slug: { eq: "commercetools-development" }) {
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
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 1240)
                }
              }
            }
          }
        }
      }
    `
  );

  const CommerceToolsIntroData = data.tsPage.flexibleContent.flexibleContent[0];

  return { CommerceToolsIntroData };
};
