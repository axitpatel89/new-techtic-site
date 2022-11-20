import { useStaticQuery, graphql } from "gatsby";

export const useMVPBannerQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          0: any;
          heading: string;
          subHeading: string;
          content: string;
          contentsLists: string;
          formSection: {
            formTitle: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMVPMVPTemplateBannerSection {
        tsPage(slug: { eq: "mvp-template" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_MvpPagesBanner {
                heading
                subHeading
                content
                contentsLists
                formSection {
                  formTitle
                }
              }
            }
          }
        }
      }
    `
  );

  const MVPBanner =
    data.tsPage.flexibleContent.flexibleContent[0];

  return {
    MVPBanner,
  };
};
