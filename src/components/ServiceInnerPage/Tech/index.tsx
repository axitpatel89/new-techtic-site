import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh1, StyledHeadingh3 } from "../../Global/headings";
import {
  TechRow,
  TechCol,
  StyledDiv,
  LogoContainer,
  Text,
  TechLink,
  TechSection,
} from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Tech = ({ TechData }: any) => {
  const TechLists = TechData.contentLists;

  return (
    <TechSection color={TechData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={TechData.lineHeading}
          number={TechData.lineNumber}
          color=""
        />
        <StyledHeadingh1 maxWidth="925px" color="" text={TechData.heading} />
        <TechRow>
          <TechCol>
            {TechLists.map((item: any, index: number) => {
              return (
                <StyledDiv key={index}>
                  <LogoContainer>
                    {item.heading ? (
                      <StyledHeadingh3 text={item.heading} />
                    ) : (
                      <GatsbyImage
                        image={item.image.gatsbyImage}
                        alt={item.image.altText}
                      />
                    )}
                  </LogoContainer>
                  <Text dangerouslySetInnerHTML={{ __html: item.content }} />
                  <TechLink to={item.cta.url}>{item.cta.title}</TechLink>
                </StyledDiv>
              );
            })}
          </TechCol>
        </TechRow>
      </GlobalContainer>
    </TechSection>
  );
};

export default Tech;
