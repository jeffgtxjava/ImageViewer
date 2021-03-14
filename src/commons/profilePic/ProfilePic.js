import React, { Component } from "react";
import "./ProfilePic.css";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import profile_pic from "../../assets/images/profile_pic.png";

export default class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false,
      anchorEl: null,
      loggedOut: this.props.loggedOut,
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

  onLogout = () => {
    this.setState({ loggedOut: true });
    console.log(this.props);
    console.log(this.state);
  };

  render() {
    return (
      <>
        <IconButton id="profile-icon" onClick={this.onProfileIconClick}>
          <Avatar
            alt="profile_picture"
            src={this.props.isLoggedIn ? profile_pic : null}
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
            <MenuItem onClick={this.onLogout}>
              <Typography>Logout</Typography>
            </MenuItem>
          </Menu>
        </div>
      </>
    );
  }
}
