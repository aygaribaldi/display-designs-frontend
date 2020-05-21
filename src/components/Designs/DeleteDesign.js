import React from "react";
import Modal from "../Modal";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import history from "../history";

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: String!) {
    deleteDesign(id: $id)
  }
`;

class DeleteDesign extends React.Component {
  renderContent() {
    return (
      <div>
        Are you sure you want to delete design {this.props.location.state.url}?
      </div>
    );
  }
  renderButtons() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Link to="/" className="ui primary button">
          Cancel
        </Link>
        <Mutation
          mutation={DELETE_MUTATION}
          variables={{ id }}
          onCompleted={() => history.push("/")}
        >
          {(deleteMutation) => (
            <button className="ui negative button" onClick={deleteMutation}>
              Delete
            </button>
          )}
        </Mutation>
      </div>
    );
  }
  render() {
    return (
      <Modal
        title="Delete Design"
        content={this.renderContent()}
        actions={this.renderButtons()}
        onDismiss={() => this.props.history.push("/")}
      />
    );
  }
}

export default withRouter(DeleteDesign);
