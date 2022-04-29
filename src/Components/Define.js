import React from "react";
import './Define.css'   
const Define = ({ item }) => {
  return (
      <>
      <h4>Definitions</h4>
      {item.definitions.map((define) => {
      
      console.log(define)
    return (
      <>
        <div
          className="singleMean"
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          <b>{define.definition}</b>
        <hr style={{ backgroundColor: "black", width: "100%" }} />
          {define.example && (
            <span>
              <b>Example :</b> {define.example}
            </span>
          )}
        </div>
      </>
    );
  })}
      </>
  )
  
  
  
};

export default Define;
