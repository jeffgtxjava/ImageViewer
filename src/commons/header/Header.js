import React, { Component, Fragment } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Avatar, IconButton, Input, InputAdornment } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        {this.props.isLoggedIn !== true ? (
          <div>
            <span className="header-logo-text">Image Viewer</span>
          </div>
        ) : (
          <div>
            <span className="header-logo-text">Image Viewer</span>
            <Fragment>
              <div>
                <header className="logo">Image Viewer</header>
              </div>
              <div className="header-right-flex-container">
                <Input
                  className="search-box"
                  type="search"
                  placeholder="Search..."
                  disableUnderline
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
                <IconButton>
                  <Avatar
                    alt="profile_picture"
                    src={this.props.profilePictureUrl}
                  />
                </IconButton>
              </div>
            </Fragment>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
