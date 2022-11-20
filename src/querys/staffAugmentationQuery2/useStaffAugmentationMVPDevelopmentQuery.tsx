import { useStaticQuery, graphql } from "gatsby";

export const useStaffAugmentationMVPDevelopmentQuery = () => {
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
      query MyQueryStaffAugmentationMVPTemplateDevelopmentSection {
        tsPage(slug: { eq: "staff-augmentation-guide-2021" }) {
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

  const StaffAugmentationMVPDevelopment =
    data.tsPage.flexibleContent.flexibleContent[1];

  return {
    StaffAugmentationMVPDevelopment,
  };
};
