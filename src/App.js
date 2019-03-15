import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Quotes from './components/Quotes';
import Quote from './components/Quote';
import NotFound from './components/NotFound';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home page</h1>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Quotes} />
              <Route exact path="/category/:id" component={Quote} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
