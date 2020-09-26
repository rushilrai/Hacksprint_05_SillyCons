import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Dashboard from './dashboard.js';
import DashboardAlphabet from './dashboardAlphabet.js';
import DashboardAmazon from './dashboardAmazon.js';
import DashboardFacebook from './dashboardFacebook.js';
import DashboardTesla from './dashboardTesla.js';
import DashboardIbm from './dashboardIbm.js';
import './App.css';

function App() {
  const appStyle = {
    height: '100vh',
  }
  return (
    <main style={appStyle}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/MSFT" component={Dashboard} exact />
        <Route path="/GOOGL" component={DashboardAlphabet} exact />
        <Route path="/AMZN" component={DashboardAmazon} exact />
        <Route path="/FB" component={DashboardFacebook} exact />
        <Route path="/TSLA" component={DashboardTesla} exact />
        <Route path="/IBM" component={DashboardIbm} exact />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
