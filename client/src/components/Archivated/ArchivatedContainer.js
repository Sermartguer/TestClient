import React, { Component } from "react";

import NewItem from "../NewItem";
class Archivated extends Component {
  constructor() {
    super();
    this.state = {
      archivedItems: [1, 2, 3],
    };
  }
  removeNew(id){
    console.log(id)
  }
  render() {
    return (
      <div className="container">
        {this.state.archivedItems.map((item, index) => {
          return (
            <div className="row justify-content-center" key={index}>
              <NewItem type={'archivated'} action={this.removeNew} id={index}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Archivated;
