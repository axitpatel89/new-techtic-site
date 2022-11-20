import { useStaticQuery, graphql } from "gatsby";

export const useMVPDevelopmentQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          1: any;
          lineHeading: string;
          heading: string;
          content: string;
          cta: {
            title: string;
            url: string;
            target: string;
          };
          technologyIcons: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMVPDevelopmentSection {
        tsPage(slug: { eq: "mvp-template" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_MvpDevelopment {
                lineHeading
                heading
                content
                cta {
                  title
                  url
                  target
                }
                technologyIcons {
                  altText
                  gatsbyImage(width: 500, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    `
  );

  const MVPDevelopmentData = data.tsPage.flexibleContent.flexibleContent[1];

  return {
    MVPDevelopmentData,
  };
};
