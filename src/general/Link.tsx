import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as BaseLinkProps,
} from "@chakra-ui/react";

type LinkProps = {
  href: string;
  /** add custom props here if any */
} & BaseLinkProps;

export function Link({ children, href, ...others }: LinkProps) {
  const linkProps = others?.isExternal ? { target: "_blank" } : {};
  return (
    <NextLink href={href} passHref {...linkProps}>
      <ChakraLink {...others}>{children}</ChakraLink>
    </NextLink>
  );
}
