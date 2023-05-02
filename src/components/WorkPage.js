import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Works } from "../data/WorkData";
import WorkCard from "../subComponents/WorkCard";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  @media (max-width: 50em) {
    left: calc(8rem + 15vw);
  }

  @media (max-width: 40em) {
    left: calc(2rem + 15vw);
    top: 30%;
}

@media (max-width: 25em) {
    left: calc(1rem + 15vw);
}
`


// Variants for framer-motion 
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}


const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const handleScroll = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
    }


    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <PowerButton theme="dark" />
        <SocialIcons theme="dark" page="work" />

        <Main ref={ref} variants={containerVariants} initial="hidden" animate="visible">
          {
              Works.map(work => {
                return <WorkCard key={work.id} work={work} />
              })
          }
        </Main>

        <BigTitle text="WORK" top='10%' right='20%' />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
