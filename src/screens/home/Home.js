import React, { Component } from "react";
import "./Home.css";
import Header from "../../commons/header/Header";
import { Redirect } from "react-router";

export default class Home extends Component {
  constructor() {
    super();
    this.baseUrl = "https://api.instagram.com/v1/";
    this.state = {
      profile_picture: "",
    };
  }

  componentDidMount() {
    this.fetchOwnerInfo();
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
          <div>
            <span>Success</span>
          </div>
        </div>
      );
    }
  }

  fetchOwnerInfo = () => {
    let data = null;

    let xhr = new XMLHttpRequest();

    let that = this;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        that.setState({
          profile_picture: JSON.parse(this.responseText).data.profile_picture,
        });
      }
    });

    let url =
      this.baseUrl +
      "users/self/?access_token=" +
      sessionStorage.getItem("access-token");

    xhr.open("GET", url);

    xhr.send(data);
  };
}
