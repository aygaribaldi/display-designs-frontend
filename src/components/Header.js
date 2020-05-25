import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

class Header extends React.Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div>
        <br />
        <div className="ui segment">
          <div className="ui huge header">
            <Link to="/">
              <h1>Alex Garibaldi's Designs</h1>
            </Link>
          </div>
        </div>
        <div className="ui inverted menu">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/add" className="item">
            Add Design
          </Link>
          <div className="right menu">
            <div className="flex flex-fixed">
              {authToken ? (
                <div
                  className="item"
                  onMouseOver={() => {
                    console.log("hovered");
                  }}
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN);
                    this.props.history.push(`/`);
                  }}
                >
                  Logout
                </div>
              ) : (
                <Link to="/login" className="item">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default withRouter(Header);
