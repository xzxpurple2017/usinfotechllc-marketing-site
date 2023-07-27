import React from "react";
import { SFMono } from "src/general/Text";
import { Text } from "src/general/Text";

export function Pointer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Text
      _before={{
        content: '"▹"',
        position: "absolute",
        left: "0px",
        top: "4px",
        color: "green.200",
        fontSize: "16px",
        lineHeight: "16px",
      }}
      size='xmd'
      position="relative"
      paddingLeft={5}
      display="flex"
    >
      {children}
    </Text>
  );
}

export function SFMonoPointer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <SFMono
      size="sm"
      _before={{
        content: '"▹"',
        position: "absolute",
        left: "0px",
        top: "4px",
        color: "green.200",
        lineHeight: "12px",
      }}
      position="relative"
      paddingLeft={5}
      display="flex"
    >
      {children}
    </SFMono>
  );
}
