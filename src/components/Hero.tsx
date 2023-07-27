import { Box, Flex, Button } from "@chakra-ui/react";
import { H1 } from "src/general/Heading";
import { Link } from "src/general/Link";
import { Text, SFMono } from "src/general/Text";

export default function Hero(): JSX.Element {
  return (
    <Flex alignItems="center" height="100vh">
      <Flex flexDirection="column" gap={8}>
        <SFMono color="green.200" data-aos="fade-down" data-aos-delay={600}>
          Hi, my name is
        </SFMono>
        <Box>
          <H1 color="slate.100" data-aos="fade-down" data-aos-delay={700}>
            Derick Park.
          </H1>
          <H1 data-aos="fade-down" data-aos-delay={800}>
            I build things for the web.
          </H1>
        </Box>
        <Text maxWidth={540} data-aos="fade-down" data-aos-delay={900}>
          I am a software engineer specialized in building beautiful
          applications using modern frontend and backend technologies!
        </Text>
        <Link download href="/assets/Resume.pdf" isExternal>
          <Button data-aos="fade-down" data-aos-delay={1000}>
            Resume
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
