import React from "react";
import "./Shop.css"

// let Items=[]
let Friuts=[]

let Items=["Coffee","Chai","Omlete","Friuts","Banana","Pasta"]

// let Friuts=["Apple","Banana","Pomerganate","Orange","Mango"]

let Technology=["Apple", "Samsung","Techno","Redmi","Oppo"]

let Companies=["Hcl","Delloitte","Amd","Capegemini","Cognizant"]

export default function Shop()
{
     return( <React.Fragment>
       
       <ol>
          {/* Conditional Rendering */}
          {Items.length===0?<h4>Items is empty</h4>:<h3>Item is full</h3>}
          {Friuts.length==0?<h4>Fruits is empty</h4>:<h3>Fruits is full</h3>}
          
          {/* Map Function */}
          {Items.map(item=> <li>{item}</li>)}
          {Friuts.map(fruits=><li>{fruits}</li>)}
          {Technology.map(technology=><li>{technology}</li>)}  
          {Companies.map(companies=><li>{companies}</li>)}   
          
       </ol>
     </React.Fragment>
     );
}