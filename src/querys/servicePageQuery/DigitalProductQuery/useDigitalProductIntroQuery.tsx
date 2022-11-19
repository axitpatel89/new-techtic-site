import { useStaticQuery, graphql } from "gatsby";

export interface MenuTypes {
  label: string;
  id: string;
  url: string;
}

export const useDigitalProductIntroQuery = () => {
  const data: {
    tsMenu: {
      menuItems: {
        nodes: MenuTypes[];
      };
    };
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          backgroundColor: string;
          heading: string;
          content: string;
          0: any;
          image: {
            gatsbyImage: any;
            altText: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalProductBannerSection {
        tsMenu(name: { eq: "Services Menu" }) {
          menuItems {
            nodes {
              label
              id
              url
            }
          }
        }
        tsPage(slug: { eq: "digital-products" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 1240)
                }
                content
                needCta
                cta {
                  title
                  url
                  target
                }
              }
            }
          }
        }
      }
    `
  );

  const digitalProductData = data.tsPage.flexibleContent.flexibleContent[0];

  const ServiceMenu: MenuTypes[] = data.tsMenu.menuItems.nodes;

  return {
    digitalProductData,
    ServiceMenu,
  };
};
