// import theme from "../../../theme";
// import { GlobalContainer } from "../../Global/layout";
// import { LineHeading } from "../../LineHeading";
// import { FAQsSection, Heading, StyledDiv } from "./style";
// import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

// const { Panel } = Collapse;

import React from "react";
import { Col, Row } from "antd";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { FAQsSection, StyledDiv, StyledRow, Accordioncontainer } from "./style";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const FAQs = ({ FaqData }: any) => {
  return (
    <FAQsSection color={FaqData.backgroundColor}>
      <GlobalContainer>
        <LineHeading title={FaqData.lineHeading} number={FaqData.lineNumber} />
        <StyledHeadingh1 maxWidth="1070px" text={FaqData.heading} />
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
                  {FaqData.contentLists.map((item: any, index: number) => {
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
    </FAQsSection>

    // <FAQsSection>
    //   <GlobalContainer>
    //     <LineHeading
    //       title={FaqData.lineHeading}
    //       number={FaqData.lineNumber}
    //       color={theme.white}
    //     />
    //     <Heading>
    //       {FaqData.heading}
    //     </Heading>

    //     <StyledDiv>
    //       <Collapse
    //         expandIcon={({ isActive }) => (
    //           <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
    //         )}
    //         expandIconPosition="end"
    //         accordion
    //         ghost
    //       >
    //         {FaqData.contentLists.map((item: any, index: number) => {
    //           return (
    //             <Panel header={item.heading} key={index}>
    //               <p dangerouslySetInnerHTML={{ __html: item.content }} />
    //             </Panel>
    //           );
    //         })}
    //       </Collapse>
    //     </StyledDiv>
    //   </GlobalContainer>
    // </FAQsSection>
  );
};

export default FAQs;
