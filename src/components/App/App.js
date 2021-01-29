import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './../Dashboard/Dashboard.js';
import Preferences from './../Preferences/Preferences.js';

function App() {
  return (
     <div className="wrapper">
      <h1>Application - personal growth</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;