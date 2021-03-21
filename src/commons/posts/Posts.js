import React, { Component } from "react";
import { Redirect } from "react-router";
import Post from "../post/Post";
import "./Posts.css";

export default class Posts extends Component {
  onImageTransfer = (imageId) => {
    console.log(`This is from the parent posts with imageid ${imageId}`);
    return this.props.cb(imageId);
  };
  render() {
    if (
      sessionStorage.getItem("access-token") === undefined ||
      this.props.isLoggedIn === false
    ) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <>
        <div className="container" style={{ marginTop: "10px" }} key={1234564}>
          {console.log(this.props.totalPosts)}
          {(this.props.totalPosts || []).map((post, index) => (
            <>
              <Post
                post={post}
                cb={this.props.cb}
                count={index}
                containerId={"post#" + index}
              />
            </>
          ))}
        </div>
      </>
    );
  }
}
