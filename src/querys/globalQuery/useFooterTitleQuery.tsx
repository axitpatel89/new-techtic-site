import { useStaticQuery, graphql } from "gatsby";

export interface footerType {
    content: string;
    letsTalkCta: string;
}

export const useFooterTitleQuery = () => {
    const data: {
        ts: {
            acfOptionsFooterOptions: {
                footerOption: footerType;
            }
        }
    } = useStaticQuery(
        graphql`
        query FooterTitleandCTA {
            ts {
             acfOptionsFooterOptions {
               footerOption {
                 content
                 letSTalkCta {
                   url
                   title
                   target
                 }
               }
             }
           }
        }
        `
    );
    const footer: footerType = data.ts.acfOptionsFooterOptions.footerOption;
    return {footer};
}