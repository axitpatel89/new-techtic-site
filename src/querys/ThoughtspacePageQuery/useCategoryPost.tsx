import { useStaticQuery, graphql } from "gatsby";

const CategorySlug = "cms-development";
export const useCategoryPostQuery = () => {
  const data: {
    tsCategory: {
      posts: {
        nodes: {
          title: string;
          link: string;
          slug: string;
          featuredImage: {
            node: any;
          };
          categories: {
            nodes: {
              name: string;
              link: string;
              slug: string;
            };
          };
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryCategoryPost {
        tsCategory(slug: { eq: "cms-development" }) {
          posts {
            nodes {
              title
              link
              slug
              featuredImage {
                node {
                  gatsbyImage(layout: CONSTRAINED, width: 586)
                }
              }
              categories {
                nodes {
                  name
                  link
                  slug
                  count
                }
              }
            }
          }
        }
      }
    `
  );

  const CategoryPost = data.tsCategory.posts;
console.log("CategoryPost", CategoryPost);

  return { CategoryPost };
};
