import React from "react";
import { graphql } from "gatsby";
import { SiteLayout } from "../components/Layout";
import WorkDetailsPageContent from "../components/Work/WorkDetailsPage";

const WorkDetailsPage = ({ data }: any) => {
  return (
    <SiteLayout>
      <WorkDetailsPageContent data={data} />
    </SiteLayout>
  );
};

export default WorkDetailsPage;

export const query = graphql`
  query MyQueryCaseStudyDetailsPage($slug: String) {
    tsCaseStudy(slug: { eq: $slug }) {
      caseStudyDetailsPage {
        heading
        content
        tools {
          heading
          content
        }
        services {
          heading
          content
        }
        portfolioLinks {
          heading
          androidLink
          iosLink
          webLink
        }
        ourRoleSection {
          roleHeading
          roleContent
        }
        detailsPageImage {
          altText
          gatsbyImage(width: 1400, layout: CONSTRAINED)
        }
        ourProcess {
          heading
          content
          cta {
            title
            url
            target
          }
        }
        featureHeading
        featuresListsForApps {
          heading
          content
          image {
            altText
            gatsbyImage(width: 1000, layout: CONSTRAINED)
          }
        }
        featuresListsForWeb {
          heading
          content
          image {
            altText
            gatsbyImage(width: 1000, layout: CONSTRAINED)
          }
        }
        specialFeaturesHeading
        specialFeaturesContent
        problemChallengesResultLists {
          heading
          content
        }
        weFollowAgile {
          heading
          content
          cta {
            title
            url
            target
          }
        }
        clientSaysHeading
      }
      caseStudyCategory {
        nodes {
          name
        }
      }
    }
    allTsTestimonial {
      edges {
        node {
          content
          title
          TestimonialsForCaseStudies {
            author
            company
            jobTitle
            content
          }
          featuredImage {
            node {
              altText
              gatsbyImage(layout: CONSTRAINED, width: 100)
            }
          }
        }
      }
    }
  }
`;
