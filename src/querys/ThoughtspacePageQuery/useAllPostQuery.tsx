import { useStaticQuery, graphql } from "gatsby";

export interface allPostsType {
  length: number;
  node: {
    titel: string;
    link: string;
    categories: {
      nodes: {
        name: string;
        link: string;
      };
    };
    featuredImage: {
      node: any;
    };
  };
}

export const useAllPostQuery = () => {
  const data: {
    allTsPost: {
      edges: allPostsType[];
    };
  } = useStaticQuery(
    graphql`
      query MyQueryAllPostQuery {
        allTsPost(sort: {order: DESC, fields: date}) {
          edges {
            node {
              title
              link
              categories {
                nodes {
                  name
                  link
                  slug
                }
              }
              featuredImage {
                node {
                  altText
                  gatsbyImage(layout: CONSTRAINED, width: 586)
                }
              }
            }
          }
        }
      }
    `
  );

  const AllPost: allPostsType[] = data.allTsPost.edges;

  return { AllPost };
};
