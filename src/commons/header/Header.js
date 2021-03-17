import React, { Component } from "react";
import "./Header.css";
import SearchBox from "../searchBox/SearchBox";
import ProfilePic from "../profilePic/ProfilePic";
import { Redirect } from "react-router";

class Header extends Component {
  componentDidMount() {
    // console.log(`from Header \n ${JSON.stringify(this.props)}`);
  }

  onLoginChange = (newStatus) => {
    this.props.onIsLoggedInChanged(newStatus);
  };

  render() {
    console.log("------->\n" + JSON.stringify(this.props));

    if (this.props.isLoggedIn !== true) {
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
              <SearchBox {...this.props} allPosts={this.props.allPosts} />
              <ProfilePic
                {...this.props}
                onIsLoggedInChanged={this.onLoginChange}
              />
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
