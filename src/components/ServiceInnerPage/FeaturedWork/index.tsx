import React from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import { LineHeading } from "../../LineHeading";
import {
  FeaturedWorkSection,
  ImageGridContainer,
  ProductTag,
  ViewBtn,
  WorkBoxInner,
  WorkImg,
  WorkName,
  WorkRow,
} from "./style";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const FeaturedWork = ({ FeaturedWorkData }: any) => {
  const handleViewAllBtn = (e: any) => {
    e.preventDefault();
    navigate("/our-work");
  };

  return (
    <FeaturedWorkSection color={FeaturedWorkData.backgroundColor}>
      <GlobalContainer>
        <LineHeading
          title={FeaturedWorkData.lineHeading}
          number={FeaturedWorkData.lineNumber}
        />
        <StyledHeadingh1 maxWidth="925" text={FeaturedWorkData.heading} />
        <ImageGridContainer>
          <WorkRow>
            {FeaturedWorkData.featuredWorks?.map((item: any, index: number) => {
              const url = item.link;
              return (
                <div key={index} className="work-box">
                  <WorkBoxInner>
                    <a href={url}>
                      <WorkImg>
                        <GatsbyImage
                          image={item.featuredImage.node.gatsbyImage}
                          alt={item.featuredImage.node.altText}
                        />
                      </WorkImg>
                      <div className="work-info">
                        <WorkName>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.newCaseStudy.shortContent,
                            }}
                          />
                          <ProductTag>
                            {item.caseStudyCategory?.nodes[0]?.name}
                          </ProductTag>
                        </WorkName>
                        <div className="description-project-info">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </a>
                  </WorkBoxInner>
                </div>
              );
            })}
          </WorkRow>
          <ViewBtn onClick={handleViewAllBtn}>View All</ViewBtn>
        </ImageGridContainer>
      </GlobalContainer>
    </FeaturedWorkSection>
  );
};

export default FeaturedWork;
