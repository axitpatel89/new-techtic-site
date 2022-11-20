import { useStaticQuery, graphql } from "gatsby";

export const useTitleAndMenuQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          0: any;
          heading: string;
        };
      };
    };
    allTsCategory: {
      edges: {
        map(arg0: (item: any, index: number) => JSX.Element): import("react").ReactNode;
        node: {
          name: string;
          link: string;
          id: string;
          slug: string;
          databaseId: number;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryTitleAndMenuThoughtspace {
        tsPage(slug: { eq: "thoughtspace" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_HeadingImageContent {
                heading
              }
            }
          }
        }
        allTsCategory {
          edges {
            node {
              name
              link
              id
              slug
              databaseId
            }
          }
        }
      }
    `
  );

  const Heading = data.tsPage.flexibleContent.flexibleContent[0].heading;
  const CategoryMenu = data.allTsCategory.edges;

  return { Heading, CategoryMenu };
};
