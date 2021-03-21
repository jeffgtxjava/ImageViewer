import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    if (this.props.isLoggedIn === true) {
      return (
        <div>
          <span>Profile Page</span>
        </div>
      );
    }
  }
}
