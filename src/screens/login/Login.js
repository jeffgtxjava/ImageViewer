import React, { Component } from "react";
import Header from "../../commons/header/Header";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
const styles = {
  title: {
    fontSize: 20,
  },
};
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  loginHoverHandler = (e) => {
    e.target.style.cursor = "pointer";
  };
  render() {
    return (
      <div>
        <Header />
        <Card>
          <CardContent>
            <Typography style={styles.title}>LOGIN</Typography>
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor="username"> Username </InputLabel>
              <Input id="username" type="text" username={this.state.username} />
            </FormControl>
            <br />
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                type="password"
                password={this.state.password}
              />
            </FormControl>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onMouseOver={this.loginHoverHandler}
            >
              LOGIN
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
