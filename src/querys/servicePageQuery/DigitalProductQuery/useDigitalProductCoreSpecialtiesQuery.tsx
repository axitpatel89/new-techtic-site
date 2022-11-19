import { useStaticQuery, graphql } from "gatsby";

export interface coreSpecialties {
  slug: string;
  title: string;
  link: string;
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
}

export const useDigitalProductCoreSpecialtiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          7: any;
          content: string;
          lineHeading: string;
          lineNumber: number;
          coreSpecialtiesPages: coreSpecialties[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalProductCoreSpecialtiesSection {
        tsPage(slug: { eq: "digital-products" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_CoreSpecialtiesSection {
                lineHeading
                lineNumber
                content
                coreSpecialtiesPages {
                  ... on tsPage {
                    slug
                    title
                    link
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 505)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const DpCoreSpecialtiesData = data.tsPage.flexibleContent.flexibleContent[7];

  return { DpCoreSpecialtiesData };
};
