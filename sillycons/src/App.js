import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Dashboard from './dashboard.js';
import './App.css';

function App() {
  const appStyle = {
    height: '100vh',
  }
  return (
    <main style={appStyle}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
