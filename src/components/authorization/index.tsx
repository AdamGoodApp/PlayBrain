import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import FaceIcon from "@material-ui/icons/Face";

import "./index.scss";

interface State {
  [key: string]: string;
}

class Authorization extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = ({ target }: any) => {
    const value: string = target.value;
    const name: string = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: any) => {
    const { username, password } = this.state;
    const { login } = this.props;

    login({ username: username, password: password });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="auth-container">
        <div className="login-form">
          <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
            Login
          </Typography>

          <form>
            <TextField
              required
              fullWidth
              id="standard-required"
              label="Username"
              type="text"
              margin="normal"
              value={username}
              onChange={this.handleChange}
              name="username"
            />

            <TextField
              required
              fullWidth
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={password}
              onChange={this.handleChange}
              name="password"
            />

            <div style={{ marginTop: 40, textAlign: "center" }}>
              <Fab color="primary" aria-label="Add" onClick={this.handleSubmit}>
                <FaceIcon />
              </Fab>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login
};

export default connect(
  (state: any) => {
    const {
      app: { user }
    } = state;

    return {
      user
    };
  },
  mapDispatchToProps
)(Authorization);
