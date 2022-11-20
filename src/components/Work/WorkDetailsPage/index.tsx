import { Col, Row, Space } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { GlobalContainer } from "../../Global/layout";
import android from "../../../images/android1.svg";
import ios from "../../../images/ios1.svg";
import web from "../../../images/web1.svg";
import VideoIcon from "../../../images/videoIcon.png";
import quote from "../../../images/quote.png";
import { Link } from "gatsby";
import { LineHeading } from "../../LineHeading";
import { StyledHeadingh2, StyledHeadingh3 } from "../../Global/headings";
import theme from "../../../theme";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  Author,
  BannerImageSection,
  BlackSection,
  Column,
  Company,
  ContentBox,
  DescriptionCol,
  FeatureSection,
  HeadingDescription,
  Imagecontainer,
  ListContainer,
  ListInnerContainer,
  OurProcessSection,
  Review,
  RightCol,
  SliderBox,
  SliderRow,
  SpecialFeaturesSection,
  SpecificationInner,
  SpecificationSection,
  SpecificationsHeading,
  SpecificationsValue,
  TestimonialAndWeFollowSection,
  TestimonialContent,
  TestimonialModal,
  VideoBox,
  VideoButton,
  Videodiv,
  WebLeftContent,
  WebRightContent,
  WebSlider,
  WeFollowAgileContent,
  WorkSectionContainer,
} from "./style";

