import React from "react";
import { useServiceIntroQuery } from "../../../querys/servicePageQuery/useServiceIntroQuery";
import { GlobalContainer } from "../../Global/layout";
import { GridRow, GridCol, Paragraph, ServideGridOuter } from "./style";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ServiceGrid = () => {
  const { servicesCta }: any = useServiceIntroQuery();
  const handleClick = (items: any) => {
    navigate(items.serviceRedirectLinks.url);
  };
  return (
    <ServideGridOuter>
      <GlobalContainer>
        <GridRow>
          {servicesCta.map((items: any, index: number) => {
            return (
              <GridCol
                onClick={() => handleClick(items)}
                key={index}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <GatsbyImage
                  image={items?.image.gatsbyImage}
                  alt={items?.image.altText}
                />
                <Paragraph
                  dangerouslySetInnerHTML={{ __html: items.heading }}
                />
              </GridCol>
            );
          })}
        </GridRow>
      </GlobalContainer>
    </ServideGridOuter>
  );
};

export default ServiceGrid;
function e(e: any): void {
  throw new Error("Function not implemented.");
}
