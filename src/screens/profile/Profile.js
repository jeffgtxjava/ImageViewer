import React, { Component } from "react";
import { Redirect } from "react-router";
import DialogForm from "../../commons/dialogForm/DialogForm";
import Header from "../../commons/header/Header";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: null,
    };
  }

  componentDidMount() {
    if (!this.props.allPosts) {
      this.fetchAllPosts();
    }
  }

  fetchAllPosts = () => {
    let data = null;

    let xhr = new XMLHttpRequest();

    let that = this;

    let url = `${
      that.props.baseUrl
    }me/media?fields=id,caption&access_token=${sessionStorage.getItem(
      "access-token"
    )}`;

    xhr.open("GET", url);

    xhr.send(data);

    xhr.addEventListener("readystatechange", async function() {
      if (this.readyState === 4) {
        that.setState({
          allPosts: JSON.parse(this.responseText).data,
          filterPosts: JSON.parse(this.responseText).data,
        });
      }
    });
  };

  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />;
    }

    let { allPosts } = this.state;

    if (this.props.isLoggedIn === true) {
      return (
        <div>
          {allPosts && (
            <>
              <DialogForm
                showModal={openModal}
                selectedAction={{
                  postModal,
                  editModal,
                  nameFieldEmpty,
                }}
                selectedpostDetails={selectedPostDetails}
                updateUserNameHandler={this.updateUserNameHandler}
                userNameSubmitHandler={this.userNameSubmitHandler}
                closeFormDialogHandler={this.closeFormDialogHandler}
              />
              <div>
                <Header
                  isLoggedIn={this.props.isLoggedIn}
                  allPosts={this.state.allPosts}
                  showSearchBox={false}
                  {...this.props}
                />
              </div>
            </>
          )}
        </div>
      );
    }
  }
}
