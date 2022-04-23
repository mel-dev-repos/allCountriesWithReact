import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext, thems } from "./theme";
const Header = ({ mood, setmood }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <>
            <header
              style={{
                backgroundColor: thems[theme].bg,
                color: thems[theme].text,
              }}
            >
              <h1 className="headTxt">Where in the world?</h1>

              <h3
                onClick={() =>
                  mood === "light" ? setmood("dark") : setmood("light")
                }
              >
                {mood === "light" ? (
                  <BsFillMoonFill className="icon" />
                ) : (
                  <BsFillSunFill className="icon" />
                )}
              </h3>
            </header>
            <Outlet />;
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
