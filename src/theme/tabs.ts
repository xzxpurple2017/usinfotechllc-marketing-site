const baseStyle = {
  tablist: {
    color: "slate.300",
    height: "min-content",
  },
  tabpanel: {
    padding: {
      base: '40px 0px 0px 0px',
      md: '0px 0px 0px 12px',
    },
  },
  tab: {
    fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
    opacity: 0.5,
    justifyContent: 'flex-start',
    _active: {
      bg: "inherit",
    },
    _selected: {
      color: "green.200",
      opacity: 1,
    },
    _hover: {
      opacity: 1,
    },
  },
};

export default {
  baseStyle,
};
