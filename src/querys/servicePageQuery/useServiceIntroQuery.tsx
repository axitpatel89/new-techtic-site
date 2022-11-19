import { useStaticQuery, graphql } from "gatsby";

export interface servicesCta {
  image: {
    gatsbyImage: any;
    altText: string;
  };
}

export const useServiceIntroQuery = () => {
  const data: {
    tsPage: {
      flexibleContent: {
        flexibleContent: {
          heading: string;
          content: string;
          servicesCta: servicesCta[];
          0: any;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryServicePage {
        tsPage(slug: { eq: "services" }) {
          flexibleContent {
            flexibleContent {
              ... on tsPage_Flexiblecontent_FlexibleContent_ServicesSection {
                content
                lineHeading
                lineNumber
                heading
                servicesCta {
                  image {
                    altText
                    gatsbyImage(layout: CONSTRAINED, width: 592)
                  }
                  heading
                  serviceRedirectLinks {
                    title
                    target
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const Title = data.tsPage.flexibleContent.flexibleContent[0].heading;
  const Content = data.tsPage.flexibleContent.flexibleContent[0].content;
  const servicesCta =
    data.tsPage.flexibleContent.flexibleContent[0].servicesCta;

  return { Title, Content, servicesCta };
};
