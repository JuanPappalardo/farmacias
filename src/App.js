import React, { useState } from "react";
import "./App.css";
import ReactMapGL, { Marker } from "react-map-gl";
import { FARMACIAS } from "./data/listado";

function App() {
  const [viewport, setViewport] = useState({
    latitude: -34.816667,
    longitude: -58.283333,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

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
            <img className="farma-btn" src="images/medicine.svg" />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
