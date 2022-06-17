// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

class App extends Component {
  state = {
    invisible: true,
    count: 0,
  };

  decreaseCount = () => {
    let count = this.state.count;
    count = count > 0 ? --count : 0;
    this.setState({ count });
  };

  increaseCount = () => {
    let count = this.state.count;
    count++;
    this.setState({
      count: this.state.count + 1,
    });
  };

  changeVisibility = () => {
    // if (this.state.count < 1) {
    //   this.setState({ invisible: true })
    // }
    this.setState({ invisible: false });
  };

  removeRow = () => {
    this.setState({ invisible: true });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          invisible={this.state.invisible}
          removeRow={this.removeRow}
          count={this.state.count}
          items={this.state.items}
        />
        <Body
          invisible={this.state.invisible}
          changeVisibility={this.changeVisibility}
          count={this.state.count}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
      </React.Fragment>
    );
  }
}

export default App;
