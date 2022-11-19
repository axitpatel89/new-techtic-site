import { useStaticQuery, graphql } from "gatsby";

export const useProcessPageQuery = () => {
  const data: {
    tsPage: {
      content: string;
      title: string;
      flexibleContent: {
        flexibleContent: {
          countTitle: string;
          count: string;
          backgroundColor: string;
          textColor: string;
          heading: string;
          subHeading: string;
          content: string;
          image: {
            altText: string;
            gatsbyImage: any;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryProcessPage {
        tsPage(slug: { eq: "process" }) {
          content
          title
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_Process {
                countTitle
                count
                backgroundColor
                textColor
                heading
                subHeading
                content
                image {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 1000)
                }
              }
            }
          }
        }
      }
    `
  );

  const ProcessPageData = data.tsPage;
  return { ProcessPageData };
};
