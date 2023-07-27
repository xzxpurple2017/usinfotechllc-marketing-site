import { Flex, FlexProps as BaseFlexProps } from "@chakra-ui/react";

type TSectionContainer = {
  children: React.ReactNode;
  id: string;
} & BaseFlexProps;

export default function SectionContainer({
  children,
  id,
  ...otherProps
}: TSectionContainer): JSX.Element {
  return (
    <Flex flexDirection="column" id={id} gap={10} py={100} {...otherProps}>
      {children}
    </Flex>
  );
}
