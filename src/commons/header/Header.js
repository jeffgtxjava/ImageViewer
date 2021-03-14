import React, { Component } from "react";
import "./Header.css";
import SearchBox from "../searchBox/SearchBox";
import ProfilePic from "../profilePic/ProfilePic";
import { Redirect } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
    };
  }
  render() {
    if (this.state.loggedOut === true) {
      return <Redirect to="/" />;
    }
    return (
      <header className="app-header">
        {this.props.isLoggedIn !== true ? (
          <div style={{ float: "left", display: "inline" }}>
            <span className="header-logo-text">Image Viewer</span>
          </div>
        ) : (
          <>
            <div style={{ float: "left", display: "inline" }}>
              <span className="header-logo-text">Image Viewer</span>
            </div>
            <div style={{ float: "right", display: "inline" }}>
              <SearchBox {...this.props} />
              <ProfilePic {...this.props} />
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
