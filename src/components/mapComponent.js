import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoianVhbnBhcHBhbGFyZG8iLCJhIjoiY2tieTA3aGl2MG11djJycDdobmtpMjdsZCJ9.UK_FDB8_1of-hNMllUtzbA";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -64.0,
      lat: -34.0,
      zoom: 4,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinades = this.getCoordinades.bind(this);
    this.mountMap = this.mountMap.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getCoordinades(position) {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      zoom: 15,
    });
    this.mountMap();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinades,
        this.mountMap
      );
    } else {
      this.mountMap();
      alert("¡Ups! No pudimos encontrar tu ubicación.");
    }
  }

  mountMap() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/juanpappalardo/ckby1iqsp0sgu1ilcgbk0hp1v",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    if (this.state.lng != -64.0 && this.state.lat != -34.0) {
      var el = document.createElement("div");
      el.className = "marker-house";
      new mapboxgl.Marker(el)
        .setLngLat([this.state.lng, this.state.lat])
        .addTo(map);
    }

    this.props.db.map((farmacia) =>
      new mapboxgl.Marker()
        .setLngLat([Number(farmacia.longitud), Number(farmacia.latitud)])
        .addTo(map)
        .setPopup(
          new mapboxgl.Popup(farmacia).setHTML(
            "<h4 class='marker-title'>" +
              farmacia.establecimiento_nombre +
              "</h4>" +
              "<h6>" +
              farmacia.domicilio +
              "</h6>" +
              "<h6>" +
              farmacia.localidad_nombre +
              "</h6>" +
              "<a class='btn btn-link btn-popup' href='" +
              farmacia.sitio_web +
              "' >" +
              farmacia.sitio_web +
              "</a>"
          )
        )
    );
    // add the marker to the map
  }

  render() {
    return (
      <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
    );
  }
}

export default Map;
