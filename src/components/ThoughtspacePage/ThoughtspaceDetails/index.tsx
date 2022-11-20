import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { navigate } from "gatsby";
import { GlobalContainer } from "../../Global/layout";
import {
  BannerImage,
  BlogDetails,
  Description,
  ImageContainer,
  LineComponent,
  NextBlog,
  NextLabel,
  NextSection,
  PreviousBlog,
  PreviousLabel,
  PreviousSection,
  PrevNestBlogSection,
  SliderSection,
  ThoughtspaceDetailsSection,
} from "./style";
import { LineHeading } from "../../LineHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { useWindowDimensions } from "../../../querys/globalQuery/useWindowDimensions";
import { StyledHeadingh2 } from "../../Global/headings";

const SingleThoughtspace = ({ data }: any) => {
  const windowDimensions = useWindowDimensions();

  const length = data.allTsPost.edges[0].node.categories.nodes.length;

  const handleBlog = (url: any) => {
    navigate(`/thoughtspace${url}`);
  };

  return (
    <>
      <ThoughtspaceDetailsSection>
        <GlobalContainer>
          <StyledHeadingh2
            maxWidth="1032px"
            text={data.allTsPost.edges[0].node.title}
          />

          <BlogDetails>
            <p>
              Sector:{" "}
              {data.allTsPost.edges[0].node.categories.nodes.map(
                (item: any, index: number) => {
                  const lastIndex =
                    data.allTsPost.edges[0].node.categories.nodes.length - 1;
                  return (
                    <span key={index}>
                      {item.name}
                      {index < lastIndex && <span>, </span>}
                    </span>
                  );
                }
              )}
            </p>

            <p>
              Author:{" "}
              <span>
                {data.allTsPost.edges[0].node.author.node.firstName}{" "}
                {data.allTsPost.edges[0].node.author.node.lastName}
              </span>
            </p>
            <p>Date Published: {data.allTsPost.edges[0].node.dateGmt}</p>
          </BlogDetails>

          <BannerImage>
            {data.allTsPost.edges[0].node?.selectCaseStudy?.listingPageImage
              ?.gatsbyImage ? (
              <GatsbyImage
                image={
                  data.allTsPost.edges[0].node?.selectCaseStudy
                    ?.listingPageImage?.gatsbyImage
                }
                alt={
                  data.allTsPost.edges[0].node?.selectCaseStudy
                    ?.listingPageImage?.altText
                }
              />
            ) : (
              <GatsbyImage
                image={
                  data.allTsPost.edges[0].node?.featuredImage?.node.gatsbyImage
                }
                alt={data.allTsPost.edges[0].node?.featuredImage?.node.altText}
              />
            )}
          </BannerImage>

          <Description
            dangerouslySetInnerHTML={{
              __html: data.allTsPost.edges[0].node.content,
            }}
          />

          <PrevNestBlogSection>
            {data.allTsPost.edges[0].node.previous && (
              <PreviousSection>
                <PreviousLabel>Previous</PreviousLabel>
                <PreviousBlog
                  to={`/thoughtspace${data.allTsPost.edges[0].node.previous.link}`}
                >
                  {data.allTsPost.edges[0].node.previous.title}
                </PreviousBlog>
              </PreviousSection>
            )}

            {data.allTsPost.edges[0].node.next && (
              <NextSection>
                <NextLabel>Next</NextLabel>
                <NextBlog
                  to={`/thoughtspace${data.allTsPost.edges[0].node.next.link}`}
                >
                  {data.allTsPost.edges[0].node.next.title}
                </NextBlog>
              </NextSection>
            )}
          </PrevNestBlogSection>
        </GlobalContainer>

        <SliderSection>
          <GlobalContainer>
            <LineHeading title="Related Insights" number="" />
          </GlobalContainer>
          <ImageContainer>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={16}
              breakpoints={{
                320: {
                  spaceBetween: 16,
                },
                640: {
                  spaceBetween: 20,
                },
                768: {
                  spaceBetween: 30,
                },
                1024: {
                  spaceBetween: 48,
                },
              }}
            >
              {data.allTsPost.edges[0].node.categories.nodes[0].posts.nodes
                .slice(0, 5)
                .map((item: any, index: number) => {
                  const url = item.link;
                  return (
                    <SwiperSlide key={index}>
                      <div onClick={() => handleBlog(url)}>
                        <GatsbyImage
                          image={item.featuredImage?.node?.gatsbyImage}
                          alt={item.featuredImage?.node?.altText}
                        />
                        <LineComponent>
                          <span>{item.title}</span>
                          {windowDimensions.width <= 768 ? (
                            <span>
                              {index + 1}/{length}
                            </span>
                          ) : (
                            <span>{item.categories?.nodes[0].name}</span>
                          )}
                        </LineComponent>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </ImageContainer>
        </SliderSection>
      </ThoughtspaceDetailsSection>
    </>
  );
};

export default SingleThoughtspace;
