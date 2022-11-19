import React from "react";
import { useServiceIntroQuery } from "../../../querys/servicePageQuery/useServiceIntroQuery";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { Paragraph, ServiceIntroOuter } from "./style";

const ServiceIntro = () => {
  const { Title, Content } = useServiceIntroQuery();
  return (
    <ServiceIntroOuter>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="1032px" text={Title} />
        <Paragraph dangerouslySetInnerHTML={{ __html: Content }} />
      </GlobalContainer>
    </ServiceIntroOuter>
  );
};

export default ServiceIntro;
