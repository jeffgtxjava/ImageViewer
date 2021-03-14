import React, { Component, Fragment } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import {
  Avatar,
  IconButton,
  Input,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import SearchBox from "../searchBox/SearchBox";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuState: false,
      anchorEl: null,
    };
  }

  onProfileIconClick = (e) => {
    this.setState({
      menuState: !this.state.menuState,
      anchorEl: e.currentTarget,
    });
  };

  onMenuClose = () => {
    this.setState({ menuState: !this.state.menuState, anchorEl: null });
  };
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
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
