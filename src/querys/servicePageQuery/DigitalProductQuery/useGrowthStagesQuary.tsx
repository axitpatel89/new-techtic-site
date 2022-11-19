import { useStaticQuery, graphql } from "gatsby";

export const useGrowthStagesQuary = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          1: any;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          growthStagesCta: {
            heading: string;
            content: string;
            cta: {
              target: string;
              title: string;
              url: string;
            };
            image: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryGrowthstagesSection {
        tsPage(slug: { eq: "digital-products" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_GrowthStages {
                lineHeading
                lineNumber
                heading
                growthStagesCta {
                  heading
                  content
                  cta {
                    target
                    title
                    url
                  }
                  image
                }
              }
            }
          }
        }
      }
    `
  );
  const GrowthStagesData = data.tsPage.flexibleContent.flexibleContent[1];

  return { GrowthStagesData };
};
