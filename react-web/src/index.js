import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';
import login from './login';
import Predict from './Predict';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={login} />
        <Route exact path="/predict" component={Predict} />
        <Route exact path="/history" component={login} />
      {/* </div> */}
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
