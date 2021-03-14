import React, { Component } from "react";
import "./ProfilePic.css";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

export default class ProfilePic extends Component {
  constructor(props) {
    super(props);
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
      <>
        <IconButton id="profile-icon" onClick={this.onProfileIconClick}>
          <Avatar alt="profile_picture" src={this.props.profilePictureUrl} />
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
      </>
    );
  }
}
