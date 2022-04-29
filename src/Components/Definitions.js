import React from "react";
import "./Definition.css";
import List from "./List";

const Definitions = ({ word, definition }) => {
  return (
    <div className="meanings">
      {definition[0] && word && (
        <audio
          className="audio"
          style={{ borderRadius: 10 }}
          src={definition[0].phonetics[0] && definition[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        definition.map((mean, index) => {
          return (
            <>
              <h1 className="header" key={index}>
                {mean.word}
              </h1>
              <List key={index} mean={mean.meanings} />
            </>
          );
        })
      )}
    </div>
  );
};

export default Definitions;
