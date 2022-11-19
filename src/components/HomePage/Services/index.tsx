import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import ImageGrid2 from "./ImageGrid2";
import { Paragraph, ServicesComponent } from "./style";
import { useServicesQuery } from "../../../querys/homePageQuery/useServicesQuery";
import { StyledHeadingh1 } from "../../Global/headings";

export const Services = () => {
  const { LineTitle, LineNumber, Title, Content } = useServicesQuery();

  return (
    <ServicesComponent>
      <GlobalContainer>
        <LineHeading color="#fff" title={LineTitle} number={LineNumber} />
        <StyledHeadingh1 text={Title} />
        <Paragraph dangerouslySetInnerHTML={{ __html: Content }} />
        <ImageGrid2 />
      </GlobalContainer>
    </ServicesComponent>
  );
};
