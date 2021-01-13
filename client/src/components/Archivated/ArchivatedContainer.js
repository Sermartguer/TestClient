import React, { Component } from "react";

import NewItem from "../NewItem";

import { connect } from "react-redux";
import * as actions from "../../redux/news/news.actions";
class Archivated extends Component {
  constructor() {
    super();
    this.state = {
      archivedItems: [1, 2, 3],
    };
    this.removeNew = this.removeNew.bind(this);
  }
  removeNew(id) {
    this.props.updateNews("archived", id);
  }
  componentDidMount() {
    this.props.getNews("archived");
  }
  static getDerivedStateFromProps(props, state) {
    let { archivedList } = props;
    if (archivedList) {
      return {
        archivedItems: archivedList,
      };
    }
    return null;
  }
  render() {
    return (
      <div className="container">
        {this.state.archivedItems.map((item, index) => {
          return (
            <div className="row justify-content-center" key={index}>
              <NewItem
                type={"archivated"}
                action={this.removeNew}
                id={item._id}
                new={item}
              />
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
export default connect(mapStateToProps, actions)(Archivated);
