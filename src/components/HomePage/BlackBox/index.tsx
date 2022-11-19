import React, { useState } from "react";
import { Row } from "antd";
import { WorkParagraph, WorkView } from "../../Global/globalStyle";
import { StyledHeadingh1 } from "../../Global/headings";
import { GlobalContainer } from "../../Global/layout";
import {
  BlackBackground,
  Carouselcomponent,
  ImgCol,
  ImgLineComponent,
  SecondaryHeading,
  TextCol,
} from "./style";
import { useTestimonialQuery } from "../../../querys/homePageQuery/useTestimonialQuery";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const BlackBox = () => {
  const { Title, Testimonial } = useTestimonialQuery();

  const [ImgIndex, setImgIndex] = useState(0);

  const onChange = (from: number, to: number) => {
    setImgIndex(to);
  };

  const handleViewBtn = () => {
    navigate(
      Testimonial[ImgIndex].node.TestimonialsForCaseStudies?.workRelationship[0]
        ?.link
    );
  };
  return (
    <BlackBackground>
      <GlobalContainer>
        <SecondaryHeading>
          <StyledHeadingh1 text={Title} />
        </SecondaryHeading>
        <Row>
          <TextCol xs={24} sm={24} md={11} lg={11} xl={11}>
            <Carouselcomponent beforeChange={onChange} arrows="false">
              {Testimonial.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.node.content }}
                    />
                    <span>
                      - {item.node.TestimonialsForCaseStudies.author},{" "}
                      {item.node.TestimonialsForCaseStudies.jobTitle}
                    </span>
                  </div>
                );
              })}
            </Carouselcomponent>
          </TextCol>

          {Testimonial[ImgIndex].node.TestimonialsForCaseStudies
            ?.workRelationship &&
            Testimonial[ImgIndex].node.TestimonialsForCaseStudies
              ?.workRelationship[0]?.featuredImage && (
              <ImgCol
                onClick={handleViewBtn}
                xs={24}
                sm={24}
                md={13}
                lg={13}
                xl={13}
              >
                <WorkView>
                  <GatsbyImage
                    image={
                      Testimonial[ImgIndex].node.TestimonialsForCaseStudies
                        ?.workRelationship[0]?.featuredImage?.node?.gatsbyImage
                    }
                    alt={
                      Testimonial[ImgIndex].node.TestimonialsForCaseStudies
                        ?.workRelationship[0]?.featuredImage?.node?.altText
                    }
                  />
                </WorkView>
                <ImgLineComponent>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        Testimonial[ImgIndex].node.TestimonialsForCaseStudies
                          ?.workRelationship[0]?.newCaseStudy?.shortContent,
                    }}
                  />
                  <span>
                    {
                      Testimonial[ImgIndex].node.TestimonialsForCaseStudies
                        ?.workRelationship[0]?.caseStudyCategory?.nodes[0]?.name
                    }
                  </span>
                </ImgLineComponent>

                <WorkParagraph className="hover_Img">
                  {
                    Testimonial[ImgIndex].node.TestimonialsForCaseStudies
                      .workRelationship[0]?.title
                  }
                </WorkParagraph>
              </ImgCol>
            )}
        </Row>
      </GlobalContainer>
    </BlackBackground>
  );
};
