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
          {(this.props.allPosts || []).map((details, index) => (
            <Card key={details.id} className="post-card">
              {/* {console.log(details)} */}
              <div>{details.caption}</div>
              {/* <CardHeader
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
              </CardContent> */}
            </Card>
          ))}
        </div>
      </>
    );
  }
}
