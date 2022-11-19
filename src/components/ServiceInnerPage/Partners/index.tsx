import React from "react";
import theme from "../../../theme";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { LogoCol, PartnersSection, RowContainer } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Partners = ({ PartnersData }: any) => {
  const PartnersLists = PartnersData.partnersLogo;

  return (
    <PartnersSection color={PartnersData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={PartnersData.lineHeading}
          number={PartnersData.lineNumber}
          color={theme.white}
        />
        <RowContainer>
          {PartnersLists.map((item: any, index: number) => {
            return (
              <LogoCol key={index} xs={12} sm={12} md={12} lg={6} xl={6}>
                <GatsbyImage image={item.gatsbyImage} alt={item.altText} />
              </LogoCol>
            );
          })}
        </RowContainer>
      </GlobalContainer>
    </PartnersSection>
  );
};

export default Partners;
