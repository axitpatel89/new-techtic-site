import styled from "styled-components";
import theme from "../../theme";

export const LineHeadingComponent = styled.div`
  border-top: 1px solid ${props => props.color || theme.black};
  padding-bottom: 112px;
  color: ${props => props.color || theme.black};
  font-weight: 400 !important;

  @media (max-width: 768px) {
    padding-bottom: 72px;
  }
  @media (max-width: 390px) {
    padding-bottom: 72px;
  }
`;
