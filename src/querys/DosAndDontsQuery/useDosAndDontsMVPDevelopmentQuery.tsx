import { useStaticQuery, graphql } from "gatsby";

export const useDosAndDontsMVPDevelopmentQuery = () => {
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
      query MyQueryDosAndDontsMVPTemplateDevelopmentSection {
        tsPage(slug: { eq: "dos-and-donts-of-experience-design" }) {
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

  const DosAndDontsMVPDevelopment =
    data.tsPage.flexibleContent.flexibleContent[1];

  return {
    DosAndDontsMVPDevelopment,
  };
};
