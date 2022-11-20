import { useStaticQuery, graphql } from "gatsby";

export const useMoscowIntroQuery = () => {
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
      query MyQueryMOSBannerSection {
        tsPage(slug: { eq: "moscow-prioritization" }) {
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

  const MoscowBanner = data.tsPage.flexibleContent.flexibleContent[0];

  return {
    MoscowBanner,
  };
};
