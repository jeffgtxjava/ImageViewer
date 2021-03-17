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
    if (this.props.location.state !== undefined) {
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
            <Posts allPosts={this.state.allPosts} {...this.props} />
          </div>
        </div>
      );
    }
  }

  fetchImageDetailsById = (imageId) => {
    let data = null;

    let xhr = new XMLHttpRequest();

    let that = this;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        // that.setState({
        //   profile_picture: JSON.parse(this.responseText).data.profile_picture,
        // });
      }
    });

    let url = `${
      that.props.baseUrl
    }${imageId}?fields=id,media_type,media_url,username,timestamp&access_token=${sessionStorage.getItem(
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
        that.setState({ allPosts: JSON.parse(this.responseText).data });
      }
    });
  };
}
