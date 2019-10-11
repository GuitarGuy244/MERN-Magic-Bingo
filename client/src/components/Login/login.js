import React, { Component } from "react";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { /*BrowserRouter as Router, Route,*/ Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

//redux
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./login.css";
// import db from "../"
import { flexbox } from "@material-ui/system";

class Login extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
          className="classes-card"
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
                    // onSubmit={this.handleSubmit}
                    className="content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "275px",
                      margin: "auto"
                    }}
                  >
                    <TextField
                      name="email"
                      type="text"
                      id="email"
                      label="Email"
                      margin="normal"
                      // value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <TextField
                      name="password"
                      id="password"
                      controlId="password"
                      label="Password"
                      type="password"
                      margin="normal"
                      // value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <CardActions>
                      <Button
                        block
                        bsSize="large"
                        color="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick={this.handleSubmit}
                        value="Refresh Page"
                        onClick="window.location.reload();"
                      >
                        <Link to="/dashboard">Login</Link>
                      </Button>
                      <Link to="/register">New User? Register Here!</Link>
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
  reduxForm({ form: "signin" })
)(Login);
