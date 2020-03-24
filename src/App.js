import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { showAllUsers } from "./actions/showAllUsers";
import HomePage from "./component/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default connect(null, { showAllUsers })(App);
