import React from "react";
import List from "./List";

const Definitions = ({ word, definition }) => {
  console.log(definition);
  return (
    <div className="hero">
      {word === "" ? (
        <span className="subtitle">Please search a word</span>
      ) : (
        definition.map((item, index) => {
          return <List key={index} {...item} word={word} />;
        })
      )}
    </div>
  );
};

export default Definitions;
