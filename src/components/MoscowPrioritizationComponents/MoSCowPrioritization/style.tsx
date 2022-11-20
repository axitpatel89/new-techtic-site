import styled from "styled-components";
import theme from "../../../theme";

export const BlackBackground = styled.div`
  background-color: ${(props) => props.color || theme.white};
  padding-top: 156px;
  padding-bottom: 156px;
  margin-bottom: 156px;
  color: ${theme.white} !important;
  @media (max-width: 426px) {
    padding-top: 72px;
    padding-bottom: 96px;
    margin-bottom: 124px;
  }
`;

export const Imagecont = styled.div`
  width: 50%;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 75%;
    margin-bottom: 75px;
  }

  @media (max-width: 426px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const ContentList = styled.div`
  ul {
    max-width: 724px;
    list-style-type: none;
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 75px;
    }

    @media (max-width: 426px) {
      margin-top: 50px;
    }
  }

  li {
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 20px;
  }
`;
