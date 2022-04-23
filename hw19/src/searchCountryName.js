import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeContext, thems } from "./theme";
const Searchcountryname = ({ placeHolder, data }) => {
  const [filteredData, setfilteredData] = useState([]);

  const handelFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };
  return (
    <ThemeContext.Consumer>
      {(them) => {
        return (
          <div
            className="search"
            style={{
              backgroundColor: thems[them].bg,
              color: thems[them].text,
            }}
          >
            <div className="searchInputs" style={{ position: "relative" }}>
              <FaSearch className="searchIcon" />
              <input
                className="searchinp"
                type="text"
                placeholder={placeHolder}
                onChange={handelFilter}
                style={{
                  backgroundColor: thems[them].bg,
                  color: thems[them].text,
                }}
              />
            </div>
            {filteredData.length !== 0 && (
              <div
                className="dataResult"
                style={{
                  backgroundColor: thems[them].bg,
                  color: thems[them].text,
                }}
              >
                {filteredData.map((value) => {
                  return (
                    <Link
                      className="dataItem"
                      to={value.alpha2Code}
                      key={value.alpha3Code}
                      style={{ color: thems[them].text }}
                    >
                      {value.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Searchcountryname;
