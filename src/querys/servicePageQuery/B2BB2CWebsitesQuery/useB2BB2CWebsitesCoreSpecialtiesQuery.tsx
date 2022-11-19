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

export const useB2BB2CWebsitesCoreSpecialtiesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          6: any;
          content: string;
          lineHeading: string;
          lineNumber: number;
          coreSpecialtiesPages: coreSpecialties[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryB2BB2CWebsitesCoreSpecialtiesSection {
        tsPage(slug: { eq: "b2b-and-b2c-websites" }) {
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
  const B2BB2CCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[6];

  return { B2BB2CCoreSpecialtiesData };
};
