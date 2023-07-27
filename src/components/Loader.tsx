import { Flex } from "@chakra-ui/react";
import { LoaderLogo } from "src/components/shared/Logo";

export default function Loader() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
    >
      <LoaderLogo />
    </Flex>
  );
}
