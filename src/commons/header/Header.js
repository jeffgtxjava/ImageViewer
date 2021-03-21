import React, { Component } from "react";
import "./Header.css";
import SearchBox from "../searchBox/SearchBox";
import ProfilePic from "../profilePic/ProfilePic";

class Header extends Component {
  onLoginChange = (newStatus) => {
    this.props.onIsLoggedInChanged(newStatus);
  };

  onFilterPosts = (updatedPosts) => {
    this.props.onfilterPostsChange(updatedPosts);
  };

  render() {
    return (
      <header className="app-header">
        {sessionStorage.getItem("access-token") &&
        this.props.isLoggedIn === true ? (
          <>
            <div style={{ float: "left", display: "inline" }}>
              <span className="header-logo-text">Image Viewer</span>
            </div>
            <div style={{ float: "right", display: "inline" }}>
              {this.props.showSearchBox}? (
              <SearchBox
                {...this.props}
                allPosts={this.props.allPosts}
                onfilterPostsChange={this.onFilterPosts}
              />
              ):(
              {null})
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
