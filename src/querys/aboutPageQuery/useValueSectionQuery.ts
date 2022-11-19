import { useStaticQuery, graphql } from "gatsby";

export const useValuesSectionQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          lineNumber: number;
          1: any;
        };
      };
    };
  } = useStaticQuery(
    graphql`
    query AboutOurValuesSection {
        tsPage(slug: {eq: "about"}) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_OurValuesSection {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                ourValueContents {
                  heading
                  content
                }
              }
            }
          }
        }
      }
    `
  );

  const LineTitle = data.tsPage.flexibleContent.flexibleContent[1].lineHeading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[1].lineNumber;
  const ValuesList = data.tsPage.flexibleContent.flexibleContent[1].ourValueContents;
  
  return { LineTitle, LineNumber , ValuesList };
};
