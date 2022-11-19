import { graphql, useStaticQuery } from "gatsby";

export const useCareersBenefitsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: string;
          benefitsContents: {
            heading: string;
            image: {
              altText: string;
              gatsbyImage: any;
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCareersBenefitsSection {
        tsPage(slug: { eq: "careers" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_BenefitsSection {
                backgroundColor
                lineHeading
                lineNumber
                benefitsContents {
                  heading
                  image {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 71)
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const CareersBenefitsData = data.tsPage.flexibleContent.flexibleContent[2];

  return { CareersBenefitsData };
};
