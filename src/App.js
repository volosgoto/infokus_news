import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Carousel from './components/layout/Carousel';
import Header from './components/layout/Header';

import Footer from './components/layout/Footer';
import Categories from "./components/news/Categories";
import Category from "./components/news/Category";
import Quote from "./components/Quote";
import NotFound from "./components/layout/NotFound";



import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          {/* <Carousel></Carousel> */}
          <Header></Header>

          <Switch>
            <Route exact path="/" component={Categories} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/category/:id" component={Quote} />
            <Route component={NotFound} />
          </Switch>

          <Footer></Footer>
        </div>

      </Router>
    );
  }
}

export default App;
