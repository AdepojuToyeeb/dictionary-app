import React from "react";
import Def from "./Def";

const Meaning = ({ partOfSpeech, definitions }) => {

  return (
    <>
      <h1 className="part-speech"> {partOfSpeech}</h1>
      {definitions.map((def, index) => {
        console.log(def);
        return <Def key={index} {...def} />;
      })}
    </>
  );
};

export default Meaning;
