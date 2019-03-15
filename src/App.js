import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Categories from './components/Categories';
import Quote from './components/Quote';
import NotFound from './components/NotFound';


import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Home page</h1>
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Categories} />
                <Route exact path="/category/:id" component={Quote} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </ Provider>
    );
  }
}

export default App;
