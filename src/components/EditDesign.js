import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";

const PATCH_MUTATION = gql`
  mutation PatchMutation($id: String!, $description: String!, $url: String!) {
    editDesign(id: $id, description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

class EditDesign extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  state = {
    id: this.props.match.params.id,
    description: this.props.location.state.description,
    url: this.props.location.state.url,
  };
  renderGetUrl = () => {
    const { url } = this.state;
    return (
      <div className="flex flex-column mt3 ui labeled input">
        <div className="ui label">Image Url</div>
        <input
          className="mb2"
          value={url}
          onChange={(e) => this.setState({ url: e.target.value })}
          type="text"
          placeholder={url}
        />
      </div>
    );
  };
  renderGetDescription = () => {
    const { description } = this.state;
    return (
      <div className="flex flex-column mt3 ui labeled input">
        <div className="ui label">Image Description</div>
        <input
          className="mb2"
          value={description}
          onChange={(e) => this.setState({ description: e.target.value })}
          type="text"
          placeholder={description}
        />
      </div>
    );
  };
  render() {
    const { id, description, url } = this.state;
    const history = createBrowserHistory({ forceRefresh: true });
    return (
      <>
        <div>
          <h1>Edit Design {this.props.location.state.url}</h1>
          <img
            style={{ width: "270px", height: "300px" }}
            alt={description}
            src={require(`../images/${url}`)}
          />
          <br />
          {this.renderGetUrl()}
          <br />
          {this.renderGetDescription()}
        </div>

        <Mutation
          mutation={PATCH_MUTATION}
          variables={{ id, description, url }}
          onCompleted={() => history.push("/")}
        >
          {(patchMutation) => (
            <button className="ui button" onClick={patchMutation}>
              Submit
            </button>
          )}
        </Mutation>
      </>
    );
  }
}

export default EditDesign;
