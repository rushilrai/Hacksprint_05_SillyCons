import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './home.js';
import Dashboard from './dashboard.js';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
