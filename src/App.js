//import logo from './logo.svg';
import "./App.css";
import react, { useState } from "react";

function App() {
  let newTime = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(newTime);
  let purple = "#8e44ad";
  const [bg, setBg] = useState(purple);

  const getNewTime = () => {
    let newwTime = new Date().toLocaleTimeString();
    setCurrTime(newwTime);
  };
  const dblClick = () => {
    let col = "#00FF00";
    setBg(col);
  };

  return (
    <>
      <div className='App'>
        <h3> {newTime} </h3>
        <div style={{ backgroundColor: bg }}></div>
        <button onClick={getNewTime} onDoubleClick={dblClick}>
          Get new time
        </button>
      </div>
    </>
  );
}

export default App;
