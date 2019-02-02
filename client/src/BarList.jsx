import React from "react";


const BarList = ({ bars, pick }) => {

    
    return (

    <div>
      {bars.map((bar,i) => {
          return (
            <div key={i}>
              {bar.name} <button onClick={()=>{pick(bar.name)}}>Vote!</button>
            </div>
          )
      })}
    </div>

  );
  
};

export default BarList;
