import React from "react";
import theme from "../../../theme";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { AuditCol, AuditRow, DownloadBtn, EBookSection, ImgCol } from "./style";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const EBook = ({ EBookData, URL }: any) => {
  const handleAuditBtn = () => {
    navigate(URL);
  };

  return (
    <EBookSection color={EBookData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={EBookData.lineHeading}
          number={EBookData.lineNumber}
          color={theme.white}
        />
        <StyledHeadingh1
          maxWidth="1175px"
          color={theme.white}
          text={EBookData.heading}
        />
        <AuditRow gutter={40}>
          <AuditCol xs={24} sm={24} md={24} lg={11} xl={11}>
            <div>
              <p dangerouslySetInnerHTML={{ __html: EBookData.content }} />
              <DownloadBtn target="_blank" onClick={handleAuditBtn}>
                {EBookData.cta.title}
              </DownloadBtn>
            </div>
          </AuditCol>
          <ImgCol xs={24} sm={24} md={24} lg={13} xl={13}>
            <GatsbyImage
              image={EBookData.image.gatsbyImage}
              alt={EBookData.image.altText}
            />
          </ImgCol>
        </AuditRow>
      </GlobalContainer>
    </EBookSection>
  );
};

export default EBook;
