import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Budget from "./Pages/Budget";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/budget" element={<Budget/>} />
      </Routes>
    </>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
