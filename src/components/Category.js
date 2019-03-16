import React, { Component } from "react";

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
        <h1>Category</h1>
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
