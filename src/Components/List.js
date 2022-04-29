import React from "react";
import Define from "./Define";
import Synonyms from "./Synonyms";
import './List.css'

const List = ({ mean }) => {
  return mean.map((item, index) => {
    console.log(item);
    return (
      <>
        <h2 className="speech-header" key={index}>{item.partOfSpeech}</h2>
        <Define key={index} item= {item}/>
        <Synonyms key={index} item= {item}/>
      </>
    );
  });

};

export default List;
