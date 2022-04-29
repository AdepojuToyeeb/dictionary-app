import { TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import "./Header.css";
import { debounce } from "lodash";

const Header = ({
  setWord,
  word,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main:  "#fff",
      },
      type: "dark",
    },
  });

  const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
