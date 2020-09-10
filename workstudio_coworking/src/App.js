import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import Navbar from './common/Navbar';
import Routes from './common/Routes';
import Footer from './common/Footer';
import store from './redux/store';
import Agreement from './pages/Agreement';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      
      <Navbar />
     <Routes />
     <Footer />
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
