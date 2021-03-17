import React, { Component } from "react";
import "./Header.css";
import SearchBox from "../searchBox/SearchBox";
import ProfilePic from "../profilePic/ProfilePic";
import { Redirect } from "react-router";

class Header extends Component {
  onLoginChange = (newStatus) => {
    this.props.onIsLoggedInChanged(newStatus);
  };

  render() {
    // if (
    //   sessionStorage.getItem("access-tokne") === undefined ||
    //   this.props.isLoggedIn === false
    // ) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // }

    return (
      <header className="app-header">
        {console.log(this.props)}
        {sessionStorage.getItem("access-token") &&
        this.props.isLoggedIn === true ? (
          <>
            <div style={{ float: "left", display: "inline" }}>
              <span className="header-logo-text">Image Viewer</span>
            </div>
            <div style={{ float: "right", display: "inline" }}>
              <SearchBox {...this.props} allPosts={this.props.allPosts} />
              <ProfilePic
                {...this.props}
                onIsLoggedInChanged={this.onLoginChange}
              />
            </div>
          </>
        ) : (
          <div style={{ float: "left", display: "inline" }}>
            <span className="header-logo-text">Image Viewer</span>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
