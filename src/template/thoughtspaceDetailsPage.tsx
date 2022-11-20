import React from "react";
import { graphql } from "gatsby";
import SingleThoughtspace from "../components/ThoughtspacePage/ThoughtspaceDetails";
import { SiteLayout } from "../components/Layout";

const thoughtspaceDetailsPage = ({ data }: any) => {
  return (
    <SiteLayout>
      <SingleThoughtspace data={data} />
    </SiteLayout>
  );
};

export default thoughtspaceDetailsPage;

export const query = graphql`
  query MyQueryBlogsDetailsPage($slug: String) {
    allTsPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          dateGmt(formatString: "MMM DD, YYYY")
          content
          featuredImage {
            node {
              altText
              gatsbyImage(layout: CONSTRAINED, width: 1000)
            }
          }
          selectCaseStudy {
            caseStudy {
              ... on tsCaseStudy {
                title
                slug
                link
                content
                featuredImage {
                  node {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 1000)
                  }
                }
                portfolio {
                  backgroundGradient
                }
              }
            }
            listingPageImage {
              altText
              gatsbyImage(width: 1000, layout: CONSTRAINED)
            }
          }
          next {
            link
            title
            slug
          }
          previous {
            link
            slug
            title
          }
          author {
            node {
              firstName
              lastName
              description
              authorProfile {
                profile {
                  altText
                  gatsbyImage(width: 250, layout: CONSTRAINED)
                }
              }
            }
          }
          categories {
            nodes {
              name
              posts {
                nodes {
                  title
                  slug
                  link
                  categories {
                    nodes {
                      name
                      slug
                      link
                    }
                  }
                  featuredImage {
                    node {
                      altText
                      gatsbyImage(layout: CONSTRAINED, width: 600)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
