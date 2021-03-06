import React, { Component } from "react";
import { getCategories } from "../../actions/categoriesActions";
import { connect } from "react-redux";
import Sidebar from '../layout/Sidebar';

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
          <div className="col-md-2">
            <Sidebar ></Sidebar>
          </div>
          <div className="col-md-10">
            <h1>Останнi новини</h1>
            {categories && (
              <ul className="list-group " >
                {categories.map(category => {
                  if (category.source.name)
                    return (<li className="list-group-item" key={category.publishedAt}>
                      <p>
                        {this.getDateHelper(category.publishedAt)}

                      </p>
                      <p className="lead">{category.title}</p>
                      <p>{category.description}</p>


                      <div className="row">
                        <div className="col-md-2">
                          <img src={category.urlToImage} alt="..." className="img-fluid img-thumbnail" width="300" height="300" />
                        </div>
                        <div className="col-md-10 pl-0 ml-0">
                          <p className="text-justify">{category.content}</p>
                          <a href={category.url}> Читати на сайтi: {this.trimUrlHelper(category.url)}</a>
                        </div>
                      </div>

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
