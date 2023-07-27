import React from "react";
import { Text as BaseText, TextProps as BaseTextProps } from "@chakra-ui/react";

export type TextProps = {
  /** add custom props here if any */
} & BaseTextProps;

export const Text = (props: TextProps) => {
  const { ...baseHeadingProps } = props;
  return <BaseText {...baseHeadingProps} />;
};

export const SFMono = (props: TextProps) => {
  const { ...baseHeadingProps } = props;
  return (
    <BaseText
      fontFamily={'"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace'}
      {...baseHeadingProps}
    />
  );
};
