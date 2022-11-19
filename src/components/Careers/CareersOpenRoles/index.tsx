import React from "react";
import theme from "../../../theme";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  AcordienContent,
  ApplyLink,
  BlackBackground,
  Experience,
  Heading,
  StyledDiv,
} from "./style";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const CareersOpenRoles = ({ OpenRoles }: any) => {
  return (
    <BlackBackground color={OpenRoles.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={OpenRoles.lineHeading}
          number={OpenRoles.lineNumber}
          color={theme.white}
        />
        {/* <StyledDiv>
          <Collapse
            expandIcon={({ isActive }) => (
              <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
            )}
            expandIconPosition="end"
            accordion
            ghost
          >
            {OpenRoles.openRolesContents.map((item: any, index: number) => {
              return (
                <>
                  <Heading key={index}>{item.heading}</Heading>
                  {item.positionsListing.map((item: any, index: number) => {
                    const TitleandLOcation = (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.careers.jobLocation,
                        }}
                      />
                    );
                    return (
                      <Panel header={TitleandLOcation} key={index}>
                        <h1>{item.careers.title}</h1>
                        <Experience>{item.careers.experience}</Experience>
                        <AcordienContent
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <ApplyLink
                          to={`mailto:jobs@techtic.com?subject=Apply for ${item.title}`}
                        >
                          {item.careers.applyNowForThisPosition.title}
                        </ApplyLink>
                      </Panel>
                    );
                  })}
                </>
              );
            })}
          </Collapse>
        </StyledDiv> */}

        {OpenRoles.openRolesContents[0] && (
          <StyledDiv>
            <Heading>{OpenRoles.openRolesContents[0]?.heading}</Heading>
            <Collapse
              expandIcon={({ isActive }) => (
                <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
              )}
              expandIconPosition="end"
              accordion
              ghost
            >
              {OpenRoles.openRolesContents[0].positionsListing.map(
                (item: any, index: number) => {
                  const TitleandLOcation = (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.careers.jobLocation,
                      }}
                    />
                  );
                  return (
                    <Panel header={TitleandLOcation} key={index}>
                      <h1>{item.careers.title}</h1>
                      <Experience>{item.careers.experience}</Experience>
                      <AcordienContent
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      <ApplyLink
                        to={`mailto:jobs@techtic.com?subject=Apply for ${item.title}`}
                      >
                        {item.careers.applyNowForThisPosition.title}
                      </ApplyLink>
                    </Panel>
                  );
                }
              )}
            </Collapse>
          </StyledDiv>
        )}

        {OpenRoles.openRolesContents[1] && (
          <StyledDiv>
            <Heading>{OpenRoles.openRolesContents[1]?.heading}</Heading>
            <Collapse
              expandIcon={({ isActive }) => (
                <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
              )}
              expandIconPosition="end"
              accordion
              ghost
            >
              {OpenRoles.openRolesContents[1].positionsListing.map(
                (item: any, index: number) => {
                  const TitleandLOcation = (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.careers.jobLocation,
                      }}
                    />
                  );
                  return (
                    <Panel header={TitleandLOcation} key={index}>
                      <h1>{item.careers.title}</h1>
                      <Experience>{item.careers.experience}</Experience>
                      <AcordienContent
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      <ApplyLink
                        to={`mailto:jobs@techtic.com?subject=Apply for ${item.title}`}
                      >
                        {item.careers.applyNowForThisPosition.title}
                      </ApplyLink>
                    </Panel>
                  );
                }
              )}
            </Collapse>
          </StyledDiv>
        )}

        {OpenRoles.openRolesContents[2] && (
          <StyledDiv>
            <Heading>{OpenRoles.openRolesContents[2]?.heading}</Heading>
            <Collapse
              expandIcon={({ isActive }) => (
                <div>{isActive ? <MinusOutlined /> : <PlusOutlined />}</div>
              )}
              expandIconPosition="end"
              accordion
              ghost
            >
              {OpenRoles.openRolesContents[2].positionsListing.map(
                (item: any, index: number) => {
                  const TitleandLOcation = (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.careers.jobLocation,
                      }}
                    />
                  );
                  return (
                    <Panel header={TitleandLOcation} key={index}>
                      <h1>{item.careers.title}</h1>
                      <Experience>{item.careers.experience}</Experience>
                      <AcordienContent
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      <ApplyLink
                        to={`mailto:jobs@techtic.com?subject=Apply for ${item.title}`}
                      >
                        {item.careers.applyNowForThisPosition.title}
                      </ApplyLink>
                    </Panel>
                  );
                }
              )}
            </Collapse>
          </StyledDiv>
        )}
      </GlobalContainer>
    </BlackBackground>
  );
};

export default CareersOpenRoles;
