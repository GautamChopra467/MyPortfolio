import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Box = styled(motion(Link))`
  width: calc(10rem + 15vw);
  height: 20rem;
  text-decoration: none;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: 0.3s all ease;
  }

  @media (max-width: 50em) {
    width: calc(60vw);
}

@media (max-width: 30em) {
    padding: 12px;
    width: calc(70vw);
}
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid transparent;

  ${Box}:hover & {
    border: 2px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 30em){
    font-size: 17.5px;
    padding-top: 0.8rem;
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;

  @media (max-width: 30em){
    padding: 0.3rem 0;
    font-size: 15px;
  }
`;

const Container = styled(motion.div)``;

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

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    <Container variants={ItemVariants}>
      <Box target="_blank" to={{ pathname: link }} variants>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((tag, id) => {
            return <Tag key={id}>#{tag}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
