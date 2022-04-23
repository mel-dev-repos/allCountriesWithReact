import React from "react";
export const ThemeContext = React.createContext("");
export const thems = {
  dark: {
    bg: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
  },
  light: {
    bg: " hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
  },
};

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
