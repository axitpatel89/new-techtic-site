import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { StyledHeadingh1 } from "../../Global/headings";
import {
  CardView,
  StyledIndustryList,
  StyledIndustryName,
  StyledLoadingButton,
  WorkCardDescrip,
  WorkInfo,
  PostContainer,
  AllIndustry,
  SubMenu,
} from "./style";
import { GatsbyImage } from "gatsby-plugin-image";
import { useAllPostQuery } from "../../../querys/ThoughtspacePageQuery/useAllPostQuery";
import { useTitleAndMenuQuery } from "../../../querys/ThoughtspacePageQuery/useTitleAndMenuQuery";
import { BlackButton } from "../../Global/button";
import { navigate } from "gatsby";
import { useWindowDimensions } from "../../../querys/globalQuery/useWindowDimensions";

const ThoughtspacceListing = () => {
  const { AllPost } = useAllPostQuery();

  const { Heading, CategoryMenu } = useTitleAndMenuQuery();

  const windowDimensions = useWindowDimensions();

  const [count, setCount] = useState(6);
  const [isbtnAvilable, setisbtnAvilable] = useState(true);
  const [categorySlug, setCategorySlug] = useState("all");

  const arraylength = AllPost.filter(
    (data: any) =>
      JSON.stringify(data)
        .toLowerCase()
        .indexOf(categorySlug?.toLowerCase()) !== -1
  );

  const handleCategoryChange = (slug: any) => {
    setCategorySlug(slug);
    setCount(6);
  };

  const handlePostClick = (item: any) => {
    navigate(`/thoughtspace${item.node.link}`);
  };

  const onClickLoadMore = () => {
    if (AllPost?.length > count) {
      setCount(count + 6);
      return;
    }

    setisbtnAvilable(false);
  };

  return (
    <div style={{ marginTop: "74px" }}>
      <StyledHeadingh1 maxWidth="1032px" text={Heading} />
      {windowDimensions.width < 769 ? (
        <SubMenu>
          <AllIndustry id="allTag" onClick={() => setCategorySlug("all")}>
            All
          </AllIndustry>

          {CategoryMenu.map((item: any, index: number) => {
            const slug = item.node.name;
            return (
              <StyledIndustryName
                id="selectedTag"
                onClick={() => handleCategoryChange(slug)}
                key={index}
                className={categorySlug === slug ? "active" : ""}
              >
                {item.node.name}
              </StyledIndustryName>
            );
          })}
        </SubMenu>
      ) : (
        <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
          {" "}
          <Col xs={24} xl={20}>
            <StyledIndustryList>
              <AllIndustry
                id="allTag"
                className="all-active"
                onClick={() => setCategorySlug("all")}
              >
                All
              </AllIndustry>
              {CategoryMenu.map((item: any, index: number) => {
                const slug = item.node.name;
                return (
                  <StyledIndustryName
                    className="selectedTag"
                    onClick={() => handleCategoryChange(slug)}
                    key={index}
                  >
                    {item.node.name}
                  </StyledIndustryName>
                );
              })}
            </StyledIndustryList>
          </Col>{" "}
        </Row>
      )}
      <Row gutter={68}>
        {categorySlug == "all"
          ? AllPost.slice(0, count).map((item: any, index: number) => {
              return (
                <PostContainer
                  onClick={() => handlePostClick(item)}
                  xl={12}
                  key={index}
                  style={{ marginBottom: "56px" }}
                >
                  <GatsbyImage
                    image={item.node?.featuredImage?.node.gatsbyImage}
                    alt={item.node?.featuredImage?.node.altText}
                  />
                  <WorkInfo>
                    <p>{item.node.title}</p>
                    <span>{item.node.categories.nodes[0].name}</span>
                  </WorkInfo>

                  <WorkCardDescrip className="descrip">
                    <p>This is project description.</p>
                  </WorkCardDescrip>

                  <CardView className="view">
                    <p>view</p>
                  </CardView>
                </PostContainer>
              );
            })
          : AllPost.filter(
              (data: any) =>
                JSON.stringify(data)
                  .toLowerCase()
                  .indexOf(categorySlug?.toLowerCase()) !== -1
            )
              .slice(0, count)
              .map((item: any, index: number) => {
                return (
                  <PostContainer
                    onClick={() => handlePostClick(item)}
                    xl={12}
                    key={index}
                    style={{ marginBottom: "56px" }}
                  >
                    <GatsbyImage
                      image={item.node?.featuredImage?.node.gatsbyImage}
                      alt={item.node?.featuredImage?.node.altText}
                    />
                    <WorkInfo>
                      <p>{item.node.title}</p>
                      <p>{categorySlug}</p>
                    </WorkInfo>

                    <WorkCardDescrip className="descrip">
                      <p>This is project description.</p>
                    </WorkCardDescrip>

                    <CardView className="view">
                      <p>view</p>
                    </CardView>
                  </PostContainer>
                );
              })}
      </Row>
      {arraylength.length > 6 && arraylength.length > count && (
        <StyledLoadingButton>
          <BlackButton onClick={onClickLoadMore}>Load More</BlackButton>
        </StyledLoadingButton>
      )}
    </div>
  );
};

export default ThoughtspacceListing;
