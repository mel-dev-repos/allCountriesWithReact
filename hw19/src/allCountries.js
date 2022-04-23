import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Searchcountryname from "./searchCountryName";
import { ThemeContext, thems } from "./theme";
const Allcountries = () => {
  const [allCountryShow, setAllCountryShow] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setAllCountryShow(res.data);
    });
  }, []);
  return (
    <>
      <Searchcountryname
        placeHolder="search for a country..."
        data={allCountryShow}
      />
      <ThemeContext.Consumer>
        {(thm) => {
          const themeBg = thems[thm].bg;
          return (
            <main
              style={{
                backgroundColor: themeBg,
                color: thems[thm].text,
              }}
            >
              {allCountryShow.map((country) => {
                return (
                  <>
                    <Link to={`/${country.alpha2Code}`} className="card">
                      <img
                        src={country.flags.svg}
                        alt="Avatar"
                        style={{ width: "100%" }}
                      />
                      <div className="container">
                        <h2
                          style={{
                            backgroundColor: thems[thm].bg,
                            color: thems[thm].text,
                          }}
                        >
                          {country.name}
                        </h2>
                        <p
                          style={{
                            backgroundColor: thems[thm].bg,
                            color: thems[thm].text,
                          }}
                        >
                          Population:{country.population}
                        </p>
                        <p
                          style={{
                            backgroundColor: thems[thm].bg,
                            color: thems[thm].text,
                          }}
                        >
                          Region:{country.region}
                        </p>
                        <p
                          style={{
                            backgroundColor: thems[thm].bg,
                            color: thems[thm].text,
                          }}
                        >
                          Capital:{country.capital}
                        </p>
                      </div>
                    </Link>
                  </>
                );
              })}
            </main>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default Allcountries;
