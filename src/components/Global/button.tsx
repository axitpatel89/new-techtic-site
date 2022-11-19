import styled from "styled-components";
import { Button } from "antd";
import theme from "../../theme";

export const PrimaryButton = styled(Button)`
  background: ${theme.cyan};
  padding: 0px 44px;
  height: 45px !important;
  line-height: 45px;
  font-size: 16px;
  border-radius: 30px;
  color: ${theme.white};
  line-height: normal;
  height: auto;
  border: none;
  &:hover,
  &:focus {
    background: ${theme.white};
    color: ${theme.cyan};
  }
`;

export const BlackButton = styled(PrimaryButton)`
  background: ${theme.black};
  height: 45px;
  /* line-height: 45px; */
  font-size: 16px;
  &:hover,
  &:focus {
    background: ${theme.cyan};
    color: ${theme.white};
  }
`;

export const ViewButton = styled(Button)`
  width: 98px;
  height: 98px;
  line-height: 98px;
  background: ${theme.cyan};
  text-align: center;
  border-radius: 50%;
  color: ${theme.white};
  position: absolute;
  left: 36px;
  bottom: 145px;
  border: none;
  font-size: 18px;
  line-height: 18px;
  &:hover {
    color: ${theme.cyan};
  }
`;
export const SecondaryButton = styled(BlackButton)`
  background: transparent;
  border: 2px solid ${theme.white};
  padding: 0px 29px;
`;
