import React, {useState} from "react";
import { Animicon } from "./Animicon";
import Lottie from "react-lottie-player";

function App() {

  const [playCloud, setPlayCloud] = useState(false)

  return (
    <div className="App">

      <Animicon icon="cloud" click autoplay={playCloud ? true : false} reSetAutoplay={() => setPlayCloud(false)} />
      <Animicon icon="clipboard" enter/>
      <Animicon icon="hourglass" click/>

      <Animicon icon="house" click />
      <Animicon icon="qmark" click/>
      <Animicon icon="smile" click/>


<br/>
      <button onClick={() => setPlayCloud(true)}>control cloud</button>


    </div>
  );
}

export default App;
