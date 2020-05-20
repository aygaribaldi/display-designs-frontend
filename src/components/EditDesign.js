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
  renderInput = (title, item) => {
    return (
      <div className="flex flex-column mt3 ui labeled input">
        <div className="ui label">{title}</div>
        <input
          className="mb2"
          value={item}
          onChange={(e) => this.setState({ url: e.target.value })}
          type="text"
          placeholder={item}
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
            src={require(`../images/${this.props.location.state.url}`)}
          />
          <br />
          {this.renderInput("Image Description", this.state.description)}
          <br />
          {this.renderInput("Image url", this.state.url)}
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
