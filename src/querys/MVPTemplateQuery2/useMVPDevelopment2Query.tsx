import { useStaticQuery, graphql } from "gatsby";

export const useMVPDevelopment2Query = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          lineHeading: string;
          heading: string;
          industriesLists: {
            logo: {
              altText: string;
              gatsbyImage: any;
            };
            title: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMvpIndustriesSection {
        tsPage(slug: { eq: "mvp-template" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_MvpIndustries {
                lineHeading
                heading
                industriesLists {
                  logo {
                    altText
                    gatsbyImage(width: 500, layout: CONSTRAINED)
                  }
                  title
                }
              }
            }
          }
        }
      }
    `
  );

  const MVPDevelopment2Data = data.tsPage.flexibleContent.flexibleContent[2];

  return {
    MVPDevelopment2Data,
  };
};
