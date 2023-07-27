import { Divider, Flex } from "@chakra-ui/react";
import { H2 } from "src/general/Heading";
import { SFMono } from "src/general/Text";

interface ISectionHeader {
  number: string;
  title: string;
}
export default function SectionHeader({ number, title, ...otherProps }: ISectionHeader) {
  return (
    <Flex alignItems="center" gap={2} {...otherProps}>
      <SFMono fontSize={22} color="green.200" marginTop="auto">
        {number}
      </SFMono>
      <H2 display="inline" whiteSpace="nowrap" color="slate.100">
        {" "}
        {title}
      </H2>
      <Divider borderColor="navy.200" marginLeft={4} width="200px" />
    </Flex>
  );
}
