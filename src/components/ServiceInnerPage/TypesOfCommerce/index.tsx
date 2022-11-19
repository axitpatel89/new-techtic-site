import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh3 } from "../../Global/headings";
import { Col, Row } from "antd";
import {
  TypeOfCommerceSection,
  StyledTital,
  StyledDiscription,
  StyledCol,
} from "./style";

const TypesOfCommerce = ({ TypeOfCommerceData }: any) => {
  const TypesLists = TypeOfCommerceData.contentLists;
  return (
    <TypeOfCommerceSection color={TypeOfCommerceData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={TypeOfCommerceData.lineHeading}
          number={TypeOfCommerceData.lineNumber}
        />
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <StyledHeadingh3
              maxWidth="505px"
              text={TypeOfCommerceData.heading}
            />
          </Col>
          <StyledCol xs={24} sm={24} md={24} lg={12} xl={12}>
            {TypesLists.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <StyledTital>{item.heading}</StyledTital>
                  <StyledDiscription
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              );
            })}
          </StyledCol>
        </Row>
      </GlobalContainer>
    </TypeOfCommerceSection>
  );
};

export default TypesOfCommerce;
