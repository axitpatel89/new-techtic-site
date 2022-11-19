import styled from "styled-components";
import theme from "../../../theme";

export const BannerSection = styled.div`
  margin: 104px 0 107px;
`;

export const SubTitle = styled.div`
  max-width: 925px;
  margin-top: 54px;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  color: ${theme.black};

  @media (max-width: 768px) {
    font-weight: 300;
    font-size: 28px;
    line-height: 34px;
  }
`;
