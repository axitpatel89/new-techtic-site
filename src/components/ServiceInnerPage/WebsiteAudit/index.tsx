import React from "react";
import { GlobalContainer } from "../../Global/layout";
import theme from "../../../theme";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh1 } from "../../Global/headings";
import {
  BlueBackground,
  AuditRow,
  AuditCol,
  Ul,
  AuditButton,
  ImgCol,
} from "./style";
// import { useWebsiteAuditQuery } from "../../../querys/servicePageQuery/DigitalCommerceQuery/useWebsiteAuditQuery";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WebsiteAudit = ({ WebsiteAuditData }: any) => {
  // const { WebsiteAuditData } = useWebsiteAuditQuery();

  const handleAuditBtn = () => {
    navigate(WebsiteAuditData.cta.url);
  };
  return (
    <BlueBackground color={WebsiteAuditData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={WebsiteAuditData.lineHeading}
          number={WebsiteAuditData.lineNumber}
          color={theme.white}
        />
        <StyledHeadingh1
          maxWidth="1175px"
          color={theme.white}
          text={WebsiteAuditData.heading}
        />
        <AuditRow>
          <AuditCol xs={24} sm={24} md={24} lg={11} xl={11}>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: WebsiteAuditData.content }}
              />
              <AuditButton onClick={handleAuditBtn}>
                {WebsiteAuditData.cta.title}
              </AuditButton>
            </div>
          </AuditCol>
          <ImgCol xs={24} sm={24} md={24} lg={13} xl={13}>
            <GatsbyImage
              image={WebsiteAuditData.image.gatsbyImage}
              alt={WebsiteAuditData.image.altText}
            />
          </ImgCol>
        </AuditRow>
      </GlobalContainer>
    </BlueBackground>
  );
};

export default WebsiteAudit;
