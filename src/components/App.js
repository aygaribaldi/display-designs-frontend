import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DesignList from "./DesignList";
import AddDesign from "./AddDesign";
import Header from "./Header";
import EditDesign from "./EditDesign";
import DeleteDesign from "./DeleteDesign";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <Switch>
          <Route exact path="/" component={DesignList} />
          <Route path="/add" component={AddDesign} />
          <Route path="/edit/:id" component={EditDesign} />
          <Route path="/delete/:id" component={DeleteDesign} />
        </Switch>
      </div>
    );
  }
}

export default App;
