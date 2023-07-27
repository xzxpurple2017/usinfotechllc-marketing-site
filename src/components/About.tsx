import { Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import { SFMonoPointer } from "src/components/shared/Pointer";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_ABOUT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About(): JSX.Element {
  const [isDesktopView] = useMediaQuery("(min-width: 48em)");
  return (
    <SectionContainer id={NAV_ABOUT_ID}>
      <SectionHeader number="01." title={`About Me`} data-aos="fade-up" />
      <Grid
        color="slate.300"
        justifyItems="center"
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        gap={10}
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <Flex flexDirection="column">
          <Text size="xmd">
            Hello, my name is Derick Park, and I am a passionate React frontend
            engineer with 2+ years of experience building dynamic and responsive
            web applications. My passion for software engineering really stems
            from my passion to think critically and solve problems, all while
            being able to stay in creative control.
            <br />
            <br />
            Throughout my career, I have honed my skills in React and its
            ecosystem, including React Router, React Query, Redux, NextJS,
            Chakra UI, and more. I am also experienced in utilizing modern
            frontend tools such as Typescript, Webpack, and ESLint to streamline
            development and ensure code quality.
            <br />
            <br />
            In my free time, I enjoy working on side projects, and staying up to
            date with the latest trends in the frontend development community. I
            am always excited to learn and collaborate with others to build
            amazing web experiences.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
            <br />
            <br />
          </Text>
          <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap={2}>
            <SFMonoPointer>Typescript</SFMonoPointer>
            <SFMonoPointer>GraphQL</SFMonoPointer>
            <SFMonoPointer>NextJS</SFMonoPointer>
            <SFMonoPointer>ReduxJS</SFMonoPointer>
            <SFMonoPointer>React Query</SFMonoPointer>
            <SFMonoPointer>Chakra UI</SFMonoPointer>
          </Grid>
        </Flex>
        <Player
          autoplay
          loop
          src="/lottie.json"
          style={{
            height: isDesktopView ? "400px" : "100%",
            width: isDesktopView ? "400px" : "100%",
          }}
        />
      </Grid>
    </SectionContainer>
  );
}
