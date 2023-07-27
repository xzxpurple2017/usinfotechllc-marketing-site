import { Flex, Icon, useMediaQuery } from "@chakra-ui/react";
import { SFMono } from "src/general/Text";
import { Link } from "src/general/Link";
import React from "react";
import { SOCIALS } from "./Socials";

export default function Footer(): JSX.Element | null {
  const [isDesktopView] = useMediaQuery("(min-width: 48em)");
  return (
    <Flex flexDirection="column" alignItems="center" marginBottom={8}>
      {!isDesktopView && (
        <Flex gap={4}>
          {SOCIALS.map(({ href, icon }, index) => (
            <Link href={href} isExternal key={index}>
              <Icon boxSize={5} as={icon} />
            </Link>
          ))}
        </Flex>
      )}
      <SFMono size="sm" marginTop={4}>
        Built by Derick Park
      </SFMono>
      <SFMono size="sm">
        Designed by{" "}
        <Link isExternal href="https://brittanychiang.com/">
          Brittany Chiang
        </Link>
      </SFMono>
    </Flex>
  );
}
