import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './common/Navbar';
import Routes from './common/Routes';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
     {/* <Home /> */}
     <Routes />
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
