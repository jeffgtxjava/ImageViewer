import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Posts.css";
import React, { Component } from "react";
import { Redirect } from "react-router";
import Post from "../post/Post";

export default class Posts extends Component {
  render() {
    if (
      sessionStorage.getItem("access-token") === undefined ||
      this.props.isLoggedIn === false
    ) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <>
        <div className="posts-card-container" style={{ marginTop: "10px" }}>
          {console.log(this.props.allPosts)}
          {(this.props.allPosts || []).map((details, index) => (
            <>
              <Post image_details={details} />
              {/* <div>simple text</div> */}
            </>
          ))}
        </div>
      </>
    );
  }
}
