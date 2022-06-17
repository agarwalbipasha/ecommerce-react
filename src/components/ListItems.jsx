import React, { Component } from "react";
import ListItem from "./ListItem";

class ListItems extends Component {
  state = {
    items: ["Collections", "Men", "Women", "About", "Contact"],
  };
  render() {
    return (
      <div className="hidden md:flex space-x-10 divide-0">
        {this.state.items.map((item) => (
          <ListItem key={item.name} id={item.name} name={item} />
        ))}
      </div>
    );
  }
}

export default ListItems;
