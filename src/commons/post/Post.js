import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postEXIF: {},
    };
  }

  async componentDidMount() {
    console.log("mount started");
    const data = await this.props.cb(this.props.post);
    this.setState({ postEXIF: data });
    console.log("mount completed");
  }

  render() {
    console.log("this is from RENDER");
    console.log(this.props.containerId.replace('"', ""));
    let postDetails = JSON.parse(sessionStorage.getItem(this.props.post.id));
    console.log(this.props.post.id);
    console.log(postDetails);

    // if (JSON.stringify(this.state.postEXIF) === JSON.stringify({})) {
    //   return null;
    // }
    // if (JSON.stringify(this.state.postEXIF) !== JSON.stringify({}))
    // if (JSON.stringify(postDetails)) === JSON.stringify({}))
    return <div key={this.props.containerId}>Sample Text</div>;
    // else return <div key={this.props.containerId}>{"data loaded"}</div>;

    /*
    <Card className="cards-layout" key={"post" + post.id}>
      <div className="posts">
        <CardHeader
          avatar={<Avatar src={postDetails.profilePic} alt="pic" />}
          title={postDetails.username}
          subheader={this.getPostDate(postDetails.timestamp)}
        />
        <CardContent>
          <CardMedia className={classes.media} image={postDetails.media_url} />
          <hr />
          <Typography variant="body2" color="inherit" component="p">
            {postDetails.caption}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "blue" }}
            display="inline"
          >
            {postDetails.tags &&
              postDetails.tags.map((value, key) => {
                return (
                  <span key={"tag" + key} style={{ marginRight: 5 }}>
                    {" "}
                    {value}{" "}
                  </span>
                );
              })}
          </Typography>
          <CardActions disableSpacing>
            <div className="likes">
              <div
                className={postDetails.likeIcon}
                onClick={() => this.likeClickHandler(postDetails.id)}
              >
                <FavoriteBorderIcon />
              </div>
              <div className={postDetails.likedIcon}>
                <FavoriteIcon
                  style={{ color: "red" }}
                  onClick={() => this.likedClickHandler(postDetails.id)}
                />
              </div>
              <span style={{ marginLeft: 10, marginBottom: 8 }}>
                {postDetails.likesCount < 2 ? (
                  <div> {postDetails.likesCount} like </div>
                ) : (
                  <div> {postDetails.likesCount} likes </div>
                )}
              </span>
            </div>
          </CardActions>
          <div className="comments-section">
            {postDetails.commentContent.map((value, key) => (
              <CardActions>
                <div key={"comment" + key}>
                  <Typography
                    variant="body2"
                    color="inherit"
                    component="span"
                    style={{ fontWeight: "bold" }}
                  >
                    {postDetails.username}:{" "}
                  </Typography>
                  {value}
                </div>
              </CardActions>
            ))}
          </div>
          <br />
          <div className="comments">
            <FormControl className="control">
              <InputLabel htmlFor="comment">Add a comment</InputLabel>
              <Input
                comment={this.state.comment}
                onChange={(e) => this.commentChangeHandler(e, postDetails.id)}
                value={postDetails.clear}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 20 }}
              onClick={() => this.addCommentHandler(postDetails.id)}
            >
              ADD
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>;
    */
  }
}
