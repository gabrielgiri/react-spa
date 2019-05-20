import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Notebook from './components/notebook';
import Impresoras from './components/impresoras';
import Perifericos from './components/perifericos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="React SPA Application" />
        <Route exact path="/" render={() => <Home title="Home page React"/>} />
        <Route path="/notebook" component={Notebook} />
        <Route path="/impresoras" component={Impresoras} />
        <Route path="/perifericos" component={Perifericos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
