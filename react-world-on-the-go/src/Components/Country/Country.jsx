import React from "react";
import "./Country.css";

const Country = ({ country }) => {
return (
    <div className="country">
        <h2>{country.name.common}</h2>
        <img src={country.flags.png} alt={country.name.common} width="60%" />
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p> Independence: {country.independent ? 'Free' : 'Not free'  }</p>
        <button>Not Visited</button>
    </div>
);
};

export default Country;
