import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// CONTAINERS
import Landing from './containers/Landing'
import Layout from './containers/Layout'

// COMPONENTS
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Landing>
              <Register/>
            </Landing>
          </Route>
          <Route path="/login">
            <Landing>
              <Login/>
            </Landing>
          </Route>
          <Route path="/">
            <Layout></Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
