import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromise }) => {
  const Countries = use(CountriesPromise);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countries Info</h1>
      <div className="countries">
        {Countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
