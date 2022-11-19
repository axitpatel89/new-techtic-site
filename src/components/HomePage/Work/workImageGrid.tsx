import React from "react";
import { ProductTag, WorkBoxInner, WorkImg, WorkName, WorkRow } from "./style";
import { navigate, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const WorkImageGrid = ({ WorkData }: any) => {
  const handleViewBtn = (url: any) => {
    navigate(url);
  };

  return (
    <>
      <WorkRow>
        {WorkData.caseStudy.map((item: any, index: number) => {
          const url = item.link;
          return (
            <div className="work-box" key={index}>
              <WorkBoxInner>
                <Link to={url}>
                  <WorkImg>
                    <GatsbyImage
                      image={item.featuredImage.node.gatsbyImage}
                      alt={item.featuredImage.node.altText}
                    />
                  </WorkImg>
                  <div className="work-info">
                    <WorkName>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item.newCaseStudy.shortContent,
                        }}
                      />
                      <ProductTag>
                        {item.caseStudyCategory.nodes[0].name}
                      </ProductTag>
                    </WorkName>
                    <div className="description-project-info">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </Link>
              </WorkBoxInner>
            </div>
          );
        })}
      </WorkRow>
    </>
  );
};
