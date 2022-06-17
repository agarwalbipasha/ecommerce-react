import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>
        <a
          href="target_blank"
          className="text-darkGrayishBlue hover:underline underline-offset-[20px] decoration-4 decoration-orange cursor-pointer hover:font-semibold"
        >
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default ListItem;
