import { Routes, Route } from "react-router-dom";
import Allcountries from "./allCountries";
import Header from "./Header";
import Countrydetal from "./countryDetal";
import { ThemeContext } from "./theme";
import { useState } from "react";
function App() {
  const [mood, setmood] = useState("light");

  return (
    <ThemeContext.Provider value={mood}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Header mood={mood} setmood={setmood} />}
        >
          <Route exact index element={<Allcountries />} />
          <Route exact path=":countryId" element={<Countrydetal />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;

