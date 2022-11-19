import { useStaticQuery, graphql } from "gatsby";

export interface informationCountsType {
  heading: string;
  content: string;
  counts: number;
}

export const useAccomplishmentsQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          lineHeading: string;
          lineNumber: number;
          companySnapshotHeading: string;
          5: any;
          informationCounts: informationCountsType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryAccomplishments {
        tsPage(databaseId: { eq: 38 }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_OurAccomplishmentsSection {
                lineHeading
                lineNumber
                companySnapshotHeading
                informationCounts {
                  heading
                  counts
                  content
                }
              }
            }
          }
        }
      }
    `
  );
  const LineTitle = data.tsPage.flexibleContent.flexibleContent[5].lineHeading;
  const LineNumber = data.tsPage.flexibleContent.flexibleContent[5].lineNumber;
  const Heading =
    data.tsPage.flexibleContent.flexibleContent[5].companySnapshotHeading;

  const CompanyInfo: informationCountsType[] =
    data.tsPage.flexibleContent.flexibleContent[5].informationCounts;

  return { LineTitle, LineNumber, Heading, CompanyInfo };
};
