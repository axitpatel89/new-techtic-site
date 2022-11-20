import { useStaticQuery, graphql } from "gatsby";

export const useExpressjsIntroQuery = () => {
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
      query MyQueryExpressjsBannerSection {
        tsPage(slug: { eq: "expressjs-development" }) {
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

  const ExpressjsIntroData = data.tsPage.flexibleContent.flexibleContent[0];

  return { ExpressjsIntroData };
};
