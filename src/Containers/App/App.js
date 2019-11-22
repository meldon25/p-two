import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Shop from '../../components/Shop/Shop'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shop/:clothing_name" component={ Shop } />
      </Switch>

      <Footer />

    </div>
  );
}

export default App