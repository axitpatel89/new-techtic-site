import { useStaticQuery, graphql } from "gatsby";

export interface imageType {
  gatsbyImage: any;
  altText: string;
}

export interface CTAType {
  image: imageType;
  heading: string;
  content: string;
  cta: {
    title: string;
    url: string;
    target: string;
  };
}

export const useServicesQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          heading: string;
          content: string;
          2: any;
          servicesCta: CTAType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryServicesSection {
        tsPage(databaseId: { eq: 38 }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_ServicesSection {
                lineHeading
                lineNumber
                heading
                content
                servicesCta {
                  heading
                  content
                  cta {
                    title
                    url
                    target
                  }
                  image {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 698)
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const LineTitle = data.tsPage.flexibleContent.flexibleContent[2].lineHeading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[2].lineNumber;
  const Title = data.tsPage.flexibleContent.flexibleContent[2].heading;
  const Content = data.tsPage.flexibleContent.flexibleContent[2].content;
  const CTA: CTAType[] =
    data.tsPage.flexibleContent.flexibleContent[2].servicesCta;

  return { LineTitle, LineNumber, Title, Content, CTA };
};
