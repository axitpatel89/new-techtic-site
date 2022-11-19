import React from "react";
import { GlobalContainer } from "../Global/layout";
import { LineHeading } from "../LineHeading";
import { ValuesComponent } from "./style";
import { useValuesSectionQuery } from "../../querys/aboutPageQuery/useValueSectionQuery";
import ImageGrid from "./ImageGrid";

const AboutValues = () => {
  const { LineTitle, LineNumber, ValuesList } = useValuesSectionQuery();

  return (
    <ValuesComponent>
      <GlobalContainer>
        <LineHeading color="#fff" title={LineTitle} number={LineNumber} />
        <ImageGrid ValuesList={ValuesList} />
      </GlobalContainer>
    </ValuesComponent>
  );
};

export default AboutValues;
