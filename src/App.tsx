import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
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
