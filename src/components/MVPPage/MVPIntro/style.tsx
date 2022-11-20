import styled from "styled-components";

export const MVPBannerSection = styled.div`
  margin-top: 72px;
  margin-bottom: 248px;
  @media (max-width: 992px) {
    margin-bottom: 112px;
  }
`;

export const BannerDescription = styled.div`
  max-width: 809px;
  p {
    margin-top: 56px;
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
  }
`;

export const BannerList = styled.div`
  p {
    max-width: 610px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
  }

  ul {
    list-style-type: none;
  }
  li {
    font-size: 20px;
    font-weight: 300;
    line-height: 35px;
  }
`;
