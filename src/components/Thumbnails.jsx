import React, { Component } from "react";

class Thumbnails extends Component {
  getClassNames = () => {
    let classname =
      "p-10 bg-cover bg-no-repeat rounded-lg  border-4 mt-4  min-h-fit border-transparent hover:opacity-50 cursor-pointer hover:border-2 hover:border-orange bg-";
    classname += this.props.thumbnail;
    return classname;
  };
  render() {
    return <div className={this.getClassNames()}></div>;
  }
}

export default Thumbnails;
