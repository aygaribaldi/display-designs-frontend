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
            console.log(data);
            return <div>Error</div>;
          }

          const linksToRender = data.allDesigns;
          console.log("ALL LINKS: " + data.Designs);
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
