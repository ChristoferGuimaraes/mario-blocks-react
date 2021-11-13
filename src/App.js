import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const blocks = [];
  const blockImg = "https://art.pixilart.com/ab7d2ba0561251e.png";

  function generateBlocks(num) {
    if (num <= 10) {
      for (let i = 0; i < num; i++) {
        for (let h = num; h > i; h--) {
          blocks.push(
            <span
              key={1 + Math.random()}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          );
        }
        for (let j = -1; j < i; j++) {
          blocks.push(
            <img
              key={1 + Math.random()}
              src={blockImg}
              alt="imgMario"
              width="30px"
              height="30px"
            />
          );
        }
        blocks.push(<br 
          key={1 + Math.random()}
          />
        );
      }
    } else {
      alert("Só é possível gerar no máximo 10 blocos de altura.");
      setNum(0);
    }
  }

  generateBlocks(num);

  return (
    <div className="App">
      <header className="logo">
        <img
          src="https://static.wikia.nocookie.net/super-mario-maker-2-wiki/images/f/ff/Super_Mario_Bros._Logo.png"
          width="332px"
          height="156px"
          alt="logo"
        />
      </header>

      <div className="inputs">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div className="cenario-container">
        <div id="blocks" className="blocks-container">
          {blocks}
        </div>
      </div>
      <footer> &copy; github.com/ChristoferGuimaraes</footer>
    </div>
  );
}

export default App;
