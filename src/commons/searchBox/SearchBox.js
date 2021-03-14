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
    console.log(this.state.searchText);

    if (this.state.searchText == null || this.state.searchText.trim() === "") {
      this.setState({ filtered_post: this.props.allPosts });
      console.log("-------", this.state.filtered_post);
    } else {
      let filteredRecentPosts = this.props.allPosts.filter((ele) => {
        if (ele !== null) return ele.caption.includes(this.state.searchText);
      });
      this.setState({ filtered_post: filteredRecentPosts });
      console.log("-------", filteredRecentPosts);
    }
    console.log("completed search");
  };

  componentDidMount() {
    this.setState({ filtered_post: this.props.allPosts });
    console.log("From mount\n\n", this.state.filtered_post);
  }

  render() {
    console.log(this.props.allPosts);
    return (
      <div className="header-right-flex-container">
        {this.props.showSearchBox ? (
          <Input
            className="search-box"
            type="search"
            placeholder="Search..."
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={this.onSearch}
          />
        ) : null}
      </div>
    );
  }
}
