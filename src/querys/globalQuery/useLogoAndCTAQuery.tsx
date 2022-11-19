import { useStaticQuery, graphql } from "gatsby";

export interface LogoAndCTAType {
  sourceUrl: string;
  altText: string;
  title: string;
  url: string;
  target: string;
}

export const useLogoAndCTAQuery = () => {
  const data: {
    ts: {
      acfOptionsHeaderOptions: {
        headerOption: {
          logo: LogoAndCTAType;
          letSTalkCta: LogoAndCTAType;
        };
      };
    };
  } = useStaticQuery(
    graphql`
      query LogoQuery {
        ts {
          acfOptionsHeaderOptions {
            headerOption {
              logo {
                altText
                sourceUrl
              }
              letSTalkCta {
                title
                url
                target
              }
            }
          }
        }
      }
    `
  );
  const logo: LogoAndCTAType = data.ts.acfOptionsHeaderOptions.headerOption.logo;
  const CTAButton: LogoAndCTAType = data.ts.acfOptionsHeaderOptions.headerOption.letSTalkCta;
  return { logo, CTAButton };
};
