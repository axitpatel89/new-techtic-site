import { useStaticQuery, graphql } from "gatsby";

export interface CTAType {
  title: string;
  url: string;
  target: string;
}

export interface ContentLists {
  heading: string;
  content: string;
}

export const useDigitalCommerceTechQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          backgroundColor: string;
          heading: string;
          lineHeading: string;
          lineNumber: number;
          cta: CTAType;
          contentLists: ContentLists[];
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryDigitalCommerceTechSection {
        tsPage(slug: { eq: "digital-commerce" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingWithContentListsSection {
                needBackgroundColor
                backgroundColor
                lineHeading
                lineNumber
                heading
                showCta
                cta {
                  title
                  url
                  target
                }
                contentLists {
                  needHeading
                  heading
                  content
                  needImage
                  needCta
                  cta {
                    target
                    title
                    url
                  }
                  image {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 210)
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const DcTechData = data.tsPage.flexibleContent.flexibleContent[2];

  return { DcTechData };
};
