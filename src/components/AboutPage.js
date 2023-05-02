import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Astronaut from "../assets/Images/spaceman.png";
import ParticlesComponent from "../subComponents/ParticlesComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 11%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;


const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
top: 9rem;
left: calc(5rem + 5vw);

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

strong {
  font-size: calc(0.65rem + 1vw);
  padding-bottom: 5px;
}

@media (max-width: 40em) {
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.4rem;
}

@media (max-width: 30em) {
  padding: 1rem;
    width: 55vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
}

@media (max-width: 20em) {
  /* width: 60vw; */
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
}
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <PowerButton theme="dark" />
        <SocialIcons theme="dark" />
        <ParticlesComponent them="dark" />

        <Spaceman>
          <img src={Astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          <strong>Hello there! I am a student and a web-developer.</strong> Currently, I am
          pursuing B.TECH in Computer Science & Engineering from Bharati
          Vidyapeeth's College of Engineering.
          <br /><br />I also have a great interest in web design, and in creating
          stunning and effective websites.
          <br/><br/>I create pixel-perfect design solutions and love to solve various algorithms.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
