import React from "react";
import { GlobalContainer } from "../Global/layout";
import { LineHeading } from "../LineHeading";
import {
  CareersComponent,
  StyledCareerRow,
  StyledImageContainer,
} from "./style";
import { useCareerSectionQuery } from "../../querys/aboutPageQuery/useCareerSectionQuery";
import { StyledHeadingh3 } from "../Global/headings";
import { Col } from "antd";
import { BlackButton } from "../Global/button";
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const AboutCareer = () => {
  const { LineTitle, LineNumber, Heading, ButtonDetails, Image } =
    useCareerSectionQuery();

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    navigate(ButtonDetails.url);
  };

  return (
    <CareersComponent>
      <GlobalContainer>
        <LineHeading title={LineTitle} number={LineNumber} />
        <StyledCareerRow>
          <Col xs={24} sm={24} xl={12}>
            <StyledHeadingh3
              maxWidth="925px"
              text={Heading}
              style={{ marginBottom: "40px" }}
            />
            <BlackButton onClick={handleButtonClick}>
              {ButtonDetails?.title}
            </BlackButton>
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <StyledImageContainer>
              <GatsbyImage image={Image?.gatsbyImage} alt={Image?.altText} />
            </StyledImageContainer>
          </Col>
        </StyledCareerRow>
      </GlobalContainer>
    </CareersComponent>
  );
};

export default AboutCareer;
