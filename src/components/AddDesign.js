import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    createDesign(description: $description, url: $url) {
      url
      description
    }
  }
`;

class AddDesign extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  state = {
    description: "",
    url: "",
  };

  render() {
    const { description, url } = this.state;
    const history = createBrowserHistory({ forceRefresh: true });
    return (
      <div>
        <h1>Add a Design</h1>

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
          mutation={POST_MUTATION}
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

export default AddDesign;
