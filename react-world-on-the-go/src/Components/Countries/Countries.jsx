import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ CountriesPromise }) => {
  const Countries = use(CountriesPromise);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countries Info</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
        {Countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
