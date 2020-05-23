import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DesignList from "./Designs/DesignList";
import AddDesign from "./Designs/AddDesign";
import Header from "./Header";
import EditDesign from "./Designs/EditDesign";
import DeleteDesign from "./Designs/DeleteDesign";
import Login from "./Login";

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
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
