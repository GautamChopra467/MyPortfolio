import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { LightTheme } from "./Themes";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  /* @media only screen and (max-width: 50em) {
    text-shadow: rgb(0, 0, 0) 0px 0px 4px;
  } */
`;

const Blog = styled(Link)`
  color: ${(props) => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 48%;
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  transform: translate(-50%, -50%) rotate(-90deg) ;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => props.click ? "rgb(0, 0, 0) 0px 0px 4px" : 0};
  }

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2em ;
    }
  }

  @media (max-width: 30em) {
    top: 49%;
    h2 {
      font-size: 1em;
    }
}
`;

const Work = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  transform: rotate(90deg) translate(-50%, -50%);

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.click ? props.theme.body : props.theme.text};
    text-shadow: ${(props) => props.click ? "rgb(0, 0, 0) 0px 0px 4px" : 0};
  }

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2em ;
    }
  }

  @media (max-width: 30em) {
    right: calc(0.7rem + 2vw);
    h2 {
      font-size: 1em;
    }
}
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const About = styled(Link)`
  color: ${(props) => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 50em) {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2em ;
    }
  }

  @media (max-width: 30em) {
    h2 {
      font-size: 1em;
    }
}
`

const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2em ;
    }
  }

  @media (max-width: 30em) {
    h2 {
      font-size: 1em;
    }
}
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s all ease;

  span {
    color: ${props => props.theme.text};
  }

  &>:first-child{
    animation: ${rotate} infinite 1.5s linear;
  }

  &>:last-child{
    display: ${props => props.click ? 'none': 'inline-block'};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${props => props.click ? '90%' : '50%'};
  left: ${props => props.click ? '90%' : '50%'};
    width: ${props => props.click ? '80px' : '150px'};
    height: ${props => props.click ? '80px' : '150px'};
}

@media only screen and (max-width: 30em) {
  width: ${props => props.click ? '45px' : '150px'};
    height: ${props => props.click ? '45px' : '150px'};
}
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  /* left: 0; */
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 50em){
    right: 0px;
    width: ${props => props.click ? '100%' : '0%'};
  height: ${props => props.click ? '50%' : '0%'};
      transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`


const MainPage = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click} />

        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang onClick={() => setClick(!click)} width={click ? 120 : 200} height={click ? 120 : 200} fill={LightTheme.text} />
          <span>click here</span>
        </Center>

        <Contact to={{ pathname: "mailto:harshchopra467@gmail.com" }} target="_blank">
          <motion.h3
          initial={{ 
            y: -200, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          animate={{ 
            y: 0, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9}}
          transition={{ ease: "easeInOut"}}
          >Say hi..</motion.h3>
        </Contact>

        <Blog to="/blog" click={click}>
          <motion.h2
          initial={{ 
            y: -200, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          animate={{ 
            y: 0, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9}}
          transition={{ ease: "easeInOut"}}
          >Blog</motion.h2>
        </Blog>

        <Work to="/work" click={click}>
          <motion.h2
          initial={{ 
            y: -200, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          animate={{ 
            y: 0, 
            transition: { type: 'spring', duration: 1.5, delay: 1} 
          }}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9}}
          transition={{ ease: "easeInOut"}}
          >Work</motion.h2>
        </Work>

        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
            initial={{ 
              y: 200, 
              transition: { type: 'spring', duration: 1.5, delay: 1} 
            }}
            animate={{ 
              y: 0, 
              transition: { type: 'spring', duration: 1.5, delay: 1} 
            }}
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9}}
            transition={{ ease: "easeInOut"}}
            >About</motion.h2>
          </About>

          <Skills to="/skills">
            <motion.h2
            initial={{ 
              y: 200, 
              transition: { type: 'spring', duration: 1.5, delay: 1} 
            }}
            animate={{ 
              y: 0, 
              transition: { type: 'spring', duration: 1.5, delay: 1} 
            }}
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9}}
            transition={{ ease: "easeInOut"}}
            >My Skills</motion.h2>
          </Skills>
        </BottomBar>

        {click ? <Intro /> : null}
      </Container>
    </MainContainer>
  );
};

export default MainPage;
