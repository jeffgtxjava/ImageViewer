import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../../screens/login/Login";

export default class Controller extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    );
  }
}
