import React, { Component } from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import "../css/main.css";
import ListItems from "./ListItems";
import Cart from "./Cart";

class NavBar extends Component {
  render() {
    console.log(this.props.items);
    return (
      <nav className="relative container mx-auto p-1 sticky top-0 border-b-2 m-2">
        <div className="flex items-center justify-between">
          <div className="space-between flex space-x-10 items-center p-4">
            <Logo />
            <ListItems />
          </div>
          <div className="flex items-center content-center">
            <Cart
              invisible={this.props.invisible}
              removeRow={this.props.removeRow}
              count={this.props.count}
              items={this.props.items}
            />
            <div className="p-4 bg-contain bg-no-repeat text-white bg-white rounded-full baseline bg-avatar cursor-pointer ring ring-0 hover:ring-2 ring-orange " />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
