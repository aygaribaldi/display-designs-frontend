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
                src={require(`../../images/${this.props.design.url}`)}
              />
            </div>
            <div className="content">
              <div className="header">{this.props.design.url}</div>
              {/* <div className="meta">
                <a>link id: {this.props.design.id}</a>
              </div> */}
              <div className="description">{this.props.design.description}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <Link
                  className="ui primary button"
                  to={{
                    pathname: `/edit/${this.props.design.id}`,
                    state: {
                      description: this.props.design.description,
                      url: this.props.design.url,
                    },
                  }}
                >
                  Edit
                </Link>
                <Link
                  className="ui negative button"
                  to={{
                    pathname: `/delete/${this.props.design.id}`,
                    state: {
                      url: this.props.design.url,
                    },
                  }}
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
