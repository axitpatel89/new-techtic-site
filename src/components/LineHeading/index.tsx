import { Col, Row } from "antd";
import React from "react";
import { LineHeadingComponent } from "./style";

interface Props {
    title: any,
    number: any,
    color?: string,
}

export const LineHeading: React.FC<Props> = ({ title, number, color }: Props) => {
    return(
        <LineHeadingComponent color={color}>
            <Row style={{ paddingTop: '8px' }}>
                <Col span={12}>{title}</Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    {number}
                </Col>
            </Row>
        </LineHeadingComponent>
    )
}