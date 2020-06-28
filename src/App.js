import React, { useState } from "react";
import "./App.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FARMACIAS } from "./data/listado";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function App() {
  const [viewport, setViewport] = useState({
    latitude: -34.816667,
    longitude: -58.283333,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [selectedFarma, setSelectedFarma] = useState(null);

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/juanpappalardo/ckby1iqsp0sgu1ilcgbk0hp1v"
      >
        {FARMACIAS.map((farmacia) => (
          <Marker
            key={farmacia.establecimiento_id}
            latitude={Number(farmacia.lat)}
            longitude={Number(farmacia.long)}
          >
            <button
              type="button"
              className="farma-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedFarma(farmacia);
              }}
            >
              <img src="images/medicine.svg" alt="farmacia-btn" />
            </button>
          </Marker>
        ))}
        {selectedFarma ? (
          <Popup
            className="popup-marker"
            latitude={Number(selectedFarma.lat)}
            longitude={Number(selectedFarma.long)}
            onClose={() => setSelectedFarma(null)}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3>{selectedFarma.establecimiento_nombre}</h3>
                </div>
                <div className="col-12">{selectedFarma.domicilio}</div>
                <div className="col-12">{selectedFarma.localidad_nombre}</div>
                {selectedFarma.sitio_web ? (
                  <a className="btn-popup" href={selectedFarma.sitio_web}>
                    Sitio web
                  </a>
                ) : null}
              </div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default App;
