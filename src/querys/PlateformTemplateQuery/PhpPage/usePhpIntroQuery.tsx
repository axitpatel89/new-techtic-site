import { useStaticQuery, graphql } from "gatsby";

export const usePhpIntroQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          content: string;
          0: any;
          image: { gatsbyImage: any; altText: string };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryPhpBannerSection {
        tsPage(slug: { eq: "php-development-company" }) {
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

  const PhpIntroData = data.tsPage.flexibleContent.flexibleContent[0];

  return { PhpIntroData };
};
