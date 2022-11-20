import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import ViewButton from "../../../images/Group 67ViewButton-2.svg";
import { navigate } from "gatsby";

const WorkImage = ({ AllWorks, count, SubCategoryName }: any) => {
  const checkImagePosition = (x: number) => {
    if (x % 4 == 0) {
      return true;
    }
    return false;
  };

  const handleViewButton = (slug: any) => {
    navigate(`/our-work/${slug}`);
  };

  return (
    <>
      <WorkImageMainContainer>
        {AllWorks.filter(
          (data: any) =>
            JSON.stringify(data)
              .toLowerCase()
              .indexOf(SubCategoryName?.toLowerCase()) !== -1
        )
          .slice(0, count)
          .map((item: any, index: number) => {
            const slug = item.node.slug;
            return (
              <WorkCardContainer
                onClick={() => handleViewButton(slug)}
                key={index}
                className={
                  checkImagePosition(index + 1)
                    ? "work-image center"
                    : "work-image"
                }
              >
                <WorkImageCard>
                  <GatsbyImage
                    image={item.node?.featuredImage?.node.gatsbyImage}
                    alt={item.node?.featuredImage?.node.altText}
                  />

                  <WorkInfo>
                    <p>{item.node.newCaseStudy?.shortContent || ""}</p>
                    <p>{item.node.caseStudyCategory?.nodes[0]?.name || ""}</p>
                  </WorkInfo>
                  <WorkCardDescrip className="descrip">
                    <p>{item.node.title || ""}</p>
                  </WorkCardDescrip>
                  <CardView className="view">
                    <p>view</p>
                  </CardView>
                </WorkImageCard>
              </WorkCardContainer>
            );
          })}
      </WorkImageMainContainer>
    </>
  );
};

export default WorkImage;

// styled component

export const WorkImageMainContainer = styled.div`
  padding: 112px 0;

  &:nth-child(2) {
  }
`;

export const WorkImageCard = styled.div`
  width: 100%;
  cursor: url(${ViewButton}), auto;
  position: relative;
  max-width: 525px;

  &img {
    box-shadow: 0 2px 38px 0 rgb(0 0 0 / 15%) !important;
    @media (max-width: 425px) {
      width: 300px !important;
    }
  }

  & p {
    font-size: 18px;
  }

  &:hover .descrip {
    opacity: 1;
  }

  @media only screen and (max-width: 1190px) {
    width: 400px;
  }
  @media only screen and (max-width: 500px) {
    width: 300px;
  }
  @media only screen and (max-width: 376px) {
    width: 250px;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
`;

export const WorkCardContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:nth-child(even) {
    justify-content: flex-end;
  }

  &:nth-child(4) {
    margin: 50px 0 100px 0 !important;
    justify-content: center;
  }

  &.center {
    margin: 50px 0 100px 0 !important;
    justify-content: center !important;
  }

  &:nth-child(1) {
    margin-top: 0 !important;
  }

  &:nth-child(5) {
    margin-top: 0 !important;
  }

  &:nth-child(odd) {
    margin-top: 0 !important;
  }

  &:nth-child(3) .view {
    top: 241px !important;
  }

  &:nth-child(4) .view {
    top: 190px !important;
  }

  @media only screen and (max-width: 991px) {
    &:nth-child(odd) {
      margin-top: 0;
    }

    &:nth-child(even) {
      margin-top: 0%;
    }

    &:nth-child(4) {
      margin: auto !important;
    }
  }
`;

export const WorkInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    margin: 16px 0;
  }
`;

export const WorkCardDescrip = styled.div`
  border-top: 1px solid black;

  &.descrip {
    opacity: 0;
    transition: 0.5s ease-in-out;
  }

  & p {
    margin: 16px 0;
  }
`;

export const CardView = styled.div`
  top: 50%;
  left: 36px;
  width: 98px;
  height: 98px;
  color: #fff;
  position: absolute;
  border-radius: 100%;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
  background-color: #00afaa;

  & p {
    margin-bottom: 0;
  }
`;
