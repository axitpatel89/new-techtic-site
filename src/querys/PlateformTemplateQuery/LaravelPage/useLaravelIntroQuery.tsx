import { useStaticQuery, graphql } from "gatsby";

export const useLaravelIntroQuery = () => {
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
      query MyQueryLaravelBannerSection {
        tsPage(slug: { eq: "laravel-development-company" }) {
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

  const LaravelIntroData = data.tsPage.flexibleContent.flexibleContent[0];

  return { LaravelIntroData };
};
