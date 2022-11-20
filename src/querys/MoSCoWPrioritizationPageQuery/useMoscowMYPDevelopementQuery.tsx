import { useStaticQuery, graphql } from "gatsby";

export const useMoscowMYPDevelopementQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          4: any;
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
      query MyQueryMoscowMVPDevelopmentSection {
        tsPage(slug: { eq: "moscow-prioritization" }) {
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

  const MoscowMVPDevelopment = data.tsPage.flexibleContent.flexibleContent[4];

  return {
    MoscowMVPDevelopment,
  };
};
