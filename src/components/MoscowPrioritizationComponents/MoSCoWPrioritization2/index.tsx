import { Col } from "antd";
import React from "react";
import theme from "../../../theme";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  BlackDiv,
  BoxDesc,
  BoxTitle,
  ContentRow,
  Heading,
  RightContent,
  SubHeading,
  TechniqueContainer,
} from "./style";

const MoSCoWPrioritization2 = ({ MoscowPrioritization2Data }: any) => {
  return (
    <div>
      <GlobalContainer>
        <LineHeading
          title="MoSCoW Prioritization"
          number="02"
          color={theme.black}
        />
        <ContentRow>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Heading>{MoscowPrioritization2Data.heading}</Heading>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <RightContent
              dangerouslySetInnerHTML={{
                __html: MoscowPrioritization2Data.content,
              }}
            />
          </Col>
        </ContentRow>
        <SubHeading>{MoscowPrioritization2Data.subHeading}</SubHeading>

        <TechniqueContainer gutter={20}>
          {MoscowPrioritization2Data.moscowPrioritizationCtas.map(
            (item: any, index: number) => {
              return (
                <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6}>
                  <BlackDiv>{item.initial}</BlackDiv>
                  <BoxTitle>{item.title}</BoxTitle>
                  <BoxDesc>{item.description}</BoxDesc>
                </Col>
              );
            }
          )}
        </TechniqueContainer>
      </GlobalContainer>
    </div>
  );
};

export default MoSCoWPrioritization2;
