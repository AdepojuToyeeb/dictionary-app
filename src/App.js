// import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./Components/Definitions";
import Header from "./Components/Header";

function App() {
  const [definition, setDefinition] = useState([]);
  const [word, setWord] = useState("");

  const dict = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      // console.log(data.data);
  
      setDefinition(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dict();
  }, [word]);

  return (
    <div className="container">
      <div className="App"> 
        <Header word={word} setWord={setWord} />
        {definition && <Definitions word={word} definition={definition} />}
      </div>
    </div>
  );
}

export default App;
