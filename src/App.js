import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Quotes} />
          <Route exact path="/category/:id" component={Quote} />
        </Switch>
      </div>
    );
  }
}

export default App;
