import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Map from "./mapComponent";
import Home from "./homeComponent";
import { FadeTransform } from "react-animation-components";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Switch location={this.props.location}>
          <Route
            path="/home"
            component={() => (
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.75) translateY(-25%)",
                }}
              >
                <Home></Home>
              </FadeTransform>
            )}
          />
          <Route
            path="/map"
            component={() => (
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.75) translateY(-25%)",
                }}
              >
                <Map></Map>
              </FadeTransform>
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
