import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Shop from './Shop'
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shop" component={ Shop } />

      </Switch>


      <Footer />

    </div>
  );
}

export default App;