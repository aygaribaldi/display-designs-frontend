import React, { Component } from "react";
import gql from "graphql-tag";
import DesignForm from "./DesignForm";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    createDesign(description: $description, url: $url) {
      url
      description
    }
  }
`;

class AddDesign extends Component {
  render() {
    return <DesignForm mutation={POST_MUTATION} action="Add Design" />;
  }
}

export default AddDesign;
