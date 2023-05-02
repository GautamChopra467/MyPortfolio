import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`  
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height:55vh;
    display: flex;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;

  @media (max-width: 60em){
    width: 70vw;
   }
   
  @media only screen and (max-width: 50em) {
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: none;
    &>*:nth-child(1) {
        border-top: 2px solid white;
        border-left: 2px solid white;
        border-right: 2px solid white;
    }

    &>*:nth-child(2) {
        border-bottom: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }
}



@media (max-width: 50em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

@media (max-width: 40em){
    width: 60vw;
}

@media (max-width: 30em) {
    width: 70vw;
}



`;


const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }

    @media (max-width: 50em) {
        width: 100%;
        height: 50%;

        .pic {
            width: 55%;
        }
    }

    @media (max-width: 40em){
    width: 60vw;

    .pic {
        width: 65%;
    }
}

@media (max-width: 30em) {
    width: 70vw;

    .pic {
        width: 70%;
    }
}

@media (max-width: 25em) {
    .pic {
        width: 80%;
    }
}


@media (max-width: 20em) {
    .pic {
        width: 90%;
    }
}
`


const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;

font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;


    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }

    @media (max-width: 40em) {
        font-size: calc(1rem + 1.5vw);
        padding: 1.4rem;
    }

    @media (max-width: 25em) {
        padding: 0.8rem;
    }   
`

const Intro = () => {
    const BoxVariants = {
        hidden: {
            height: 0
        },
        visible: {
            height: window.innerWidth > 800 ? '55vh' : '70vh',
            transition: {
                type: 'spring',
                duration: 2,
                delay: 1
            }
        }
    }

    const ImageVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'string',
                duration: 1,
                delay: 2
            }
        }
    }

  return (
    <Box variants={BoxVariants}
    initial="hidden"
    animate="visible"
    transition="transition">
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>I'm Gautam Chopra</h3>
                <h6>A passionate create who build things for the web.</h6>
            </Text>
        </SubBox>

        <SubBox>
            <motion.div variants={ImageVariants}
            initial="hidden"
            animate="visible"
            transition="transition">
                <img className="pic" src={Me} alt="Profile Pic" />
            </motion.div>
        </SubBox>
    </Box>
  )
};

export default Intro;
