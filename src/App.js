import React from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar title="React SPA Application" />
      <Home title="Home page React" />
    </div>
  );
}

export default App;
