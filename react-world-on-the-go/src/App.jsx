import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const CountriesPromise = fetch(
  "https://restcountries.com/v3.1/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
