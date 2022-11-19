import React, { useState, useEffect } from "react";
import { GlobalContainer } from "../Global/layout";
import { LineHeading } from "../LineHeading";
import {
  TeamComponent,
  StyledParagraph,
  LineComponent,
  ImageContainer,
  StyledRow,
  InfoModal,
  LeftSide,
  PersonalInfo,
  Designation,
  Name,
} from "./style";
import { useTeamSectionQuery } from "../../querys/aboutPageQuery/useTeamSectionQuery";
import { StyledHeadingh1 } from "../Global/headings";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Modal, Row } from "antd";
import "./style.css";

const AboutTeam = () => {
  const { LineTitle, LineNumber, Images, Heading, Content } =
    useTeamSectionQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Info, setInfo] = useState({});

  const showModal = (member: any) => {
    setIsModalOpen(true);
    setInfo(member);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [isModalOpen]);

  return (
    <>
      <TeamComponent>
        <GlobalContainer>
          <LineHeading title={LineTitle} number={LineNumber} />
          <StyledHeadingh1 maxWidth="925px" text={Heading} />
          <StyledParagraph dangerouslySetInnerHTML={{ __html: Content }} />

          <StyledRow>
            {Images?.map((member: any, index: number) => {
              return (
                <ImageContainer
                  key={index}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                >
                  <div
                    onClick={() => showModal(member)}
                    style={{ width: "fit-content", cursor: "pointer" }}
                  >
                    <GatsbyImage
                      image={member?.featuredImage?.node?.gatsbyImage}
                      alt={member?.featuredImage?.node?.altText}
                    />
                    <LineComponent>
                      <span>{member.title}</span>
                      <span>{member.team?.designation}</span>
                    </LineComponent>
                  </div>
                </ImageContainer>
              );
            })}
          </StyledRow>
        </GlobalContainer>
      </TeamComponent>
      <InfoModal>
        <Modal
          // title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
          className="modal"
          footer={null}
        >
          <Row gutter={40}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} span={8}>
              <GatsbyImage
                image={Info?.featuredImage?.node?.gatsbyImage}
                alt=" Team member"
              />
              <Name>{Info?.title}</Name>
              <Designation>{Info?.team?.designation}</Designation>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} span={16}>
              <PersonalInfo
                dangerouslySetInnerHTML={{ __html: Info?.content }}
              />
            </Col>
          </Row>
        </Modal>
      </InfoModal>
    </>
  );
};

export default AboutTeam;
