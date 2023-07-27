import { Link, Button } from "@chakra-ui/react";
import { NAV_CONTACT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { SFMono, Text } from "src/general/Text";
import { H2 } from "src/general/Heading";

export default function Contact(): JSX.Element {
  return (
    <SectionContainer
      id={NAV_CONTACT_ID}
      gap={4}
      alignItems="center"
      data-aos="fade-up"
    >
      <SFMono fontSize={20} color="green.200" marginTop="auto">
        04. Lets connect
      </SFMono>
      <H2 display="inline" whiteSpace="nowrap" color="slate.100">
        Contact
      </H2>
      <Text textAlign="center" maxWidth='650px'>
        If you would like to get in touch with me regarding potential projects,
        collaborations, or just to say hello, please feel free to contact me via email.
        <br />I look forward to hearing from you!
      </Text>
      <Link marginTop={4} href="mailto:derickminsoopark@gmail.com">
        <Button>Contact</Button>
      </Link>
    </SectionContainer>
  );
}
