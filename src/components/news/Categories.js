import React, { Component } from "react";
import { getCategories } from "../../actions/categoriesActions";
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

  trimUrlHelper = (url) => {
    let [, , trimUrl] = url.split('/');
    return trimUrl;
  }

  getDateHelper = (date) => {
    let d = new Date();
    d.setTime(Date.parse(date));
    return d.toLocaleString();
  }

  render() {
    let { categories } = this.props;
    console.log("categories", categories);
    return (
      <div className="container-fluid" style={{ border: '1px solid red' }}>
        <div className="row">
          <div className="col-md-12">
            {categories && (
              <ul className="list-group" >
                {categories.map(category => {
                  if (category.source.name)
                    return (<li className="list-group-item" key={category.publishedAt}>
                      <p>
                        {this.getDateHelper(category.publishedAt)}

                      </p>
                      <p className="lead">{category.title}</p>
                      <p>{category.description}</p>
                      {/* <img src={category.urlToImage} className="float-left img-thumbnail" alt="..." /> */}
                      <img src={category.urlToImage} alt="..." className="img-fluid img-thumbnail" width="200" height="200" />
                      <a href={category.url}> Читати на сайтi: {this.trimUrlHelper(category.url)}</a>
                    </li>);
                })}
              </ul>
            )
            }
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
