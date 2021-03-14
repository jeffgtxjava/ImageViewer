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
          <div>
            <span className="header-logo-text">Image Viewer</span>
          </div>
        ) : (
          <>
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
                <IconButton id="profile-icon" onClick={this.onProfileIconClick}>
                  <Avatar
                    alt="profile_picture"
                    src={this.props.profilePictureUrl}
                  />
                </IconButton>
                <div>
                  <Menu
                    open={this.state.menuState}
                    onClose={this.onMenuClose}
                    anchorEl={this.state.anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    keepMounted
                  >
                    <MenuItem>
                      <Typography>My Account</Typography>
                    </MenuItem>
                    <hr className="horizontal-line" />
                    <MenuItem>
                      <Typography>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </Fragment>
          </>
        )}
      </header>
    );
  }
}

export default Header;
