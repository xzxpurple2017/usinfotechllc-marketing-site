import { extendTheme } from "@chakra-ui/react";
import Button from "./button";
import Link from "./link";
import Heading from "./heading";
import Tabs from "./tabs";
import Text from "./text";

const theme = {
  styles: {
    global: {
      ["*"]: {
        scrollBehavior: "smooth !important",
      },
      html: {
        overflowX: "hidden",
      },
      body: {
        color: "slate.300",
        bg: "navy.400",
        transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
        fontFamily: `"Raleway","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif`,
      },
      [`::-webkit-scrollbar`]: {
        width: "12px",
      },
      [`::-webkit-scrollbar-thumb`]: {
        bgColor: "slate.400",
        border: "3px solid",
        borderColor: "navy.400",
        borderRadius: "10px",
      },
      [`::-webkit-scrollbar-track`]: {
        bgColor: "navy.400",
      },
    },
  },
  zIndices: {
    nav: 100,
  },
  sizes: {
    navH: "100px",
    navScrollH: "70px",
  },
  shadows: {},
  breakpoints: {},
  colors: {
    navy: {
      100: "rgba(2,12,27,0.7)", // navy-shadow
      200: "#233554", // lightest-navy
      300: "#112240", // light-navy
      400: "#0a192f", // navy
      500: "#020c1b", // dark-navy
    },
    slate: {
      100: "#ccd6f6", // lightest-slate
      200: "#a8b2d1", // light-slate
      300: "#8892b0", // slate
      400: "#495670", // dark-slate
    },
    green: {
      100: "rgba(100,255,218,0.1)", // green-tint
      200: "#64ffda", // green
    },
    white: "#e6f1ff", // white
    pink: "#f57dff", // pink
    blue: "#57cbff", // blue
  },
  components: {
    Button,
    Heading,
    Link,
    Tabs,
    Text,
  },
};

export default extendTheme(theme);
