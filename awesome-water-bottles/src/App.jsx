import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const BottlesPromise = fetch(
  "https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json"
).then((response) => response.json());

function App() {
  return (
    <>
      <h1> Awesome Water Bottles</h1>
      <Bottles BottlesPromise={BottlesPromise}></Bottles>
    </>
  );
}

export default App;
