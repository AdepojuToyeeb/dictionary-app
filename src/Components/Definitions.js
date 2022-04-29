import React from "react";
import "./Definition.css";
import List from "./List";

const Definitions = ({ word, definition }) => {
  return (
    <div className="meanings">
      {definition[0] && word && (
        <audio className="audio"
          style={{ backgroundColor: "#fff", borderRadius: 10}}
          src={definition[0].phonetics[0] && definition[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        // console.log(definition)

        definition.map((mean, index) => {
          console.log(mean)
          return (
            <>
              <h1 className ="header" key={index}>{mean.word}</h1>
              <List key={index} mean={mean.meanings} />
            </>
          );
        })
        //   mean.meanings.map((item) =>

        //     item.definitions.map((def) => (
        //       <div
        //         className="singleMean"
        //         style={{
        //           backgroundColor: "white",
        //           color: "black",
        //         }}
        //       >
        //         <b>{def.definition}</b>
        //         <hr style={{ backgroundColor: "black", width: "100%" }} />
        //         {def.example && (
        //           <span>
        //             <b>Example :</b> {def.example}
        //           </span>
        //         )}

        //       </div>
        //     ))
        //   )
        // )
      )}
    </div>
  );
};

export default Definitions;
