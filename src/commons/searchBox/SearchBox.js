import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Input, InputAdornment } from "@material-ui/core";
import "./SearchBox.css";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered_post: null,
      searchText: "",
    };
  }

  onSearch = (e) => {
    console.log("started search");
    this.setState({
      searchText: e.target.value,
    });
    if (this.state.searchText == null || this.state.searchText.trim() === "") {
      this.setState({ filtered_post: this.props.allPosts });
    } else {
      let filteredRecentPosts = this.props.allPosts.filter((ele) => {
        return ele.caption.includes(this.state.searchText);
      });
      console.log(filteredRecentPosts);
    }
    console.log("completed search");
  };

  componentDidCatch() {
    this.setState({ filtered_post: this.props.allPosts });
    console.log("From mount\n\n", this.state.filtered_post);
  }

  render() {
    console.log("Render");
    return (
      <div className="header-right-flex-container">
        <Input
          className="search-box"
          type="search"
          placeholder="Search..."
          disableUnderline
          onChange={this.onSearch}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    );
  }
}
