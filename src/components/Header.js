import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends React.Component {
  render() {
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
            <Link to="/login" className="item">
              Login
            </Link>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default withRouter(Header);
