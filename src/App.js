import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import Header from './components/Header';
import Home from './Home';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
  
      <Header />
      <Home />
      <Footer />

    </div>
  );
}

export default App;