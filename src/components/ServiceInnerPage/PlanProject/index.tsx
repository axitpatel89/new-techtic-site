import React, { useEffect, useState } from "react";
import { Col } from "antd";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh3 } from "../../Global/headings";
import { PlanProjectSection, StyledRow, StyledDiv, TalkButton } from "./style";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { navigate } from "gatsby";
import StarterModal from "../../Models/StarterModal";
import HireDeveloperModal from "../../Models/HireDeveloperModal";

const { Panel } = Collapse;

const PlanProject = ({ PlanProjectData }: any) => {
  const PlanProjectLists = PlanProjectData.contentLists;

  // const handleTalkBtn = () => {
  //   navigate(PlanProjectData.cta.url);
  // };

  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const handleTalkBtn = (e: any) => {
    setLetsTalkVisible(true);
  };

  useEffect(() => {
    if (letsTalkVisible) {
      document.body.classList.add("fullscreen-model");
    } else {
      document.body.classList.remove("fullscreen-model");
    }
  }, [letsTalkVisible]);

  return (
    <>
      {PlanProjectData?.cta?.title == "Build your Team" ? (
        <HireDeveloperModal
          visible={letsTalkVisible}
          setVisible={setLetsTalkVisible}
        />
      ) : (
        <StarterModal
          visible={letsTalkVisible}
          setVisible={setLetsTalkVisible}
        />
      )}
      <PlanProjectSection color={PlanProjectData.backgroundColor}>
        <GlobalContainer>
          <LineHeading
            title={PlanProjectData.lineHeading}
            number={PlanProjectData.lineNumber}
          />
          <StyledRow gutter={40}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledHeadingh3
                maxWidth="505px"
                text={PlanProjectData.heading}
              />
              {PlanProjectData.cta !== null && (
                <TalkButton onClick={handleTalkBtn}>
                  {PlanProjectData.cta.title}
                </TalkButton>
              )}
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledDiv>
                <Collapse
                  expandIcon={({ isActive }) => (
                    <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
                  )}
                  expandIconPosition="end"
                  accordion
                  ghost
                >
                  {PlanProjectLists.map((item: any, index: number) => {
                    return (
                      <Panel header={item.heading} key={index + 1}>
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                      </Panel>
                    );
                  })}
                </Collapse>
              </StyledDiv>
            </Col>
          </StyledRow>
        </GlobalContainer>
      </PlanProjectSection>
    </>
  );
};

export default PlanProject;
