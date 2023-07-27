import React from "react";
import {
  Heading as BaseHeading,
  HeadingProps as BaseHeadingProps,
} from "@chakra-ui/react";

export type HeadingProps = {
  /** add custom props here if any */
} & BaseHeadingProps;

export const H1 = (props: HeadingProps) => {
  const { ...baseHeadingProps } = props;
  return (
    <BaseHeading
      as="h1"
      size={{
        base: "xl",
        md: "xxl",
      }}
      {...baseHeadingProps}
    />
  );
};

export const H2 = (props: HeadingProps) => {
  const { ...baseHeadingProps } = props;
  return <BaseHeading as="h2" size="lg" {...baseHeadingProps} />;
};

export const H3 = (props: HeadingProps) => {
  const { ...baseHeadingProps } = props;
  return <BaseHeading as="h3" size="md" {...baseHeadingProps} />;
};

export const H4 = (props: HeadingProps) => {
  const { ...baseHeadingProps } = props;
  return <BaseHeading as="h4" size="sm" {...baseHeadingProps} />;
};
