import React from "react";
import { Mutation } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class DesignForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  state = {
    description: "",
    url: "",
  };

  render() {
    const { description, url } = this.state;

    return (
      <div>
        <h1>{this.props.action}</h1>
        <div className="flex flex-column mt3 ui labeled input">
          <div className="ui label">Image Url</div>
          <input
            className="mb2"
            value={url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the image"
          />
          <br />
          <div className="ui label">Description</div>
          <input
            className="mb2"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the design"
          />
        </div>

        <Mutation
          mutation={this.props.mutation}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {(postMutation) => (
            <button className="ui button" onClick={postMutation}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(DesignForm);
