import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixCount, setSixCount] = useState(0);
  const [fourCount, setFourCount] = useState(0);
  const handleSingle = () => {
    setRuns(runs + 1);
  };
  const handleFour = () => {
    setRuns(runs + 4);
    setFourCount(fourCount + 1);
  };
  const handleSix = () => {
    setRuns(runs + 6);
    setSixCount(sixCount + 1);
  };
  const batmanStyle = {
    border: "2px solid orange",
    padding: "10px",
  };
  return (
    <div style={batmanStyle}>
      <h1>Batsman</h1>
      <p>Total Run: {runs}</p>
      <p>Four: {fourCount}</p>
      <p>Six: {sixCount}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleSingle}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    </div>
  );
}
