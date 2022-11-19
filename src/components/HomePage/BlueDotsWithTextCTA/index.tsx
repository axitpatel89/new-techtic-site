import * as React from "react";
import {
  BlueDotsWithTextCTAComponent,
  BlueDot,
  CTAInner,
  Paragraph,
} from "./style";
import { Row, Col } from "antd";

export const BlueDotsWithTextCTA = ({ Points }: any) => {
  return (
    <BlueDotsWithTextCTAComponent>
      <Row gutter={[125, 0]}>
        {Points.map(({ pointContent, index }: any) => {
          return (
            <Col key={index} xs={24} sm={8} md={8} lg={8} xl={8}>
              <CTAInner>
                <BlueDot></BlueDot>
                <Paragraph dangerouslySetInnerHTML={{ __html: pointContent }} />
              </CTAInner>
            </Col>
          );
        })}
      </Row>
    </BlueDotsWithTextCTAComponent>
  );
};
