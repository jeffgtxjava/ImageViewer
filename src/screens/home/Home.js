import React, { Component } from "react";
import "./Home.css";
import Header from "../../commons/header/Header";
import { Redirect } from "react-router";

export default class Home extends Component {
  render() {
    if (this.props.location.state === undefined) {
      return <Redirect to="/" />;
    }
    if (this.props.location.state.loginSuccess === true) {
      return (
        <div>
          <div>
            <Header isLoggedIn={true} />
          </div>
          <div>
            <span>Success</span>
          </div>
        </div>
      );
    }
  }
}
