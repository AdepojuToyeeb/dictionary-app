import React from "react";

const Synonyms = ({ item }) => {
    
  return (
      <>
      <h4>Synonyms</h4>
      {item.synonyms.map((synonym) => {
    return (
      <>
        <div
          className="singleMean"
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
            
          <b> {synonym}</b>
        </div>
      </>
    );
    })}
      
        </>
  )
  
  
};

export default Synonyms;
