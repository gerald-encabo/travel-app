import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/travel-app' exact>
            <Redirect to="/" />
          </Route>
          <Route path='/' exact component={ Home } />
          <Route path='/services' component={ Services } />
          <Route path='/products' component={ Products } />
          <Route path='/sign-up' component={ SignUp } />
        </Switch>
    </Router>
  );
}

export default App