const WorkDetailsPageContent = ({ data }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [video, setVideo] = useState();

  const showModal = (item: any) => {
    setIsModalOpen(true);
    setVideo(item);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WorkSectionContainer>
        <GlobalContainer>
          <StyledHeadingh2
            maxWidth="877px"
            color=""
            text={data.tsCaseStudy.caseStudyDetailsPage.heading}
          />
          <HeadingDescription
            dangerouslySetInnerHTML={{
              __html: data.tsCaseStudy.caseStudyDetailsPage.content,
            }}
          />

          <SpecificationSection>
            {/* sector */}
            {data.tsCaseStudy.caseStudyCategory?.nodes && (
              <SpecificationInner>
                <SpecificationsHeading>Sector:&nbsp;</SpecificationsHeading>

                <SpecificationsValue>
                  {data.tsCaseStudy.caseStudyCategory?.nodes?.map(
                    (item: any, index: number) => {
                      const lastIndex =
                        data.tsCaseStudy.caseStudyCategory?.nodes?.length - 1;
                      return (
                        <span key={index}>
                          {item.name}
                          {index < lastIndex && <span>, </span>}
                        </span>
                      );
                    }
                  )}
                </SpecificationsValue>
              </SpecificationInner>
            )}

            {/* tools */}
            {data.tsCaseStudy.caseStudyDetailsPage.tools?.content && (
              <SpecificationInner>
                <SpecificationsHeading>
                  {data.tsCaseStudy.caseStudyDetailsPage.tools.heading}:&nbsp;
                </SpecificationsHeading>

                <SpecificationsValue
                  dangerouslySetInnerHTML={{
                    __html: data.tsCaseStudy.caseStudyDetailsPage.tools.content,
                  }}
                />
              </SpecificationInner>
            )}

            {/* Services */}
            {data.tsCaseStudy.caseStudyDetailsPage.services?.content && (
              <SpecificationInner>
                <SpecificationsHeading>
                  {data.tsCaseStudy.caseStudyDetailsPage.services.heading}
                  :&nbsp;
                </SpecificationsHeading>

                <SpecificationsValue
                  dangerouslySetInnerHTML={{
                    __html:
                      data.tsCaseStudy.caseStudyDetailsPage.services.content,
                  }}
                />
              </SpecificationInner>
            )}

            {/* Our Role */}
            {data.tsCaseStudy.caseStudyDetailsPage?.ourRoleSection
              ?.roleHeading && (
              <SpecificationInner>
                <SpecificationsHeading>
                  {
                    data.tsCaseStudy.caseStudyDetailsPage.ourRoleSection
                      .roleHeading
                  }
                  :&nbsp;
                </SpecificationsHeading>

                <SpecificationsValue
                  dangerouslySetInnerHTML={{
                    __html:
                      data.tsCaseStudy.caseStudyDetailsPage.ourRoleSection
                        .roleContent,
                  }}
                />
              </SpecificationInner>
            )}
            {/* Site */}
            {data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks?.heading && (
              <SpecificationInner>
                <SpecificationsHeading>
                  {data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks.heading}
                  :&nbsp;
                </SpecificationsHeading>

                <div>
                  <Space size={20}>
                    {data.tsCaseStudy.caseStudyDetailsPage?.portfolioLinks
                      ?.androidLink && (
                      <Link
                        to={
                          data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks
                            .androidLink
                        }
                        target="_blank"
                      >
                        <img src={android} alt=" Android App Link" />
                      </Link>
                    )}
                    {data.tsCaseStudy.caseStudyDetailsPage?.portfolioLinks
                      ?.iosLink && (
                      <Link
                        to={
                          data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks
                            .iosLink
                        }
                        target="_blank"
                      >
                        <img src={ios} alt=" IOS App Link" />
                      </Link>
                    )}
                    {data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks
                      .webLink && (
                      <Link
                        to={
                          data.tsCaseStudy.caseStudyDetailsPage.portfolioLinks
                            .webLink
                        }
                        target="_blank"
                      >
                        <img src={web} alt=" Website Link" />
                      </Link>
                    )}
                  </Space>
                </div>
              </SpecificationInner>
            )}
          </SpecificationSection>

          <BannerImageSection>
            <GatsbyImage
              image={
                data.tsCaseStudy.caseStudyDetailsPage.detailsPageImage
                  ?.gatsbyImage
              }
              alt={
                data.tsCaseStudy.caseStudyDetailsPage.detailsPageImage?.altText
              }
            />
          </BannerImageSection>

          {data.tsCaseStudy.caseStudyDetailsPage?.ourProcess && (
            <OurProcessSection>
              <Row>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <StyledHeadingh3
                    color={theme.black}
                    text={
                      data.tsCaseStudy.caseStudyDetailsPage?.ourProcess?.heading
                    }
                  />
                </Col>
                <RightCol xs={24} sm={12} md={12} lg={12} xl={12}>
                  <p>
                    {data.tsCaseStudy.caseStudyDetailsPage?.ourProcess?.content}
                  </p>
                  <Link
                    to={
                      data.tsCaseStudy.caseStudyDetailsPage?.ourProcess?.cta
                        ?.url
                    }
                    target={
                      data.tsCaseStudy.caseStudyDetailsPage?.ourProcess?.cta
                        ?.target
                    }
                  >
                    {
                      data.tsCaseStudy.caseStudyDetailsPage?.ourProcess?.cta
                        ?.title
                    }
                  </Link>
                </RightCol>
              </Row>
            </OurProcessSection>
          )}
        </GlobalContainer>

        {data.tsCaseStudy.caseStudyDetailsPage?.featuresListsForWeb && (
          <FeatureSection>
            <GlobalContainer>
              <LineHeading title="Features" number="01" color={theme.white} />
              <StyledHeadingh2
                maxWidth="505px"
                color={theme.white}
                text={data.tsCaseStudy.caseStudyDetailsPage.featureHeading}
              />
              <WebSlider>
                <Swiper
                  navigation={true}
                  pagination={{
                    el: ".my-custom-pagination-div",
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data.tsCaseStudy.caseStudyDetailsPage?.featuresListsForWeb?.map(
                    (item: any, index: number) => {
                      return (
                        <SwiperSlide key={index}>
                          <SliderRow gutter={30}>
                            <Column
                              xs={24}
                              sm={24}
                              md={24}
                              lg={12}
                              xl={12}
                              span={12}
                            >
                              <WebLeftContent>
                                <GatsbyImage
                                  image={item?.image?.gatsbyImage}
                                  alt={item?.image?.altText}
                                />
                              </WebLeftContent>
                            </Column>
                            <Column
                              xs={24}
                              sm={24}
                              md={24}
                              lg={12}
                              xl={12}
                              span={12}
                            >
                              <WebRightContent>
                                <h3>{item.heading}</h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </WebRightContent>
                            </Column>
                          </SliderRow>
                        </SwiperSlide>
                      );
                    }
                  )}
                  <div className="my-custom-pagination-div" />
                </Swiper>
              </WebSlider>
            </GlobalContainer>
          </FeatureSection>
        )}

        {data.tsCaseStudy.caseStudyDetailsPage?.featuresListsForApps && (
          <FeatureSection>
            <GlobalContainer>
              <LineHeading title="Features" number="01" color={theme.white} />
              <StyledHeadingh2
                maxWidth="505px"
                color={theme.white}
                text={data.tsCaseStudy.caseStudyDetailsPage?.featureHeading}
              />
              <WebSlider>
                <Swiper
                  navigation={true}
                  pagination={{
                    el: ".my-custom-pagination-div",
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data.tsCaseStudy.caseStudyDetailsPage.featuresListsForApps?.map(
                    (item: any, index: number) => {
                      return (
                        <SwiperSlide key={index}>
                          <SliderRow gutter={30}>
                            <Column
                              xs={24}
                              sm={24}
                              md={24}
                              lg={12}
                              xl={12}
                              span={12}
                            >
                              <WebLeftContent>
                                <GatsbyImage
                                  image={item.image?.gatsbyImage}
                                  alt={item.image?.altText}
                                />
                              </WebLeftContent>
                            </Column>
                            <Column
                              xs={24}
                              sm={24}
                              md={24}
                              lg={12}
                              xl={12}
                              span={12}
                            >
                              <WebRightContent>
                                <h3>{item.heading}</h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </WebRightContent>
                            </Column>
                          </SliderRow>
                        </SwiperSlide>
                      );
                    }
                  )}
                  <div className="my-custom-pagination-div" />
                </Swiper>
              </WebSlider>
            </GlobalContainer>
          </FeatureSection>
        )}

        {data.tsCaseStudy.caseStudyDetailsPage?.specialFeaturesContent && (
          <SpecialFeaturesSection>
            <GlobalContainer>
              <LineHeading
                title="Special Features"
                number="01"
                color={theme.black}
              />
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <StyledHeadingh3
                    maxWidth="337px"
                    color={theme.black}
                    text={
                      data.tsCaseStudy.caseStudyDetailsPage
                        .specialFeaturesHeading
                    }
                  />
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <ListContainer>
                    <ListInnerContainer
                      dangerouslySetInnerHTML={{
                        __html:
                          data.tsCaseStudy.caseStudyDetailsPage
                            .specialFeaturesContent,
                      }}
                    />
                  </ListContainer>
                </Col>
              </Row>
            </GlobalContainer>
          </SpecialFeaturesSection>
        )}

        {data.tsCaseStudy.caseStudyDetailsPage
          ?.problemChallengesResultLists && (
          <BlackSection>
            <GlobalContainer>
              <ContentBox>
                {data.tsCaseStudy.caseStudyDetailsPage.problemChallengesResultLists?.map(
                  (item: any, index: number) => {
                    return (
                      <>
                        <h1 key={index}>{item.heading}</h1>
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        />
                      </>
                    );
                  }
                )}
              </ContentBox>
            </GlobalContainer>
          </BlackSection>
        )}

        <TestimonialModal
          title=""
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          {!video?.node?.TestimonialsForCaseStudies?.content && (
            <div style={{ textAlign: "center" }}>
              <img src={quote} alt="testimonial" />
              <Review
                dangerouslySetInnerHTML={{
                  __html: video?.node?.content,
                }}
              />
              <GatsbyImage
                style={{ marginBottom: "25px" }}
                image={video?.node?.featuredImage?.node?.gatsbyImage}
                alt={video?.node?.featuredImage?.node?.altText}
              />
              <Author>
                -{video?.node?.TestimonialsForCaseStudies?.author},{" "}
                {video?.node?.TestimonialsForCaseStudies?.jobTitle}
              </Author>
              <Company>
                @{video?.node?.TestimonialsForCaseStudies?.company}
              </Company>
            </div>
          )}

          {video?.node?.TestimonialsForCaseStudies?.content && (
            <VideoBox>
              <iframe
                src={video?.node?.TestimonialsForCaseStudies?.content}
                allowFullScreen
                frameBorder="0"
                className="iframe"
                allow="autoplay"
              />
            </VideoBox>
          )}
        </TestimonialModal>

        <TestimonialAndWeFollowSection>
          <GlobalContainer>
            <Row gutter={40}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <TestimonialContent>
                  <div>
                    {data.tsCaseStudy.caseStudyDetailsPage?.clientSaysHeading}
                  </div>

                  <SliderBox>
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                    >
                      {data.allTsTestimonial?.edges?.map(
                        (item: any, index: number) => {
                          if (item.node?.TestimonialsForCaseStudies?.content) {
                            return (
                              <SwiperSlide onClick={() => showModal(item)}>
                                <Row gutter={20}>
                                  <Col xs={24} sm={10} md={24} lg={10} xl={10}>
                                    <Videodiv>
                                      <GatsbyImage
                                        image={
                                          item?.node?.featuredImage?.node
                                            ?.gatsbyImage
                                        }
                                        alt={
                                          item?.node?.featuredImage?.node
                                            ?.altText
                                        }
                                      />
                                      <VideoButton>
                                        <img src={VideoIcon} alt="video" />
                                      </VideoButton>
                                    </Videodiv>
                                  </Col>
                                  <DescriptionCol
                                    xs={24}
                                    sm={14}
                                    md={24}
                                    lg={14}
                                    xl={14}
                                  >
                                    <Author>
                                      -
                                      {
                                        item?.node?.TestimonialsForCaseStudies
                                          ?.author
                                      }
                                      ,{" "}
                                      {
                                        item?.node?.TestimonialsForCaseStudies
                                          ?.jobTitle
                                      }
                                    </Author>
                                    <Company>
                                      @
                                      {
                                        item?.node?.TestimonialsForCaseStudies
                                          ?.company
                                      }
                                    </Company>
                                  </DescriptionCol>
                                </Row>
                              </SwiperSlide>
                            );
                          }
                          return (
                            <SwiperSlide
                              key={index}
                              onClick={() => showModal(item)}
                            >
                              <Row gutter={20}>
                                <Imagecontainer
                                  xs={24}
                                  sm={24}
                                  md={5}
                                  lg={5}
                                  xl={5}
                                >
                                  <GatsbyImage
                                    image={
                                      item?.node?.featuredImage?.node
                                        ?.gatsbyImage
                                    }
                                    alt={
                                      item?.node?.featuredImage?.node?.altText
                                    }
                                  />
                                </Imagecontainer>
                                <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                                  <Review
                                    dangerouslySetInnerHTML={{
                                      __html: item?.node?.content,
                                    }}
                                  />
                                  <Author>
                                    -
                                    {
                                      item?.node?.TestimonialsForCaseStudies
                                        ?.author
                                    }
                                    ,{" "}
                                    {
                                      item?.node?.TestimonialsForCaseStudies
                                        ?.jobTitle
                                    }
                                  </Author>
                                  <Company>
                                    @
                                    {
                                      item?.node?.TestimonialsForCaseStudies
                                        ?.company
                                    }
                                  </Company>
                                </Col>
                              </Row>
                            </SwiperSlide>
                          );
                        }
                      )}
                    </Swiper>
                  </SliderBox>
                </TestimonialContent>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                {data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile
                  ?.heading && (
                  <WeFollowAgileContent>
                    <div>
                      {
                        data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile
                          ?.heading
                      }
                    </div>
                    <p>
                      {
                        data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile
                          ?.content
                      }
                    </p>
                    <Link
                      to={
                        data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile?.cta
                          ?.url
                      }
                      target={
                        data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile?.cta
                          ?.target
                      }
                    >
                      {
                        data.tsCaseStudy.caseStudyDetailsPage.weFollowAgile?.cta
                          ?.title
                      }
                    </Link>
                  </WeFollowAgileContent>
                )}
              </Col>
            </Row>
          </GlobalContainer>
        </TestimonialAndWeFollowSection>
      </WorkSectionContainer>
    </>
  );
};

export default WorkDetailsPageContent;
