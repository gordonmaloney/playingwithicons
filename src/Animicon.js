import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player'

export const Animicon = ({icon, click, enter, autoplay, reSetAutoplay}) => {

    const animationData = require(`./icons/${icon}.json`)

    const [play, setPlay] = useState(false)
    const [hover, setHover] = useState(false)
    const [loop, setLoop] = useState(false)
  
    
    useEffect(() => {
      console.log(autoplay)
      if (autoplay) {
        setLoop(true);
        setPlay(true)
      }
    }, [autoplay])


    const handleEnter = () => {
      setHover(true)
      setPlay(true)
      setLoop(true)
    }
  
    const handleLoopComplete = () => {
      !hover && setLoop(false)
      reSetAutoplay && reSetAutoplay()
    }

  return (
    <span className="icon">

          <Lottie
          onMouseEnter={() => {enter && handleEnter()}}
          onClick={() => {click && handleEnter()}}
          onComplete={() => setPlay(false)}
          onMouseLeave={() => setHover(false)}
          onLoopComplete={() => handleLoopComplete()}

          goTo={loop ? 1 : 0}
          play={play && loop }
          loop={loop || hover}
          //direction={hover ? 1 : -1}
          renderer={"svg"}
          animationData={animationData}
          style={{ width: 150, height: 150 }}
          />


    </span>
  );
}