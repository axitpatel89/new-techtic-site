import styled from "styled-components";

export const ImageCol = styled.div`
  display: flex;
  flex-direction: row !important;
  margin-top: 133px;
  margin-bottom: 156px;

  @media (max-width: 768px) {
    margin-top: -37px;
    margin-bottom: 124px;
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
