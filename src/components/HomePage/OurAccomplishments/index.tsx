import { Col, Row } from "antd";
import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  AccomplishmentsComponent,
  Discription,
  Number,
  StyledDiv,
  StyledFirstCol,
  StyledSecondCol,
  StyledTitle,
} from "./style";
import { useAccomplishmentsQuery } from "../../../querys/homePageQuery/useAccomplishments";
import CountUp from "react-countup";

export const OurAccomplishments = () => {
  const { LineTitle, LineNumber, Heading, CompanyInfo }: any =
    useAccomplishmentsQuery();

  return (
    <AccomplishmentsComponent>
      <GlobalContainer>
        <LineHeading title={LineTitle} number={LineNumber} color="" />
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <StyledFirstCol>{Heading}</StyledFirstCol>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={14}>
            <StyledSecondCol>
              {CompanyInfo.map((item: any, index: number) => {
                return (
                  <StyledDiv key={index}>
                    <StyledTitle>{item.heading}</StyledTitle>
                    <Number>
                      <CountUp end={item.counts} duration={2} delay={0} />
                    </Number>
                    <Discription
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </StyledDiv>
                );
              })}
            </StyledSecondCol>
          </Col>
        </Row>
      </GlobalContainer>
    </AccomplishmentsComponent>
  );
};
