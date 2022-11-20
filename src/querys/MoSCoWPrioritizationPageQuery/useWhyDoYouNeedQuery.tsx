import { useStaticQuery, graphql } from "gatsby";

export const useWhyDoYouNeedQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          3: any;
          backgroundColor: string;
          lineHeading: string;
          heading: string;
          subHeading: string;
          content: string;
          contentsLists: string;
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMOSMoscowWhyDoYouNeedSection {
        tsPage(slug: { eq: "moscow-prioritization" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                heading
                content
                image {
                  altText
                  gatsbyImage(width: 1000, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    `
  );

  const WhyDoYouNeedData = data.tsPage.flexibleContent.flexibleContent[3];

  return {
    WhyDoYouNeedData,
  };
};
