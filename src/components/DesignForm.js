import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";

class DesignForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  state = {
    description: "",
    url: "",
  };
  renderId() {
    var id = null;
    if (this.props.id) id = this.props.id;
    return id;
  }
  render() {
    const { description, url } = this.state;
    const history = createBrowserHistory({ forceRefresh: true });
    return (
      <div>
        <h1>
          {this.props.action} | {this.renderId()}
        </h1>

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
          onCompleted={() => history.push("/")}
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
