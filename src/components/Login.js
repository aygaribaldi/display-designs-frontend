import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation createUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      authProvider: { email: $email, password: $password }
    ) {
      id
      name
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(auth: { email: $email, password: $password }) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
        <div className="flex flex-column mt3 ui labeled input">
          {!login && (
            <input
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="item">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={(data) => this._confirm(data)}
          >
            {(mutation) => (
              <div className="ui button primary" onClick={mutation}>
                {login ? "Login" : "Create Account"}
              </div>
            )}
          </Mutation>
          <div
            className="ui button primary"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? "Create an Account" : "I already have an account"}
          </div>
        </div>
      </div>
    );
  }

  _confirm = async (data) => {
    const { token } = this.state.login ? data.signinUser : data.createUser;
    if (token) this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
