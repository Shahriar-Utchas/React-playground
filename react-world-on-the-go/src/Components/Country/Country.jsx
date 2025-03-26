import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleVisitedCountryAdd,
  handleVisitedCountryRemove,
}) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(!visited);
    if (visited) {
      setVisited(false);
      handleVisitedCountryRemove(country);
    }
    if (!visited) {
      setVisited(true);
      handleVisitedCountryAdd(country);
    }
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} width="60%" />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p> Independence: {country.independent ? "Free" : "Not free"}</p>
      <button onClick={handleVisited}>
        {visited ? "Not Visited" : "Visited"}
      </button>
    </div>
  );
};

export default Country;
