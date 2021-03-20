import React, { Component } from "react";
import "./Home.css";
import Header from "../../commons/header/Header";
import { Redirect } from "react-router";
import Posts from "../../commons/posts/Posts";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: null,
      filterPosts: null,
    };
  }

  componentDidMount() {
    if (!this.props.filterPosts) {
      this.fetchAllPosts();
    }
  }

  onLoginChange = (newStatus) => {
    this.setState({ isLoggedIn: newStatus }, () => {});
  };

  onFilterPosts = async (updatedPosts) => {
    console.log("before");
    console.log(this.state);
    await this.setState({ filterPosts: updatedPosts });
    console.log("after");
    console.log(this.state);
    // this.props.onfilterPostsChange(updatedPosts);
  };

  fetchImageDetailsById = (imageId) => {
    console.log(imageId);
    let data = null;

    let xhr = new XMLHttpRequest();

    let that = this;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        // that.setState({
        //   profile_picture: JSON.parse(this.responseText).data.profile_picture,
        // });
        let parsedData = JSON.parse(this.responseText);
        // console.log(`8888888888 \n ${JSON.stringify(parsedData)}`);
        return parsedData;
      }
    });

    let url = `${that.props.baseUrl}${imageId.replace(
      /['"]+/g,
      ""
    )}?fields=id,media_type,media_url,username,timestamp&access_token=${sessionStorage.getItem(
      "access-token"
    )}`;

    xhr.open("GET", url);

    xhr.send(data);
  };

  fetchAllPosts = () => {
    let data = null;

    let xhr = new XMLHttpRequest();

    let that = this;

    let url = `${
      that.props.baseUrl
    }me/media?fields=id,caption&access_token=${sessionStorage.getItem(
      "access-token"
    )}`;

    xhr.open("GET", url);

    xhr.send(data);

    xhr.addEventListener("readystatechange", async function() {
      if (this.readyState === 4) {
        that.setState({
          allPosts: JSON.parse(this.responseText).data,
          filterPosts: JSON.parse(this.responseText).data,
        });
      }
    });
  };

  getPostDetails = (imageData) => {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    let accessToken = window.sessionStorage.getItem("access-token");
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4 && this.status === 200) {
        let parsedData = JSON.parse(this.responseText);
        let post = {};
        post.id = parsedData.id;
        // post.caption = imageData.caption || "This is default caption";
        post.media_url = parsedData.media_url;
        post.profilePic = that.state.profilePic;
        post.username = parsedData.username;
        post.likeIcon = "dispBlock";
        post.likedIcon = "dispNone";
        post.likesCount = Math.floor(Math.random() * 10);
        post.clear = "";
        // post.tags = post.caption.match(/#\S+/g);
        post.commentContent = [];
        post.timestamp = new Date(parsedData.timestamp);
        return post;
      }
    });
    xhr.open(
      "GET",
      this.props.baseUrl +
        imageData.id +
        "?fields=id,media_type,media_url,username,timestamp&access_token=" +
        accessToken
    );
    // xhr.setRequestHeader("Cache-Control", "no-cache");
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    return data;
  };
  render() {
    if (this.props.location.state === undefined) {
      return <Redirect to="/" />;
    }
    if (this.props.location.state.loginSuccess === true) {
      return (
        <div>
          <div>
            <Header
              isLoggedIn={this.props.location.state.loginSuccess}
              allPosts={this.state.allPosts}
              showSearchBox={true}
              onIsLoggedInChanged={this.onLoginChange}
              onfilterPostsChange={this.onFilterPosts}
              {...this.props}
            />
          </div>
          <div>
            <Posts
              allPosts={this.state.filterPosts}
              {...this.props}
              cb={this.fetchImageDetailsById.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
}
