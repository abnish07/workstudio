import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './common/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
     <Home />
     </BrowserRouter>
    </div>
  );
}

export default App;
