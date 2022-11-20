import { useStaticQuery, graphql } from "gatsby";

export const useShopwareCoreSpecialtiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          heading: string;
          4: any;
          coreSpecialtiesPages: {
            slug: string;
            title: string;
            link: string;
            featuredImage: { node: { gatsbyImage: any; altText: string } };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryShopwareCoreSpecialtiesSection {
        tsPage(slug: { eq: "shopware-development" }) {
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

  const ShopwareCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[4];

  return { ShopwareCoreSpecialtiesData };
};
