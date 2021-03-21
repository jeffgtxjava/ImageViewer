import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { red } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    margin: "2%",
    width: "auto",
    height: "auto",
    float: "left",
    padding: "0 75px 0 15px",
  },
  media: {
    height: 0,
    padding: "56.25%",
  },
  horizontalLine: {
    width: "112%",
  },
  content: {
    color: "#000000",
    margin: "-15px 0 0 -15px",
  },
  avatarAlignment: {
    paddingLeft: 0,
  },
  likeAlignment: {
    margin: "-20px 0 0 -20px",
  },
  hashTags: {
    display: "block",
    color: "#00376b",
  },
  textFieldWidth: {
    margin: "0 0 0 -7px",
    width: "86%",
  },
  likeStyle: {
    color: "#000000",
  },
  red: {
    color: red[500],
  },
  commentContainer: {
    width: "112%",
  },
  comments: {
    marginTop: 10,
    width: "107%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postEXIF: null,
      commentsList: [],
    };
  }

  async componentDidMount() {
    console.log("mount started");
    const data = await this.props.cb(this.props.post);
    setTimeout(() => this.setState({ postEXIF: data }), 1000);
    console.log("mount completed");
  }

  getPostDate = (timestamp) => {
    const dd = ("0" + timestamp.getDate()).slice(-2),
      mm = ("0" + (timestamp.getMonth() + 1)).slice(-2);
    return (
      dd +
      "/" +
      mm +
      "/" +
      timestamp.getFullYear() +
      " " +
      timestamp.getHours() +
      ":" +
      timestamp.getMinutes() +
      ":" +
      timestamp.getSeconds()
    );
  };

  //function to add a like to a post
  likeClickHandler = (id) => {
    let post = this.state.postEXIF;
    if (post.id === id) {
      post.likesCount += 1;
      post.likeIcon = "dispNone";
      post.likedIcon = "dispBlock";
      this.setState({
        likeIcon: "dispNone",
        likedIcon: "dispBlock",
      });
    }
  };

  //function to unlike a post
  likedClickHandler = (id) => {
    let post = this.state.postEXIF;
    if (post.id === id) {
      post.likesCount -= 1;
      post.likeIcon = "dispBlock";
      post.likedIcon = "dispNone";
      this.setState({
        likeIcon: "dispBlock",
        likedIcon: "dispNone",
      });
    }
  };

  //function to add comments
  onSubmitComment = (e, id) => {
    e.stopPropagation();
    let addedCommentVal = document
      .getElementById(`addComment_${id}`)
      .value.trim();
    let cList = this.state.commentsList;
    cList.push(addedCommentVal);
    setTimeout(() => {
      this.setState({
        commentsList: cList,
      });
    }, 100);
  };

  render() {
    let { postEXIF: postDetails, commentsList } = this.state;
    let { classes } = this.props;
    if (postDetails === null) {
      return <div>Loading...</div>;
    }
    console.log(postDetails);

    return (
      <Card className={classes.root} key={"imagePost" + postDetails.id}>
        <CardHeader
          className={classes.avatarAlignment}
          avatar={<Avatar src={postDetails.profilePic} alt="Profile picture" />}
          title={postDetails.username}
          subheader={this.getPostDate(postDetails.timestamp)}
        />
        <CardMedia className={classes.media} image={postDetails.media_url} />
        <hr className={classes.horizontalLine} />
        <CardContent className={classes.content}>
          <Typography variant="body2" component="p">
            {postDetails.caption}
            <span className={classes.hashTags}>{postDetails.hashTags}</span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.likeAlignment}>
          <div
            className={postDetails.likeIcon}
            onClick={(e) => this.likeClickHandler(postDetails.id)}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
          <div
            className={postDetails.likedIcon}
            onClick={(e) => this.likedClickHandler(postDetails.id)}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon className={classes.red} />
            </IconButton>
          </div>
          <Typography variant="body2" className={classes.likeStyle}>
            {postDetails.likesCount > 0 && postDetails.likesCount}
            {postDetails.likesCount > 1
              ? " Likes"
              : postDetails.likesCount > 0 && " Like"}
          </Typography>
        </CardActions>
        {commentsList &&
          commentsList.length > 0 &&
          commentsList.map((comment, idx) => (
            <Typography
              variant="body2"
              component="p"
              key={"comment" + idx}
              className={classes.commentContainer}
            >
              <strong>{postDetails.username}: </strong> {comment}
            </Typography>
          ))}
        <CardActions disableSpacing className={classes.comments}>
          <TextField
            id={`addComment_${postDetails.id}`}
            placeholder="Add a comment"
            className={classes.textFieldWidth}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => this.onSubmitComment(e, postDetails.id)}
          >
            ADD
          </Button>
        </CardActions>
      </Card>

      /*<Card>
        <CardHeader
          avatar={<Avatar src={postDetails.profilePic} alt="pic" />}
          title={postDetails.username}
          // subheader="03/10/2018 16:07:24"
          subheader={this.getPostDate(postDetails.timestamp)}
        />
        <CardContent>
          <CardMedia
            component={postDetails.media_type.toLowerCase()}
            className={classes.media}
            image={postDetails.media_url}
          />
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
                    {value}
                  </span>
                );
              })}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <div className="likes">
            <div style={{ display: "inline" }}>
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
            </div>

            <span style={{ marginLeft: 10 }}>
              {postDetails.likesCount < 2 ? (
                <span> {postDetails.likesCount} like </span>
              ) : (
                <span> {postDetails.likesCount} likes </span>
              )}
            </span>
          </div>
        </CardActions>
      </Card>
*/
      /*
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
      </Card>

      */
    );
  }
}
export default withStyles(styles)(Post);
