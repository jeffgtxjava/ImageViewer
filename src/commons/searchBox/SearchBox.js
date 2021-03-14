import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Input, InputAdornment } from "@material-ui/core";
import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="header-right-flex-container">
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
        />
      </div>
    );
  }
}
