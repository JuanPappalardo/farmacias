import React, { Component, useState, Fragment } from "react";
import { FARMACIAS } from "../data/farmacias_varela";
import Map from "./mapComponent";
import { Button } from "reactstrap";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db: FARMACIAS,
    };
  }

  render() {
    return (
      <Fragment>
        <div className="mapa">
          <Map db={this.state.db}></Map>
          <Button className="m-2 position-fixed" href="/home" color="info">
            Volver
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default MapContainer;
