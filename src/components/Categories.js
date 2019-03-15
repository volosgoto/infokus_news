import React, { Component } from 'react'

import { getCategories } from "../actions/quoteActions";
import { connect } from "react-redux";

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {

    console.log(this.props);
    return (
      <div>
        <h1>Categories</h1>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
