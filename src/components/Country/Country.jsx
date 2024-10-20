import { useState } from "react";
import "./Country.css";
import CountryDetail from "../Country Detail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h2 style={{ color: visited ? "purple" : "black" }}>
        Name: {name.common}
      </h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flags
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have already visited" : "I want to visit"}
      <hr />
      <CountryDetail></CountryDetail>
    </div>
  );
};

export default Country;
