import React, { useState, Fragment } from "react";
import { FARMACIAS } from "../data/farmacias_varela";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Button } from "reactstrap";

function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: -34.816667,
    longitude: -58.283333,
    width: "100%",
    height: "500px",
    zoom: 10,
  });

  const [selectedFarma, setSelectedFarma] = useState(null);

  return (
    <Fragment>
      <div className="container ">
        <div className="row pt-5">
          <div className="col-3 col-sm-1 d-flex justify-content-center align-items-center">
            <img src="/images/gummy-sanitizer.svg" className="map-logo"></img>
          </div>
          <div className="col-9 col-sm-11 d-flex align-items-end ">
            <h6 className="map-title display-3 ">
              <span className="donde">Local </span>
              <span className="farma">Farma</span>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mapa">
            {" "}
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
                  latitude={Number(farmacia.latitud)}
                  longitude={Number(farmacia.longitud)}
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
                  latitude={Number(selectedFarma.latitud)}
                  longitude={Number(selectedFarma.longitud)}
                  onClose={() => setSelectedFarma(null)}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h3>{selectedFarma.establecimiento_nombre}</h3>
                      </div>
                      <div className="col-12">{selectedFarma.domicilio}</div>
                      <div className="col-12">
                        {selectedFarma.localidad_nombre}
                      </div>
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
        </div>
        <div className="row">
          <div clssName="col-12">
            {" "}
            <Button className="m-2" href="/home" color="info">
              Volver
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Map;
