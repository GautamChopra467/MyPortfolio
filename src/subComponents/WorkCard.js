import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s all ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }

  @media (max-width: 50em) {
    width: 16rem;
    margin-right: 6rem;
    height: 35vh;
  }

  @media (max-width: 40em) {
    width: 14rem;
    margin-right: 4rem;
    height: 35vh;
  }

  @media (max-width: 25em) {
    width: 12rem;
    margin-right: 4rem;
    height: 35vh;
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.h3`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const HashTags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const VisitLink = styled(Link)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 1px 1px 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(Link)`
  text-decoration: none;
  color: inherit;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const ItemVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const WorkCard = (props) => {
  const { id, name, description, tags, demo, github } = props.work;

  return (
    <Box key={id} variants={ItemVariants}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <HashTags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </HashTags>
      <Footer>
        {demo === "" ? (
          ""
        ) : (
          <VisitLink to={{ pathname: `${demo}` }} target="_blank">
            Visit
          </VisitLink>
        )}

        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default WorkCard;
