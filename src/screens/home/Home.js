import React, { Component } from "react";
import "./Home.css";
import Header from "../../commons/header/Header";

export default class Home extends Component {
  componentDidMount() {
    // API endpoint 1
    let xhrAPI1 = new XMLHttpRequest();
    xhrAPI1.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(JSON.stringify(this.responseText));
      }
    });
    xhrAPI1.open(
      "GET",
      this.props.baseUrl +
        "?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784"
    );
    xhrAPI1.send(null);

    //API endpoint 2

    let xhrAPI2 = new XMLHttpRequest();
    xhrAPI2.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(JSON.parse(this.responseText));
      }
    });

    xhrAPI2.open(
      "GET",
      this.props.baseUrl +
        "media/recent?access_token=8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784"
    );
    xhrAPI2.send(null);
  }

  render() {
    return (
      <div>
        <Header baseUrl={this.props.baseUrl} />
      </div>
    );
  }
}
