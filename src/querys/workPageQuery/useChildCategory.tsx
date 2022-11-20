import { useStaticQuery, graphql } from "gatsby";

export interface MenuTypes {
  name: string;
  parentDatabaseId: number;
  wpParent: {
    node: {
      name: string;
      slug: string;
      databaseId: number;
    };
  };
}

export const useChildCategory = () => {
  const data: {
    allTsCaseStudyCategory: {
      nodes: MenuTypes[];
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCaseStudiesChildCategoery {
        allTsCaseStudyCategory {
          nodes {
            name
            parentDatabaseId
            wpParent {
              node {
                name
                slug
                databaseId
              }
            }
          }
        }
      }
    `
  );

  const ChildCategory: MenuTypes[] = data.allTsCaseStudyCategory.nodes;

  return { ChildCategory };
};
