import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Template } from '../src/containers/template/index'
// const App = () => {
//   const [count, setCount] = useState(1);
//   const [title, setTitle] = useState("a");
//   useEffect(() => {
//     console.log("use")
//     localStorage.setItem("use", count);
//   }, [count])
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)}> +1</button>
//       <button onClick={() => setCount(count)}> reset</button>
//       <button onClick={() => setCount(count - 1)}> -1</button>

//     </div>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (<Template />)
}

export default App;
