import React, { Component } from "react";

import NewItem from "../NewItem";
class News extends Component {
  constructor() {
    super();
    this.state = {
      newsItems: [1, 2, 3, 4],
    };
  }
  addToArchive(id){
    console.log(id)
  }
  render() {
    return (
      <div className="container">
        {this.state.newsItems.map((item, index) => {
          return (
            <div className="row justify-content-center" key={index}>
              <NewItem type={'news'} action={this.addToArchive} id={index}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
