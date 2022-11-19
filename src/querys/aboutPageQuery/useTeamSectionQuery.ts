import { useStaticQuery, graphql } from "gatsby";

export const useTeamSectionQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          content: string;
          lineNumber: number;
          2: any;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query AboutTeamSection {
        tsPage(slug: { eq: "about" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_TeamSection {
                needBackgroundColor
                backgroundColor
                needLine
                lineHeading
                lineNumber
                heading
                content
                teamMembers {
                  ... on tsTeam {
                    title
                    content
                    link
                    team {
                      designation
                    }
                    featuredImage {
                      node {
                        altText
                        gatsbyImage(layout: CONSTRAINED, width: 380)
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

  const Heading = data.tsPage.flexibleContent.flexibleContent[2].heading;
  const LineTitle = data.tsPage.flexibleContent.flexibleContent[2].lineHeading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[2].lineNumber;
  const Images = data.tsPage.flexibleContent.flexibleContent[2].teamMembers;
  const Content = data.tsPage.flexibleContent.flexibleContent[2].content;

  return { LineTitle, LineNumber, Images, Heading, Content };
};
