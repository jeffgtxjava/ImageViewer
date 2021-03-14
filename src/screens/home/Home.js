import React, { Component } from "react";
import "./Home.css";
import Header from "../../commons/header/Header";
import { Redirect } from "react-router";
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

export default class Home extends Component {
  constructor() {
    super();
    this.baseUrl = "https://api.instagram.com/v1/";
    this.state = {
      profile_picture: "",
      recent_media: null,
    };
  }

  componentDidMount() {
    this.fetchAllPosts();
  }

  render() {
    if (this.props.location.state === undefined) {
      return <Redirect to="/" />;
    }
    if (this.props.location.state.loginSuccess === true) {
      return (
        <div>
          <div>
            <Header isLoggedIn={true} />
          </div>
          {/* <div className="posts-card-container">
            {console.log("------------------")}
            {(this.state.recent_media || []).map((details, index) => (
              <Card key={details.id} className="post-card">
                {console.log(details)}
                <CardHeader
                  avatar={<Avatar src={details.user.profile_picture} />}
                  title={details.user.username}
                  subheader={new Date(
                    details.created_time * 1000
                  ).toLocaleString()}
                />
                <CardContent>
                  <img
                    className="post-image"
                    src={details.images.standard_resolution.url}
                    alt={details.id}
                  />
                  <hr />
                  <div className="post-caption">
                    {details.caption.text.split("\n")[0]}
                  </div>
                  {details.tags.map((tag, index) => (
                    <span key={index}>
                      <a className="post-tags" href={tag}>
                        {"#" + tag + " "}
                      </a>
                    </span>
                  ))}
                  <br />
                  <div className="likes">
                    <FavoriteBorderIcon fontSize="default" />
                    <pre> </pre>
                    <span>{details.likes.count + " likes"}</span>
                  </div>
                  <div className="post-comment">
                    <FormControl className="post-comment-form-control">
                      <InputLabel htmlFor="comment">Add a comment</InputLabel>
                      <Input className="comment-input" type="text" />
                    </FormControl>
                    <div className="add-button">
                      <FormControl>
                        <Button variant="contained" color="primary">
                          ADD
                        </Button>
                      </FormControl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))} 
                  </div>*/}
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
        console.log(this.responseText);
      }
    });

    // let url =
    //   this.baseUrl +
    //   "users/self/?access_token=" +
    //   sessionStorage.getItem("access-token");

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

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        that.setState({ recent_media: JSON.parse(this.responseText).data });
      }
    });

    // let url =
    //   this.baseUrl +
    //   "users/self/media/recent/?access_token=" +
    //   sessionStorage.getItem("access-token");
    let url = `${
      that.props.baseUrl
    }me/media?fields=id,caption&access_token=${sessionStorage.getItem(
      "access-token"
    )}`;

    xhr.open("GET", url);

    xhr.send(data);
  };
}
