import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player'

export const Animicon = ({icon}) => {

    const animationData = require(`./icons/${icon}.json`)

    const [play, setPlay] = useState(false)
    const [hover, setHover] = useState(false)

  return (
    <div>
    <Lottie
          onMouseEnter={() => {setPlay(true); setHover(true)}}
          onClick={() => {setPlay(true); setHover(true)}}
          onMouseLeave={() => setHover(false)}

          onComplete={() => setPlay(false)}
          onLoopComplete={() => setPlay(false)}

          
      goTo={play && hover ? 1:0}
      loop={hover ? true : false}
      play={play || hover ? true : false}
      direction={hover ? 1 : -1}
      animationData={animationData}
      style={{ width: 150, height: 150 }}
    />
    play: {play ? "true" : "false"}<br/>
    hover: {hover ? "true" : "false"}

    </div>
  );
}