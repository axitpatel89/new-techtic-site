import styled from "styled-components";
import theme from "../../../theme";

export const WhyUsSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
`;

export const ImageCol = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 158px;

  @media (max-width: 768px) {
    margin-top: 96px;
  }

  & div:first-child {
    width: 715px;
    height: 512px;
    @media (max-width: 426px) {
      width: 100%;
      height: 100%;
    }
  }
  & div:last-child {
    width: 820px;
    height: 552px;
    margin-top: 72px !important;
    margin-left: -315px !important;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Div = styled.div`
  max-width: 820px;
  margin: 156px auto 248px !important;

  @media (max-width: 426px) {
    margin: 113px auto 123px !important;
  }
`;
