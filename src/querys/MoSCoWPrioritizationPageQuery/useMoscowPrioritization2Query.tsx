import { useStaticQuery, graphql } from "gatsby";

export const useMoscowPrioritization2Query = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          2: any;
          heading: string;
          subHeading: string;
          content: string;
          moscowPrioritizationCtas: {
            initial: string;
            title: string;
            description: string;
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryMOSMVariedSection {
        tsPage(slug: { eq: "moscow-prioritization" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_MoscowPrioritizationVaried {
                heading
                subHeading
                content
                moscowPrioritizationCtas {
                  initial
                  title
                  description
                }
              }
            }
          }
        }
      }
    `
  );

  const MoscowPrioritization2 = data.tsPage.flexibleContent.flexibleContent[2];

  return {
    MoscowPrioritization2,
  };
};
