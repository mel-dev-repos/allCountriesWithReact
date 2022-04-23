import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext, thems } from "./theme";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const Countrydetal = () => {
  let params = useParams();
  const [countryShow, setcountryShow] = useState([]);
  const [allCountry, setallCountry] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setallCountry(res.data);
      if (res.data) {
        res.data.forEach((element) => {
          if (element.alpha2Code === params.countryId) {
            setcountryShow(element);
          }
        });
      }
    });
  }, []);

  const borderSide = allCountry.filter((country) => {
    return countryShow.borders.includes(country.alpha3Code);
  });
  // console.log(borderSide);
  return (
    <>
      <ThemeContext.Consumer>
        {(them) => {
          return (
            <>
              <div
                className="but"
                style={{
                  backgroundColor: thems[them].bg,
                  color: thems[them].text,
                }}
              >
                <Link to="/">
                  <button
                    className="back"
                    style={{
                      backgroundColor: thems[them].bg,
                      color: thems[them].text,
                    }}
                  >
                    <FiArrowLeft /> Back
                  </button>
                </Link>
              </div>
              <div
                className="countryDetail"
                style={{
                  backgroundColor: thems[them].bg,
                  color: thems[them].text,
                }}
              >
                <div className="photoandtxt">
                  <img src={countryShow?.flags?.svg} className="flags" />
                  <h1>
                    {countryShow.name}
                    <div className="detailText">
                      <h2>Native Name:{countryShow.nativeName}</h2>
                      <h2>Population: {countryShow.population}</h2>
                      <h2>Region:{countryShow.region}</h2>
                      <h2>Sub Region:{countryShow.subregion}</h2>
                      <h2>Capital:{countryShow.capital}</h2>
                    </div>
                  </h1>
                  <div className="detailText2">
                    <h2>Top Level Domain:{countryShow.topLevelDomain}</h2>
                    <h2>
                      Currencies:
                      {countryShow.currencies
                        ? countryShow.currencies[0]?.name
                        : ""}
                    </h2>
                    <h2>
                      Languages:
                      {countryShow.languages
                        ? countryShow.languages.map((item) => `${item.name},`)
                        : ""}
                    </h2>
                  </div>
                </div>
                <div className="borderCountries">
                  <h2 className="border">
                    Border Countries:
                    {borderSide.map((item) => {
                      return (
                        <button
                          className="neighbor"
                          style={{
                            backgroundColor: thems[them].bg,
                            color: thems[them].text,
                          }}
                        >
                          <Link
                            style={{
                              backgroundColor: thems[them].bg,
                              color: thems[them].text,
                            }}
                            className="neighbor"
                            to={`/${item.alpha2Code}`}
                          >{`${item.name},`}</Link>{" "}
                        </button>
                      );
                    })}
                  </h2>
                </div>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default Countrydetal;
