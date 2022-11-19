import { useStaticQuery, graphql } from "gatsby";

export interface footernewsletterType {
  heading: string;
  content: string;
  newsletterForm: any;
}
export interface footerContactType {
  heading: string;
  content: string;
  email: string;
}

export interface footerExploreType {
  id: string;
  title: string;
  uri: string;
}

export interface footerSocialMediaType {
  socialMediaName: string;
  socialMediaLinks: string;
}

export const useFooterContentQuery = () => {
  const data: {
    ts: {
      acfOptionsFooterOptions: {
        footerOption: {
          getOurNewsletter: footernewsletterType;
          connectWithUs: footerContactType;
          explore: {
            heading: string;
            pageLists: footerExploreType[];
          };
          socialHeading: string;
          socialMediaLists: footerSocialMediaType[];
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query MyQueryfooter1 {
        ts {
          acfOptionsFooterOptions {
            footerOption {
              getOurNewsletter {
                heading
                content
                newsletterForm
              }
              connectWithUs {
                content
                heading
                email
              }
              explore {
                heading
                pageLists {
                  ... on tsPage {
                    id
                    title
                    uri
                  }
                }
              }
              socialHeading
              socialMediaLists {
                socialMediaName
                socialMediaLinks
              }
            }
          }
        }
      }
    `
  );
  const footerNewslatter: footernewsletterType =
    data.ts.acfOptionsFooterOptions.footerOption.getOurNewsletter;

  const footerContactUs: footerContactType =
    data.ts.acfOptionsFooterOptions.footerOption.connectWithUs;

  const footerExploreMenuTitle: string =
    data.ts.acfOptionsFooterOptions.footerOption.explore.heading;

  const footerExploreMenu: footerExploreType[] =
    data.ts.acfOptionsFooterOptions.footerOption.explore.pageLists;

  const footerSocialMediaTitle: string =
    data.ts.acfOptionsFooterOptions.footerOption.socialHeading;

    const footerSocialMediaList: footerSocialMediaType[] = data.ts.acfOptionsFooterOptions.footerOption.socialMediaLists;

  return {
    footerNewslatter,
    footerContactUs,
    footerExploreMenuTitle,
    footerExploreMenu,
    footerSocialMediaTitle,
    footerSocialMediaList,
  };
};
