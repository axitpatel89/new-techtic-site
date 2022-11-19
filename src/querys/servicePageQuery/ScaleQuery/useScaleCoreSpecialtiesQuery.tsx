import { useStaticQuery, graphql } from "gatsby";

export interface coreSpecialties {
  slug: string;
  title: string;
  link: string;
  featuredImage: {
    node: {
      gatsbyImage: any;
      altText: string;
    };
  };
}

export const useScaleCoreSpecialtiesQuery = () => {
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
      query MyQueryScaleCoreSpecialtiesSection {
        tsPage(slug: { eq: "scale" }) {
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
  const ScaleCoreSpecialtiesData =
    data.tsPage.flexibleContent.flexibleContent[6];

  return { ScaleCoreSpecialtiesData };
};
