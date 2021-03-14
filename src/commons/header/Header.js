import React, { Component } from "react";
import "./Header.css";
import SearchBox from "../searchBox/SearchBox";
import ProfilePic from "../profilePic/ProfilePic";

class Header extends Component {
  render() {
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
              <SearchBox />
              <ProfilePic />
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
