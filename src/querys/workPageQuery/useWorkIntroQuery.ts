import { useStaticQuery, graphql } from "gatsby";

export const useWorkIntroQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          lineNumber: number;
          0: any;
          image: {
            gatsbyImage: any;
          }
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query WorkMyQueryBannerSection {
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
                  gatsbyImage(width: 1000, layout: CONSTRAINED)
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

  const heading = data.tsPage.flexibleContent.flexibleContent[0].heading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[0].lineNumber;
  const backgroundColor =
    data.tsPage.flexibleContent.flexibleContent[0].backgroundColor;
  const image = data.tsPage.flexibleContent.flexibleContent[0].image;
  const content = data.tsPage.flexibleContent.flexibleContent[0].content;

  return { heading, LineNumber, backgroundColor, image, content };
};
