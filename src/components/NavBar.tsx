import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "src/general/Text";
import React, { useEffect, useState } from "react";
import { Link } from "src/general/Link";
import { useMediaQuery } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SFMono } from "src/general/Text";
import { Logo } from "./shared/Logo";

const SCROLL_STATE_TOP = "SCROLL_STATE_TOP";
const SCROLL_STATE_DOWN = "SCROLL_STATE_DOWN";
const SCROLL_STATE_UP = "SCROLL_STATE_UP";

export const NAV_ABOUT_ID = "about";
export const NAV_EXPERIENCE_ID = "experience";
export const NAV_PORTFOLIO_ID = "portfolio";
export const NAV_CONTACT_ID = "contact";

const NAV_LINKS = [
  {
    text: "About",
    href: `#${NAV_ABOUT_ID}`,
  },
  {
    text: "Experience",
    href: `#${NAV_EXPERIENCE_ID}`,
  },
  {
    text: "Portfolio",
    href: `#${NAV_PORTFOLIO_ID}`,
  },
  {
    text: "Contact",
    href: `#${NAV_CONTACT_ID}`,
  },
];

export default function NavBar() {
  const [scrollState, setScrollState] = useState(SCROLL_STATE_TOP);
  // Larger than breakpoint md
  const [isDesktopView] = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollState(SCROLL_STATE_TOP);
      } else if (currentScroll > lastScroll) {
        setScrollState(SCROLL_STATE_DOWN);
      } else if (currentScroll < lastScroll) {
        setScrollState(SCROLL_STATE_UP);
      }
      lastScroll = currentScroll;
    });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      padding="0 40px"
      alignItems="center"
      position="fixed"
      width="100%"
      transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
      zIndex="nav"
      transform={
        scrollState === SCROLL_STATE_DOWN
          ? "translate3d(0, -100%, 0)"
          : "translateY(0px)"
      }
      height={scrollState === SCROLL_STATE_UP ? "navScrollH" : "navH"}
      bgColor="rgba(10, 25, 47, 0.85)"
      backdropFilter="blur(3px)"
      filter={
        scrollState === SCROLL_STATE_UP
          ? "drop-shadow(0 10px 30px rgba(2,12,27,0.7))"
          : "none"
      }
      justifyContent="space-between"
    >
      <Logo />
      {isDesktopView ? (
        <>
          <Flex gap={8} alignItems="center">
            {NAV_LINKS.map((link, index) => (
              <NavLink {...link} key={index} index={index} />
            ))}
            <Link download href="/assets/Resume.pdf" isExternal>
              <Button data-aos="fade-down" data-aos-delay={500}>
                Resume
              </Button>
            </Link>
          </Flex>
        </>
      ) : (
        <>
          <Button
            variant="unstyled"
            data-aos="fade-down"
            padding={0}
            ref={btnRef}
            _hover={{
              opacity: 0.1,
            }}
          >
            <RxHamburgerMenu size={40} onClick={onOpen} color="#64ffda" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="navy.300">
              <DrawerCloseButton right={4} top={4} />
              <DrawerBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={6}
              >
                {NAV_LINKS.map((link, index) => (
                  <NavLink {...link} key={index} index={index} />
                ))}
                <Link download href="/assets/Resume.pdf" isExternal>
                  <Button
                    data-aos="fade-down"
                    data-aos-delay={500}
                    marginTop={20}
                  >
                    Resume
                  </Button>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
}

interface INavLink {
  index: number;
  text: string;
  href: string;
}

function NavLink({ index, text, href }: INavLink): JSX.Element {
  return (
    <Link href={href}>
      <SFMono
        color="slate.100"
        fontSize={{ base: "18px", md: "14px" }}
        _before={{
          content: `"0${index + 1}."`,
          marginRight: "5px",
          color: "green.200",
          fontSize: { base: "16px", md: "14px" },
        }}
        data-aos="fade-down"
        data-aos-delay={(index + 1) * 100}
      >
        {text}
      </SFMono>
    </Link>
  );
}
