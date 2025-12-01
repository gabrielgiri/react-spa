import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Notebook from "./components/notebook.jsx";
import Impresoras from "./components/impresoras.jsx";
import Perifericos from "./components/perifericos.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="React SPA Application" />
        <Routes>
          <Route path="/" element={<Home title="Home page React" />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/impresoras" element={<Impresoras />} />
          <Route path="/perifericos" element={<Perifericos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
