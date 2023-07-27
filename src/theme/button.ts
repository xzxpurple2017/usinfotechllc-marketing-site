const baseStyle = {
  border: "1px solid",
  borderColor: "green.200",
  borderRadius: "4px",
  color: "green.200",
  background: "transparent !",
  backgroundColor: "transparent",
  fontSize: "14px !",
  width: "min-content",
  fontWeight: 300,
  padding: "0.75rem 1rem !",
  _hover: {
    backgroundColor: "green.100 !",
  },
};

export default {
  baseStyle,
  variants: {
    unstyled: {
      border: "0px solid",
      padding: "0 !important",
    },
  },
};
