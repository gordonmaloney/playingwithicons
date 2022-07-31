import React, {useState} from "react";
import { Animicon } from "./Animicon";
import Lottie from "react-lottie-player";

function App() {
  const [play, setPlay] = useState(false)


  return (
    <div className="App">
      <Animicon icon={"hourglass"} />
      <Animicon icon={"clipboard"} />


      <Lottie
          onClick={() => setPlay(true)}
          onComplete={() => setPlay(false)}
          goTo={play ? 1 : 0}
          play={play}
          loop={false}
          animationData={require(`./icons/cloud.json`)}
          style={{ width: 150, height: 150 }}
          />
    </div>
  );
}

export default App;
