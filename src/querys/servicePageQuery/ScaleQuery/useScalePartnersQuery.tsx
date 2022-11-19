import { useStaticQuery, graphql } from "gatsby";

export interface LogoType {
  altText: string;
  gatsbyImage: any;
}

export const useScalePartnersQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          5: any;
          backgroundColor: string;
          lineHeading: string;
          lineNumber: number;
          partnersLogo: LogoType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryScalePartnersSection {
        tsPage(slug: { eq: "scale" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_PartnersSection {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                partnersLogo {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 121)
                }
              }
            }
          }
        }
      }
    `
  );
  const ScalePartners = data.tsPage.flexibleContent.flexibleContent[5];
  return { ScalePartners };
};
