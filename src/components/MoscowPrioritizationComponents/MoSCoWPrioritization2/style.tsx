import { Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";

export const ContentRow = styled(Row)`
  /* margin-top: 135px;
  margin-bottom: 127px; */
`;

export const Heading = styled.div`
  font-size: 64px;
  font-weight: 300;
  line-height: 83px;
  @media (max-width: 890px) {
    font-weight: 300;
    font-size: 58px;
    line-height: 68px;
  }
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 44px;
    line-height: 62px;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 36px;
    line-height: 55px;
  }
`;

export const RightContent = styled.div`
  max-width: 555px;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  @media (max-width: 992px) {
    margin-top: 45px;
  }
`;

export const SubHeading = styled.div`
  font-size: 64px;
  font-weight: 300;
  line-height: 83px;
  max-width: 977px;
  margin-top: 135px;
  margin-bottom: 127px;
  @media (max-width: 890px) {
    font-weight: 300;
    font-size: 58px;
    line-height: 68px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 44px;
    line-height: 62px;
    margin-top: 72px;
    margin-bottom: 50px;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 36px;
    line-height: 55px;
  }
`;

export const TechniqueContainer  = styled(Row)`
  margin-bottom: 204px;
  .ant-col:nth-child(2n){
    margin-top: 176px;
  }

  @media (max-width: 575px) {
    margin-bottom: 50px;
    .ant-col:nth-child(2n){
    margin-top: 0px;
  }
  }
`

export const BlackDiv = styled.div`
  width: auto;
  height: 224px;
  background: ${theme.black};
  font-size: 128px;
  display: flex;
  color: ${theme.white};
  align-items: center;
  justify-content: center;

@media (max-width: 575px) {
  margin-top: 40px;
}

`;

export const BoxTitle = styled.p`
  font-size: 40px;
  font-weight: 300;
  line-height: 52px;
  margin-top: 30px;
`;

export const BoxDesc = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 36px;
`;
