import React, { useState, createContext } from "react";
import "./App.css";
import UseContext from "./components/UseContext";

export const ToggleTheme = createContext();

function App() {
  const [state, setState] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [contentMessage, setContentMessage] = useState("");

  const handleToggle = () => {
    setState(!state);
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContent = () => {
    alert("Some changes!");
    setContentMessage(
      `Here's a fascinating fact: Did you know that the world's oceans contain nearly 20 million tons of gold? Though it's not feasible to extract all of it, scientists estimate that there are around 20 million tons of gold dissolved in the Earth's oceans. This amount is worth billions of dollars, but the concentration of gold in seawater is extremely low, making extraction impractical. Nonetheless, it's a captivating reminder of the vast mysteries hidden within our planet's oceans!`
    );
  };

  return (
    <ToggleTheme.Provider value={state}>
      <div id="toggle">
        <button onClick={handleToggle}>Toggle</button>
      </div>

      <div className={state ? "plain" : "blur"} id="change">
        <UseContext handleLike={handleLike} />
        <div id="message">{contentMessage}</div>
        <button onClick={handleContent}>Content</button>
        <div id="number">{likeCount}</div>
        <button onClick={handleLike}>Like</button>
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;

// /* Apply the blur class conditionally */