import styled from "styled-components";
import theme from "../../../theme";
import { AboutParagraph } from "../../Global/globalStyle";

export const ServiceInnerIntroConut = styled.div`
  margin-top: 63px;
  background-color: ${(props) => props.color || theme.white};

  @media (max-width: 426px) {
    margin-top: 50px;
  }

  img {
    margin-top: 96px;

    @media (max-width: 767px) {
      margin-top: 72px;
    }
  }
`;

export const Description = styled(AboutParagraph)`
  max-width: 820px;
  margin: 156px auto 248px !important;

  @media (max-width: 768px) {
    margin: 135px auto 183px !important;
  }

  @media only screen and (max-width: 575px) {
    margin: 96px 0 123px 0 !important;
  }
`;
