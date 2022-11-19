import styled from "styled-components";

export const ServiceIntroOuter = styled.div`
  margin-top: 101px;

  @media (max-width: 426px) {
    margin-top: 50px;
  }
`;

export const Paragraph = styled.div`
  font-size: 40px;
  line-height: 48px;
  margin-top: 56px;
  max-width:925px;
  margin-bottom: 0px;

  @media (max-width: 890px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 26px;
    margin-top: 24px;
  }
`;