import { useStaticQuery, graphql } from "gatsby";

export const useDosAndDontsBannerQuery = () => {
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
      query MyQueryDosAndDontsMVPTemplateBannerSection {
        tsPage(slug: { eq: "dos-and-donts-of-experience-design" }) {
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

  const DosAndDontsBanner =
    data.tsPage.flexibleContent.flexibleContent[0];

  return {
    DosAndDontsBanner,
  };
};
