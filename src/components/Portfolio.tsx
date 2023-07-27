import {
  Box,
  Icon,
  Flex,
  Image,
  Link,
  Grid,
  AspectRatio,
} from "@chakra-ui/react";
import { H3 } from "src/general/Heading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_PORTFOLIO_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { SFMono, Text } from "src/general/Text";
interface IProject {
  company: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
  github: string;
}

const PROJECTS: IProject[] = [
  {
    company: "Dapper Labs",
    title: "Dapper Creator",
    description:
      "Dapper Creator is a platform that empowers creators to build, publish, and monetize their own NFTs using Dapper Labs' proprietary technology with little to no coding experience.",
    stack: ["Typescript", "React", "ChakraUI", "NextJS", "GraphQL", "Firebase"],
    image: "assets/dappercreatorsc.png",
    href: "https://genesis.seedsofhappiness.io/SeedsOfHappinessGenesis",
    github: "https://github.com/dapperlabs/dapper-creator-platforms-app",
  },
  {
    company: "Dapper Labs",
    title: "Genies Warehouse",
    description:
      "The Warehouse is an NFT marketplace where you can purchase unique digital clothing for 3D Genies Avatars. In The Warehouse, you can follow the latest Drops to build your wardrobe with items like masks, shoes, backpacks, and more.",
    stack: ["Typescript", "React", "ChakraUI", "NextJS", "GraphQL"],
    image: "assets/geniessc.png",
    href: "https://warehouse.genies.com/collection",
    github: "https://github.com/dapperlabs/genies-app",
  },
  {
    company: "Dapper Labs",
    title: "Laliga Golazos",
    description:
      "The LaLiga Golazos NFT marketplace offers NFT collectibles in the form of video highlights transformed into assets featuring the most iconic plays from all the clubs part of LaLiga Santander since the 2005-2006 season, as well as key plays from each matchday of the current season.",
    stack: ["Typescript", "React", "ChakraUI", "NextJS"],
    image: "assets/laligasc.png",
    href: "https://laligagolazos.com/",
    github: "https://github.com/dapperlabs/laliga-landing",
  },
  {
    company: "Axiom Zen",
    title: "Toby App",
    description:
      "Toby is a Google Chrome extension that provides users with a way to organize and manage their browser tabs more effectively. With Toby, users can save and categorize their tabs into collections or lists, which can be easily accessed and reopened at any time.",
    stack: [
      "React",
      "Redux",
      "Styled Components",
      "ChakraUI",
      "Webpack",
      "REST APIs",
    ],
    image: "assets/tobyappsc.png",
    href: "https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip?hl=en",
    github: "https://github.com/axiomzen/toby",
  },
  {
    company: "Axiom Zen",
    title: "Toby Website",
    description:
      "Toby is a useful tool for anyone who wants to manage their browser tabs more efficiently and stay organized while browsing the web.",
    stack: ["React", "React Router", "SASS/SCSS", "Webpack", "Poet"],
    image: "assets/tobywebsitesc.png",
    href: "https://gettoby.com/",
    github: "https://github.com/axiomzen/toby-landing",
  },
];

export default function Portfolio(): JSX.Element {
  return (
    <SectionContainer id={NAV_PORTFOLIO_ID}>
      <SectionHeader number="03." title={`Portfolio`} data-aos="fade-up" />
      <Flex flexDirection="column" gap={{ base: "70px", lg: "120px" }}>
        {PROJECTS.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </Flex>
    </SectionContainer>
  );
}

const LEFT_SIDE_IMAGE_COLUMN = "1 / span 7";
const RIGHT_SIDE_IMAGE_COLUMN = "6 / -1";
const LEFT_SIDE_CONTENT_COLUMN = "1 / 7";
const RIGHT_SIDE_CONTENT_COLUMN = "7 / -1";

function Project({
  project,
  index,
}: {
  project: IProject;
  index: number;
}): JSX.Element {
  const { company, title, description, stack, image, href, github } = project;
  const isEven = index % 2 === 0;

  return (
    <Grid
      gridTemplateColumns="repeat(12, 1fr)"
      data-aos={isEven ? "fade-right" : "fade-left"}
      data-aos-delay={100}
      gridTemplateRows={{ sm: "min-content", lg: "400px" }}
    >
      <AspectRatio
        gridColumn={{
          base: "1 / -1",
          lg: isEven ? LEFT_SIDE_IMAGE_COLUMN : RIGHT_SIDE_IMAGE_COLUMN,
        }}
        gridRow="1/1"
        width="100%"
        bgColor="green.200"
        borderRadius={4}
        _hover={{
          bgColor: "transparent",
          [".overlay"]: {
            backgroundColor: "transparent",
            opacity: 1,
          },
          [".image-container"]: {
            filter: "none",
            mixBlendMode: "normal",
          },
        }}
      >
        <Link isExternal href={href} position="relative">
          <Box
            className="image-container"
            transition="all 0.1s cubic-bezier(0.645,0.045,0.355,1)"
            mixBlendMode="multiply"
            filter={{
              base: "grayscale(100%) contrast(1) brightness(20%)",
              lg: "grayscale(100%) contrast(1) brightness(100%)",
            }}
            height="100%"
            boxShadow="0 10px 30px -15px"
            color="navy.100"
          >
            <Image alt={title} src={image} objectFit="cover" height="100%" />
          </Box>
          <Box
            transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
            backgroundColor="#133241"
            position="absolute"
            width="100%"
            height="100%"
            top={0}
            opacity={0.6}
            className="overlay"
          ></Box>
        </Link>
      </AspectRatio>

      <Box
        position="relative"
        width="100%"
        gridColumn={{
          base: "1 / -1",
          lg: isEven ? RIGHT_SIDE_CONTENT_COLUMN : LEFT_SIDE_CONTENT_COLUMN,
        }}
        gridRow="1/1"
        padding={{
          base: "40px 40px 30px",
          lg: 0,
        }}
      >
        <Flex
          flexDirection="column"
          alignItems={{
            base: "flex-start",
            lg: isEven ? "flex-end" : "flex-start",
          }}
          width="100%"
          gap={2}
        >
          <Text color="green.200">{company}</Text>
          <H3 color="slate.100">{title}</H3>
          <Box
            bg={{ base: "transparent", lg: "navy.300" }}
            padding={{ base: 0, lg: 5 }}
            boxShadow="0 10px 30px -15px"
            color="navy.100"
            my={2}
            zIndex={3}
          >
            <Text color="slate.200" size="xmd">
              {description}
            </Text>
          </Box>
          <Flex
            flexWrap="wrap"
            width="100%"
            gap={2}
            justifyContent={isEven ? "flex-end" : "flex-start"}
          >
            {stack.map((tech, index) => (
              <SFMono key={index} color="slate.200" size="xs">
                {tech}
              </SFMono>
            ))}
          </Flex>
          <Flex color="slate.100" gap={4} marginTop={4}>
            <Link href={github} isExternal>
              <Icon boxSize={5} as={FiGithub} />
            </Link>
            <Link href={href} isExternal>
              <Icon boxSize={5} as={FiExternalLink} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
}
