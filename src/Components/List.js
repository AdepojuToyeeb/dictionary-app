import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

const List = ({ meanings, phonetics, word }) => {
  return (
    <>
      <div className="phonetics">
        <h1>{word}</h1>

        {phonetics.map((phone, index) => {
          return (
            <div className="Phone">
              <Phonetics key={index} {...phone} />
            </div>
          );
        })}
      </div>
      <hr />
      {meanings.map((meaning, index) => {
        return <Meaning key={index} {...meaning} />;
      })}
    </>
  );
};

export default List;
