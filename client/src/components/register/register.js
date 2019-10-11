import React, { Component } from "react";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import "../Login/login.css";
// import db from "../"
// import { flexbox } from "@material-ui/system";

//redux
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";


class Register extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  // };

  render() {
    // console.log(this.state);
    const { handleSubmit } = this.props;

    return (
      <div className="login">
        <Card
          className="classes-card "
          className="main-back"
          style={{
            opacity: 0.9,
            backgroundColor: "#ffffcc",
            borderRadius: "300px",
            width: "600px",
            height: "600px"
          }}
        >
          <CardContent>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                <Typography
                  component="div"
                  style={{
                    opacity: 0.9,
                    backgroundColor: "#ffffcc",
                    height: "600px",
                    paddingTop: "120px"
                  }}
                >
                  <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    className="content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "275px",
                      margin: "auto"
                    }}
                  >
                    {/* <Link to="/">Back to Game</Link> */}
                    <TextField
                      name="username"
                      type="text"
                      id="username"
                      label="Username"
                      margin="normal"
                      value={this.state.username}
                      onChange={this.handleChange}
                    >
                      <Field name="username" type="text" component="input" />
                    </TextField>
                    <TextField
                      name="email"
                      type="text"
                      id="email"
                      label="Email"
                      margin="normal"
                      value={this.state.email}
                      onChange={this.handleChange}
                    >
                      <Field name="email" type="text" component="input" />
                    </TextField>
                    <TextField
                      name="password"
                      id="password"
                      controlId="password"
                      label="Password"
                      type="password"
                      margin="normal"
                      value={this.state.password}
                      onChange={this.handleChange}
                    >
                      <Field name="password" type="password" component="input" />
                    </TextField>
                    <CardActions>
                      <Button
                        block
                        bsSize="large"
                        color="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Sign Up
                      </Button>
                      <Link to="/">Already a Member?</Link>
                    </CardActions>
                  </form>
                </Typography>
              </Container>
            </React.Fragment>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Register);
