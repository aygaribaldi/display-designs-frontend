// import React, { Component } from "react";
// import gql from "graphql-tag";
// import DesignForm from "./DesignForm";

// const PATCH_MUTATION = gql`
//   mutation PatchMutation($id: String!, $description: String, $url: String) {
//     editDesign(id: $id, description: $description, url: $url) {
//       id
//       url
//       description
//     }
//   }
// `;

// class EditDesign extends Component {
//   render() {
//     return (
//       <div>
//         <div>Editing {this.props.match.params.id}</div>
//         <DesignForm mutation={PATCH_MUTATION} action="Editing" />;
//       </div>
//     );
//   }
// }

// export default EditDesign;