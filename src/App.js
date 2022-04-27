import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header";

function App() {
  const [meaning, setMeaning] = useState([]);
  const [word, setWord] = useState("");

  const dict = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/word"
      );
      // const data = await response.json();
      // console.log(data);
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meaning);
  useEffect(() => {
    dict();
  }, []);

  return (
    <div className="container">
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header word={word} setWord={setWord} />
      </Container>
    </div>
  );
}

export default App;
