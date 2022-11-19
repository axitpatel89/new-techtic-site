import * as React from "react";
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5 } from "./layout";

interface Props {
  maxWidth?: string | number;
  color?: string;
  text?: any;
  style?: {
    [key: string]: Object[];
  };
}

export const StyledHeadingh1: React.FC<Props> = ({
  maxWidth,
  color,
  text,
  style,
}: Props) => {
  return (
    <StyledH1
      style={{ maxWidth: maxWidth, color: color, ...style }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const StyledHeadingh2: React.FC<Props> = ({
  maxWidth,
  color,
  text,
}: Props) => {
  return (
    <StyledH2
      style={{ maxWidth: maxWidth, color: color }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const StyledHeadingh3: React.FC<Props> = ({
  maxWidth,
  color,
  text,
  style,
}: Props) => {
  return (
    <StyledH3
      style={{ maxWidth: maxWidth, color: color, ...style }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const StyledHeadingh4: React.FC<Props> = ({
  maxWidth,
  color,
  text,
}: Props) => {
  return (
    <StyledH4
      style={{ maxWidth: maxWidth, color: color }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export const StyledHeadingh5: React.FC<Props> = ({
  maxWidth,
  color,
  text,
}: Props) => {
  return (
    <StyledH5
      style={{ maxWidth: maxWidth, color: color }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
