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
  gatherDetails = async () => {
    console.log(
      `this is ${this.props.count} image with ID ${this.props.post.id}`
    );

    return await this.props.cb(this.props.post);
  };

  // async componentDidMount() {
  //   console.log("in mount");
  //   const postDetails = await this.props.cb(this.props.post);

  //   if (postDetails) {
  //     console.log("insie sucess");
  //     this.setState({
  //       postEXIF: postDetails,
  //     });
  //   }
  //   console.log("out mount");
  // }

  componentDidMount() {
    const data = this.props.cb(this.props.post);
    this.setState({ postEXIF: data }, () => {
      console.log(this.state);
    });
  }
  render() {
    console.log(
      `this is ${this.props.count} image with ID ${this.props.post.id}`
    );
    // console.log(`${JSON.stringify(this.state.postEXIF)} from state`);
    // let image_extract = this.props.cb(this.props.post.id);
    // console.log(image_extract);
    // console.log("888888888888888" + JSON.stringify(this.state.postEXIF));

    return <div>sample</div>;
    // return (
    //   <div className="container">
    //     {this.state.postList.map((post) => (
    //       <Card className="cards-layout" key={"post" + post.id}>
    //         <div className="posts">
    //           <CardHeader
    //             avatar={<Avatar src={post.profilePic} alt="pic" />}
    //             title={post.username}
    //             // subheader="03/10/2018 16:07:24"
    //             subheader={this.getPostDate(post.timestamp)}
    //           />
    //           <CardContent>
    //             <CardMedia image={post.media_url} />
    //             <hr />
    //             <Typography variant="body2" color="inherit" component="p">
    //               {post.caption}
    //             </Typography>
    //             <Typography
    //               variant="body2"
    //               style={{ color: "blue" }}
    //               display="inline"
    //             >
    //               {post.tags &&
    //                 post.tags.map((value, key) => {
    //                   return (
    //                     <span key={"tag" + key} style={{ marginRight: 5 }}>
    //                       {" "}
    //                       {value}{" "}
    //                     </span>
    //                   );
    //                 })}
    //             </Typography>
    //             <CardActions disableSpacing>
    //               <div className="likes">
    //                 <div
    //                   className={post.likeIcon}
    //                   onClick={() => this.likeClickHandler(post.id)}
    //                 >
    //                   <FavoriteBorderIcon />
    //                 </div>
    //                 <div className={post.likedIcon}>
    //                   <FavoriteIcon
    //                     style={{ color: "red" }}
    //                     onClick={() => this.likedClickHandler(post.id)}
    //                   />
    //                 </div>
    //                 <span style={{ marginLeft: 10, marginBottom: 8 }}>
    //                   {post.likesCount < 2 ? (
    //                     <div> {post.likesCount} like </div>
    //                   ) : (
    //                     <div> {post.likesCount} likes </div>
    //                   )}
    //                 </span>
    //               </div>
    //             </CardActions>
    //             <div className="comments-section">
    //               {post.commentContent.map((value, key) => (
    //                 <CardActions>
    //                   <div key={"comment" + key}>
    //                     <Typography
    //                       variant="body2"
    //                       color="inherit"
    //                       component="span"
    //                       style={{ fontWeight: "bold" }}
    //                     >
    //                       {post.username}:{" "}
    //                     </Typography>
    //                     {value}
    //                   </div>
    //                 </CardActions>
    //               ))}
    //             </div>
    //             <br />
    //             <div className="comments">
    //               <FormControl className="control">
    //                 <InputLabel htmlFor="comment">Add a comment</InputLabel>
    //                 <Input
    //                   comment={this.state.comment}
    //                   onChange={(e) => this.commentChangeHandler(e, post.id)}
    //                   value={post.clear}
    //                 />
    //               </FormControl>
    //               <Button
    //                 variant="contained"
    //                 color="primary"
    //                 style={{ marginLeft: 20 }}
    //                 onClick={() => this.addCommentHandler(post.id)}
    //               >
    //                 ADD
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </div>
    //       </Card>
    //     ))}
    //   </div>
    // );

    //   <Card key={image_id} className="post-card">
    //     {/* <div>{caption}</div>
    //     <div>{image_data.username}</div> */}
    //     {/* <CardHeader
    //       avatar={<Avatar alt="profile_picture" src={profile_pic} />}
    //       //   title={details.user.username}
    //       // subheader={new Date(
    //       //   details.created_time * 1000
    //       // ).toLocaleString()}
    //     /> */}
    //     {/* <CardContent>
    //             <img
    //               className="post-image"
    //               src={details.images.standard_resolution.url}
    //               alt={details.id}
    //             />
    //             <hr />
    //             <div className="post-caption">
    //               {details.caption.text.split("\n")[0]}
    //             </div>
    //             {details.tags.map((tag, index) => (
    //               <span key={index}>
    //                 <a className="post-tags" href={tag}>
    //                   {"#" + tag + " "}
    //                 </a>
    //               </span>
    //             ))}
    //             <br />
    //             <div className="likes">
    //               <FavoriteBorderIcon fontSize="default" />
    //               <pre> </pre>
    //               <span>{details.likes.count + " likes"}</span>
    //             </div>
    //             <div className="post-comment">
    //               <FormControl className="post-comment-form-control">
    //                 <InputLabel htmlFor="comment">Add a comment</InputLabel>
    //                 <Input className="comment-input" type="text" />
    //               </FormControl>
    //               <div className="add-button">
    //                 <FormControl>
    //                   <Button variant="contained" color="primary">
    //                     ADD
    //                   </Button>
    //                 </FormControl>
    //               </div>
    //             </div>
    //           </CardContent> */}
    //   </Card>
  }
}
