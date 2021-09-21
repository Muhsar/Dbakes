import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Landing from './components/Landing/';
import "./App.scss"
import Landing2 from './components/Landing2/index';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Landing2} />
    </Switch>
    </Router>
  );
}

export default App;
