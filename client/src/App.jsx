// DEPENDENCY
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'

// CONTAINER
import Login from './container/Login/Login'
import Home from './container/Home/Home'

// COMPONENT
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


// CSS
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <Router>

        <Switch>

            <Route path="/login">
             { !localStorage.getItem('token') ? <Login /> : <Redirect to="/" />}
            </Route>

            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>

        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
