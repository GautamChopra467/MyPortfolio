import React, { useRef, useState } from 'react';
import music from "../assets/audio/u-said-it-v13-1167.mp3";
import styled, { keyframes } from 'styled-components';

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    top: 3rem;
    left: 8rem;
    z-index: 10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(1){
        animation-delay: 0.3s;
    }
    &>*:nth-child(1){
        animation-delay: 0.4s;
    }
    &>*:nth-child(1){
        animation-delay: 0.5s;
    }
    &>*:nth-child(1){
        animation-delay: 0.6s;
    }


    @media (max-width: 40em) {
        left: 1rem;
        top: 10rem;
    }
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`

const Line = styled.div`
/* background-color: #000; */
    background-color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};

    animation: ${play} 1s ease infinite;
    animation-play-state: ${props=> props.click ? "running" : "paused"};
    height: 1rem;
    width: 2px;
    margin: 0 0.1rem;

    @media (max-width: 40em) {
        height: 0.7rem;
        width: 1px;
    }
`

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if(!click){
        ref.current.play();
    }else{
        ref.current.pause();
    }
  }

  return (
    <Box onClick={() => handleClick()}>
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />

        <audio src={music} ref={ref} loop />
    </Box>
  )
}

export default SoundBar
 