import styled from "styled-components";
import { Button, Col } from "antd";
import theme from "../../theme";

export const FooterContent = styled(Col)`
  background: ${theme.black};
  color: ${theme.white};
  padding-top: 112px;
  padding-left: 75px;
  padding-right: 50px;
  font-size: 16px;
  line-height: 20px;
  h3 {
    margin-bottom: 40px !important;
  }
  .ant-typography {
    color: ${theme.white};
  }

  @media (max-width: 991px) {
    padding-top: 72px;
    padding-bottom: 100px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const FooterCol = styled.div`
  max-width: 393px;
  & iframe {
    height: 230px;
    width: 100%;
    @media (max-width: 360px){
      height: 270px;
      width: 100%;
    }
  }
  .ant-row {
    margin-bottom: 0;
  }

  .ant-form-item-control-input {
    min-height: 70px !important;
    @media (max-width: 991px) {
      min-height: 56px !important;
    }
  }
`;

export const Paragraph = styled.div`
  margin-bottom: 12px;
`;

export const EmailLinkCont = styled.div`
  max-width: fit-content;
  border-bottom: 1px solid ${theme.white};
  &:hover {
    border-bottom: 1px solid cyan;
  }
`;
export const EmailLink = styled.a`
  margin-bottom: 50px !important;
  color: ${theme.white};
  &:hover {
    color: ${theme.cyan};
  }
`;

export const InputText = styled.input`
  margin-bottom: 0;
  padding: 0;
  background: none;
  color: ${theme.white};
  border: none;
  border-bottom: 1px solid ${theme.white};
  padding-bottom: 4px;
  width: 100%;
  &::placeholder {
    color: ${theme.white};
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

export const FooterButton = styled(Button)`
  position: absolute;
  background: none;
  border: none;
  color: ${theme.white};
  top: -70px;
  right: 0;
  padding: 0;
  height: auto;
  line-height: auto;
  font-weight: 300;
  box-shadow: none;
  font-size: 16px;
  line-height: 21px;
  &:hover,
  &:focus {
    background: none;
    color: ${theme.cyan};
  }
`;

export const FooterNavigation = styled.li`
  list-style: none;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    color: ${theme.white};
    font-weight: 300;
    &:hover {
      color: ${theme.cyan};
    }
  }
`;

export const ContactUsSection = styled(Col)`
  @media (max-width: 991px) {
    margin-bottom: 72px;
  }
`;
