import { useStaticQuery, graphql } from "gatsby";

export const useCareerSectionQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          content: string;
          lineNumber: number;
          3: any;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query AboutCareersSection {
        tsPage(slug: { eq: "about" }) {
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
                  gatsbyImage(layout: CONSTRAINED, width: 588)
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

  const Heading = data.tsPage.flexibleContent.flexibleContent[3].heading;
  const LineTitle = data.tsPage.flexibleContent.flexibleContent[3].lineHeading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[3].lineNumber;
  const ButtonDetails = data.tsPage.flexibleContent.flexibleContent[3].cta;
  const Image = data.tsPage.flexibleContent.flexibleContent[3].image;

  return { LineTitle, LineNumber, Heading, ButtonDetails, Image };
};
