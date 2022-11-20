import { useStaticQuery, graphql } from "gatsby";

export const useStaffAugmentationBannerQuery = () => {
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
      query MyQueryStaffAugmentationMVPTemplateBannerSection {
        tsPage(slug: { eq: "staff-augmentation-guide-2021" }) {
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

  const StaffAugmentationBanner =
    data.tsPage.flexibleContent.flexibleContent[0];

  return {
    StaffAugmentationBanner,
  };
};
