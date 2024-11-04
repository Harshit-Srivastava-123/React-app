// import Abc from "./Abc";
// import Navbar from "./Navbar";
// import Hello from "./Hello";
// import Footer from "./Footer";
// import Shop from "./Shop";
// import State from "./State";
// import Hooks from "./Hooks";
// import Todoinput from "./Todoinput";
// import { useState } from "react";
// import "./App.css";
// import Todolist from "./Todolist";

// function App() {
//   const [listTodo, setListTodo] = useState([]);
//   let addList = (inputbox) => {
//     setListTodo([...listTodo, inputbox]);
//   };

//   let removeItem = (index) => {
//     const newList = listTodo.filter((_, i) => i !== index);
//     setListTodo(newList);
//   };

//   return (
//     <div>
//       {/* <Navbar></Navbar>
//       <h1>Hello</h1>
//       <Abc></Abc>
//       <Abc></Abc>
//       <Abc></Abc>
//       <Abc></Abc>
//       <Hello></Hello>
//       <Footer></Footer> */}
//       {/* <Shop></Shop> */}
//       {/* <State></State> */}
//       {/* <Hooks></Hooks> */}

//       <div className="container">
//         <h1>Todo-List App</h1>
//         <Todoinput addList={addList} />

//         <hr />
//         {listTodo.map((listItem, i) => {
//           return (
//             <Todolist
//               key={i}
//               item={listItem}
//               removeItem={() => removeItem(i)}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App
