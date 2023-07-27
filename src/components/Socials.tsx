import {
  Flex,
  Icon,
  Divider,
  FlexProps,
  useMediaQuery,
} from "@chakra-ui/react";
import { SFMono } from "src/general/Text";
import { Link } from "src/general/Link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";
import { IconType } from "react-icons/lib";

interface ISocial {
  href: string;
  icon: IconType;
}

export const SOCIALS: ISocial[] = [
  {
    href: "https://github.com/parkderick",
    icon: FiGithub,
  },
  {
    href: "https://www.linkedin.com/in/derick-park-97bb37b0/",
    icon: FiLinkedin,
  },
];

export default function Socials(): JSX.Element | null {
  const [isDesktopView] = useMediaQuery("(min-width: 48em)");
  if (isDesktopView) {
    return (
      <>
        {/* Social Media */}
        <FixedContent left={5} data-aos="fade-right">
          {SOCIALS.map(({ href, icon }, index) => (
            <Link href={href} isExternal key={index}>
              <Icon boxSize={5} as={icon} />
            </Link>
          ))}
        </FixedContent>

        {/* Email */}
        <FixedContent right={5} data-aos="fade-left" >
          <SFMono size="sm" sx={{ writingMode: "vertical-rl" }}>
            derickminsoopark@gmail.com
          </SFMono>
        </FixedContent>
      </>
    );
  }
  return null;
}

function FixedContent({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
} & FlexProps): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      position="fixed"
      bottom={0}
      alignItems="center"
      gap={4}
      data-aos-delay={1100}
      {...otherProps}
    >
      {children}
      <Divider orientation="vertical" height="90px" />
    </Flex>
  );
}
