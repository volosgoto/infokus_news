import React, { Component } from "react";
import { getCategories } from "../actions/categoriesActions";
import { connect } from "react-redux";

// {
//   author: "https://www.facebook.com/narodna.pravda.ua/"
// ​​
// content: "© 2019.. narodna-pravda.ua '..,. «Promo»."
// ​​
// description: "Померла режисер Аньєс Варда"
// ​​
// publishedAt: "2019-03-29T12:04:00Z"
// ​​
// source: Object { id: null, name: "Narodna-pravda.ua" }
// ​​
// title: "У Франції померла знаменитий кінорежисер і продюсер - Народна Правда"
// ​​
// url: "https://narodna-pravda.ua/2019/03/29/u-frantsiyi-pomerla-znamenytyj-kinorezhyser-i-prodyuser/"
// ​​
// urlToImage: "https://narodna-pravda.ua/wp-content/uploads/2018/10/Svecha.jpg"
// ​​
// }

class Categories extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    let { categories } = this.props;
    console.log("categories", categories);
    return (
      <div className="container fluid">
        <div className="row">
          <div className="col-md-12">
            {categories && (
              <ul>
                {categories.map(category => {
                  if (
                    category.source.name !== "" &&
                    category.source.name !== null
                  )
                    return <li key={category.publishedAt}>{category.title}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
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
