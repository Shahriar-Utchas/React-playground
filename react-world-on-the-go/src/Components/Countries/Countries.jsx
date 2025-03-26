import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromise }) => {
  const Countries = use(CountriesPromise);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountryAdd = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };
  const handleVisitedCountryRemove = (country) => {
    setVisitedCountries(
      visitedCountries.filter((c) => c.cca3 !== country.cca3)
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countries Info</h1>
      <h2>There are {Countries.length} countries in the world</h2>

      <h3>Visited countries: {visitedCountries.length} </h3>
      <h3>
        Not visited countries: {Countries.length - visitedCountries.length}
      </h3>
      <div className="countries">
        {Countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountryAdd={handleVisitedCountryAdd}
            handleVisitedCountryRemove={handleVisitedCountryRemove}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
