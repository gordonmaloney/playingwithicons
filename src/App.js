import React, { useState } from "react";
import { Animicon } from "./Animicon";

function App() {
  const [playCloud, setPlayCloud] = useState(false);
  const [forceLoop, setForceLoop] = useState(false);

  const [threeBox, setThreeBox] = useState(false);

  return (
    <div className="App">
      <Animicon
        icon="cloud"
        canvas
        click
        autoplay={playCloud ? true : false}
        reSetAutoplay={() => setPlayCloud(false)}
      />
      <Animicon icon="clipboard" enter />
      <Animicon icon="hourglass" click />

      <Animicon icon="house" click />
      <Animicon icon="qmark" click />
      <Animicon icon="smile" click />

      <br />
      <button onClick={() => setPlayCloud(true)}>control cloud</button>

      <div className="flashcardContainer">
        <div className="flashcardHeader">
          <div style={{ marginRight: "20px" }}>14 remaining</div>
        </div>

        <div className="flashcardBody">
          word
          {threeBox ? (
            <>
              <div
                style={{
                  height: "10px",
                  borderBottom: "1px solid black",
                  width: "220px",
                  marginBottom: "10px",
                }}
              />
              facal
            </>
          ) : (
            <div
              style={{
                userSelect: "none",
                pointerEvents: "none",
                color: "rgba(1,1,1,0)",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <div
                style={{
                  height: "11px",
                  width: "220px",
                  marginBottom: "10px",
                }}
              />
              .
            </div>
          )}
        </div>

        <div className="flashcardFooter">
          <div
            onClick={() => {
              setThreeBox(!threeBox);
            }}
            className={threeBox ? "threebox hide" : "threebox"}
          >
            {!threeBox && "Show Answer"}
          </div>
          <div
            onClick={() => {
              setThreeBox(!threeBox);
            }}
            className={threeBox ? "onebox l2" : "onebox l1"}
          >
            {threeBox && "Wrong"}
          </div>
          <div
            onClick={() => {
              setThreeBox(!threeBox);
            }}
            className={threeBox ? "onebox c2" : "onebox c1"}
          >
            {threeBox && "Correct"}
          </div>
          <div
            onClick={() => {
              setThreeBox(!threeBox);
            }}
            className={threeBox ? "onebox r2" : "onebox r1"}
          >
            {threeBox && "Easy"}
          </div>
        </div>
      </div>

      <div
        className="flashcardContainer"
        onMouseEnter={() => setForceLoop(true)}
        onMouseLeave={() => setForceLoop(false)}
      >
        <center>
          <h3>Vocab Drills</h3>
        </center>

        <div style={{ display: "flex", flexDirection: "row !important" }}>
          <div style={{ width: "40%", margin: "10px" }}>
            Practice all the vocabulary you've learned, or focus on the words
            from a specific lesson.
          </div>

          <div
            style={{
              padding: "5px",
              marginTop: "-15px",
              marginRight: "10px",
              width: "140px",
              height: "140px",
              backgroundColor: "white",
              borderRadius: "100%",
              border: "2px solid black",
            }}
          >
            <center>
              <Animicon icon="flashcards" canvas forceLoop={forceLoop} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
