import React, { Component } from "react";

import NewItem from "./components/NewItem";
class News extends Component {
  constructor() {
    super();
    this.state = {
      newItems: [1, 2, 3, 4],
    };
  }
  render() {
    return (
      <div className="container">
        {this.state.newItems.map((item, index) => {
          return (
            <div className="row justify-content-center">
              <NewItem key={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
