import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Contact from "src/components/Contact";
import Portfolio from "src/components/Portfolio";
import Experience from "src/components/Experience";
import About from "src/components/About";
import Hero from "src/components/Hero";
import NavBar from "src/components/NavBar";
import Socials from "src/components/Socials";
import Footer from "src/components/Footer";
import Loader from "src/components/Loader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => AOS.init(), 100);
    setTimeout(() => setIsLoader(false), 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Derick Park</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="theme-color" content="#0a192f" />
        <meta property="og:title" content="Derick Park" />
        <meta property="og:description" content="Derick Park's porfolio" />
        <meta property="og:image" content="/ogImage.png" />
      </Head>
      <main>
        {isLoader ? (
          <Loader />
        ) : (
          <Box>
            <NavBar />
            <Container
              maxW="1300px"
              px={{ base: "25px", sm: "50px", md: "150px" }}
            >
              <Hero />
              <About />
              <Experience />
              <Portfolio />
              <Contact />
              <Socials />
              <Footer />
            </Container>
          </Box>
        )}
      </main>
    </>
  );
}
