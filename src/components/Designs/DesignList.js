import React, { Component } from "react";
import Design from "./Design";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    allDesigns {
      id
      url
      description
    }
  }
`;

class DesignList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) {
            console.log(error);
            return <div>Error</div>;
          }

          const linksToRender = data.allDesigns;
          return (
            <div className="ui grid stackable">
              {linksToRender.map((design) => (
                <Design key={design.id} design={design} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default DesignList;
