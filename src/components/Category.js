import React, { Component } from "react";
import { Link } from "react-router-dom";
import Quote from "./Quote";

import { getCategories } from "../actions/quoteActions";
import { connect } from "react-redux";

class Categories extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.getCategories();
  }

  render() {
    console.log(this.props.categories.categories);
    return (
      <div>
        <Link to="/" className="nav-link">
          <i className="fa fa-angle-left fa-3x" />
        </Link>
        <h1>Category</h1>
        <Quote />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
