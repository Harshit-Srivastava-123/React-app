import React from "react";
import "./State.css"
function State()
{
     var x=10;
      
     function updateState()
     {
             var x=15;
             console.log(x);
     }
     
     console.log(x);

     return (
          <>
            <h2>The value of x = {x}</h2>
            <button onClick={updateState}>Click me</button>
          </>

     );
}

export default State;