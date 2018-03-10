import React, { Component } from "react"
import mapboxgl, { Marker } from 'mapbox-gl';
import './Map.css'

mapboxgl.accessToken = "pk.eyJ1IjoiZGlhbW9uZGpvenUiLCJhIjoiY2plMXc2cXJvMjBwdjJxbjhwdnprcXI0aSJ9.cqLXqWxx7g3WyeRSmdDehQ"

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: -0.1231910,
      lat: 51.5117800,
      zoom: 0.5
    }
  }

  renderPopUp(feature) {
    const popupOffsets = {
      'top': [15, 0],
      'top-left': [0,0]
    }

    const popup = new mapboxgl.Popup({ offset: popupOffsets })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.name + '</h3><p>' + feature.properties.id + '</p>')
      .addTo(this.map)
  }

  setClickHandler() {
    this.map.on("click", (ev) => {
      const features = this.map.queryRenderedFeatures(ev.point, {
        layers: ['tfl-bike-points']
      })
  
      if (!features.length) {
        return;
      }
    
      const feature = features[0];

      this.renderPopUp(feature)
    })
  }

  componentDidMount() {
    const {lng, lat, zoom} = this.state

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/diamondjozu/cje1vr0unc2vk2sr3y1t4d3el',
      center: [lng, lat],
      zoom
    })

    this.setClickHandler()
  }

  render () {
    const { lng, lat, zoom } = this.state;

    return (
        <div
          id="lotus-map"
          ref={currEl => this.mapContainer = currEl}>
        </div>
    )
  }
}

export default Map