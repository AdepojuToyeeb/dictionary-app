import { Container } from "@mui/material";
// import { grey } from "@mui/material/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./Components/Definitions";
import Header from "./Components/Header";

function App() {
  const [definition, setDefinition] = useState([]);
  const [word, setWord] = useState("kef");


  const dictionary = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinition(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionary();
  }, [word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
        </div>
        <Header
          word={word}
          setWord={setWord}
          setDefinition={setDefinition}
        />
        {definition && (<Definitions word={word} definition={definition} />)}
      </Container>
    </div>
  );
}

export default App;
