import React, { Component } from "react";

import NewItem from "../NewItem";
import { connect } from "react-redux";
import * as actions from "../../redux/news/news.actions";
class News extends Component {
  constructor() {
    super();
    this.state = {
      newsItems: [1, 2, 3, 4],
    };
    this.addToArchive = this.addToArchive.bind(this);
  }
  addToArchive(id) {
    this.props.updateNews("news", id);
  }
  componentDidMount() {
    this.props.getNews("news");
  }
  static getDerivedStateFromProps(props, state) {
    let { newsList } = props;
    if (newsList) {
      return {
        newsItems: newsList,
      };
    }
    return null;
  }
  render() {
    return (
      <div className="container">
        {this.state.newsItems.map((item, index) => {
          return (
            <div className="row justify-content-center" key={index}>
              <NewItem type={"news"} action={this.addToArchive} id={item._id} />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.news,
});
export default connect(mapStateToProps, actions)(News);