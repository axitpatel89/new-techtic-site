import React from "react";
import { Col, Row } from "antd";
import { useDigitalProductTechQuery } from "../../../querys/servicePageQuery/DigitalProductQuery/useDigitalProductTechQuery";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { TechSection, StyledDiv, StyledRow, Accordioncontainer } from "./style";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const DigitalProductTech = () => {
  const { TechData } = useDigitalProductTechQuery();
  return (
    <TechSection color={TechData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={TechData.lineHeading}
          number={TechData.lineNumber}
        />
        <StyledHeadingh1 maxWidth="925px" text={TechData.heading} />
        <StyledDiv>
          <StyledRow>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
              <Accordioncontainer>
                <Collapse
                  expandIcon={({ isActive }) => (
                    <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
                  )}
                  expandIconPosition="end"
                  // bordered="false"
                  accordion
                  ghost
                >
                  {TechData.contentLists.map((item: any, index: number) => {
                    return (
                      <Panel header={item.heading} key={index + 1}>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </Panel>
                    );
                  })}
                </Collapse>
              </Accordioncontainer>
            </Col>
          </StyledRow>
        </StyledDiv>
      </GlobalContainer>
    </TechSection>
  );
};

export default DigitalProductTech;
