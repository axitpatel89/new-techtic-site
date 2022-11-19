import React, { useState, useEffect } from "react";
import { GlobalContainer } from "../../Global/layout";
import {
  BlackBackground,
  StyledPrimaryButton,
  StyledCol,
  StyledList,
  StyledDiv,
  StyledSubTitle,
  StyledDiscription,
  CapabilitiesRow,
  LeftSide,
} from "./style";
import { LineHeading } from "../../LineHeading";
import theme from "../../../theme";
import { StyledHeadingh3 } from "../../Global/headings";
import StarterModal from "../../Models/StarterModal";

const Capabilities = ({ CapabilitiesData }: any) => {
  const Lists = CapabilitiesData.contentLists;

  const [letsTalkVisible, setLetsTalkVisible] = useState(false);

  const handleLetsTalkBtn = () => {
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
      <StarterModal visible={letsTalkVisible} setVisible={setLetsTalkVisible} />
      <BlackBackground color={CapabilitiesData.backgroundColor}>
        <GlobalContainer>
          <LineHeading
            title={CapabilitiesData.lineHeading}
            number={CapabilitiesData.lineNumber}
            color={theme.white}
          />
          <CapabilitiesRow gutter={40}>
            <LeftSide xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledHeadingh3
                maxWidth="505px"
                color={theme.white}
                text={CapabilitiesData.heading}
              />
              <StyledPrimaryButton id="TalkButton" onClick={handleLetsTalkBtn}>
                {CapabilitiesData.cta?.title}
              </StyledPrimaryButton>
            </LeftSide>
            <StyledCol xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledList>
                {Lists.map((items: any, index: number) => {
                  return (
                    <StyledDiv key={index}>
                      <StyledSubTitle>{items.heading}</StyledSubTitle>
                      <StyledDiscription
                        dangerouslySetInnerHTML={{ __html: items.content }}
                      />
                    </StyledDiv>
                  );
                })}
              </StyledList>
            </StyledCol>
          </CapabilitiesRow>
        </GlobalContainer>
      </BlackBackground>
    </>
  );
};

export default Capabilities;
