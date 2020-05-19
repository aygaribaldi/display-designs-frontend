import React, { Component } from "react";
import { Link } from "react-router-dom";

class Design extends Component {
  render() {
    return (
      <div className="four wide column">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img
                alt={this.props.design.description}
                src={require(`../images/${this.props.design.url}`)}
              />
            </div>
            <div className="content">
              <div className="header">{this.props.design.url}</div>
              <div className="meta">
                <a>link id: {this.props.design.id}</a>
              </div>
              <div className="description">{this.props.design.description}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <Link
                  to={`/edit/${this.props.design.id}`}
                  className="ui primary button"
                >
                  Edit
                </Link>
                <Link
                  to={`/delete/${this.props.design.id}`}
                  className="ui negative button"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
