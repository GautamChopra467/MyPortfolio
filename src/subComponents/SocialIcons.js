import React from "react";
import { Github } from "../components/AllSvgs";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 640px) {
    left: 1rem;

    & > *:not(:last-child) {
    margin: 0.3rem 0;
  }
  }
`;

const IconLink = styled.a.attrs({
  target: "_blank",
})`
  text-decoration: none;
  color: inherit;
  border-radius: 50%;
  transition: 0.2s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: ${(props) =>
      props.color === "dark"
        ? "0 0 7px 4px rgba(255, 255, 255, 0.4)"
        : "0 0 8px 4px rgba(0, 0, 0, 0.2)"};
  }

  .socialLink {
    font-size: 25px;
    color: ${(props) => props.color !== "dark" ? DarkTheme.body : DarkTheme.text};
  }
  

  @media (max-width: 640px) {
    .socialLink {
      font-size: 22px;
      color: ${(props) => props.page === "work" ? DarkTheme.text : DarkTheme.body};
    }

    svg  {
      font-size: 20px;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? (window.innerWidth > 800 ? DarkTheme.text : DarkTheme.body) : DarkTheme.body};

  @media (max-width: 640px) {
    background-color: ${(props) => props.page === "work" ? DarkTheme.text : props.color === "dark" ? (window.innerWidth > 800 ? DarkTheme.text : DarkTheme.body) : DarkTheme.body};
    span {
      height: 6rem;
    }
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <IconLink color={props.theme} href="https://github.com/GautamChopra467">
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </IconLink>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <IconLink color={props.theme} href="https://github.com/GautamChopra467">
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </IconLink>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <IconLink color={props.theme} href="https://github.com/GautamChopra467" page={props.page}>
          <GrLinkedinOption
            className="socialLink"
          />
        </IconLink>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <IconLink color={props.theme} href="mailto:harshchopra467@gmail.com" page={props.page}>
          <MdMailOutline
            className="socialLink"
          />
        </IconLink>
      </motion.div>

      <Line color={props.theme} page={props.page}
        initial={{
          height: 0,
        }}
        animate={{
          height: window.innerWidth > "640px" ? "8rem" : "6rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
