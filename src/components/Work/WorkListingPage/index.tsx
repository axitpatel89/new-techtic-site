import React, { useState } from "react";
import { GlobalContainer } from "../../Global/layout";
import {
  StyledWorkImages,
  StyledIndustryList,
  StyledIndustryName,
  StyledIndustryDropDown,
  StyledRow,
  StyledLoadingButton,
  StyledIndustryList2,
} from "./style";
import { Col, Row } from "antd";
import { BlackButton } from "../../Global/button";
import { DownOutlined } from "@ant-design/icons";
import { usePerentCategory } from "../../../querys/workPageQuery/usePerentCategory";
import { useChildCategory } from "../../../querys/workPageQuery/useChildCategory";
import WorkImage from "./workImage";

const WorkImages = ({ ImageContent }: any) => {
  const { ParentCategory } = usePerentCategory();
  const { ChildCategory } = useChildCategory();

  const [filterChild, setFilterChild] = useState(ParentCategory[0].label);

  const [filterWorks, setFilterWorks] = useState(ParentCategory[0].label);

  const handelParentCategory = (ParantCategory: any) => {
    setFilterChild(ParantCategory);
    setFilterWorks(ParantCategory);
    setCount(6);
  };

  const handleChildCategory = (ChildCategoryName: any) => {
    setFilterWorks(ChildCategoryName);
    setCount(6);
  };

  const [count, setCount] = useState(6);
  const [isbtnAvilable, setisbtnAvilable] = useState(true);

  const [isMenuShow, setIsMenuShow] = useState(false);

  const onClickLoadMore = () => {
    if (ImageContent?.length > count) {
      setCount(count + 6);
      return;
    }

    setisbtnAvilable(false);
  };

  const handleByIndustryBtn = () => {
    setIsMenuShow(!isMenuShow);
  };

  const arraylength = ImageContent.filter(
    (data: any) =>
      JSON.stringify(data).toLowerCase().indexOf(filterWorks?.toLowerCase()) !==
      -1
  );

  console.log("work array length", arraylength);

  return (
    <GlobalContainer>
      <StyledWorkImages>
        <StyledRow>
          <Col xs={24} xl={20}>
            <StyledIndustryList>
              {ParentCategory.map((item: any, index: number) => {
                const ParantCategory = item.label;
                return (
                  <StyledIndustryName
                    onClick={() => handelParentCategory(ParantCategory)}
                    key={index}
                    className={filterChild === ParantCategory ? "active" : ""}
                  >
                    {item.label}
                  </StyledIndustryName>
                );
              })}
            </StyledIndustryList>
          </Col>
          <Col xs={24} xl={4}>
            <StyledIndustryDropDown onClick={handleByIndustryBtn}>
              <p>By Industry</p>
              <DownOutlined
                rotate={isMenuShow && "180"}
                style={{ paddingLeft: "10px", fontSize: "15px" }}
              />
            </StyledIndustryDropDown>
          </Col>
        </StyledRow>
        <Row className={isMenuShow ? "" : "hide_manu"}>
          <Col xs={24} xl={20}>
            <StyledIndustryList>
              {ChildCategory.filter((item) =>
                item.wpParent?.node.name.includes(filterChild)
              ).map((item: any, index: number) => {
                const ChildCategoryName = item.name;
                return (
                  <StyledIndustryName
                    onClick={() => handleChildCategory(ChildCategoryName)}
                    key={index}
                    className={
                      filterWorks === ChildCategoryName ? "active" : ""
                    }
                  >
                    {item.name}
                  </StyledIndustryName>
                );
              })}
            </StyledIndustryList>
          </Col>
        </Row>
        {/* Works listing component*/}
        <WorkImage
          AllWorks={ImageContent}
          count={count}
          SubCategoryName={filterWorks}
        />

        {/* {isbtnAvilable && (
          <StyledLoadingButton>
            <BlackButton onClick={onClickLoadMore}>Load More</BlackButton>
          </StyledLoadingButton>
        )} */}

        {arraylength.length > 6 && arraylength.length > count &&  (
          <StyledLoadingButton>
            <BlackButton onClick={onClickLoadMore}>Load More</BlackButton>
          </StyledLoadingButton>
        )}
      </StyledWorkImages>
    </GlobalContainer>
  );
};

export default WorkImages;
