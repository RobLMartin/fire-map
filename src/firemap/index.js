import React from "react";
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";
import logo from "../logo.svg";
import token from "../mapbox-config";

const Firemap = ({ markers = [] }) => {
  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={["-122.676483", "45.5051"]}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinates={[marker.lng, marker.lat]}
          anchor="bottom"
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38],
          }}
        >
          <h1>{marker.name}</h1>
        </Marker>
      ))}
    </Map>
  );
};

export default Firemap;

const Map = ReactMapboxGl({
  accessToken: token,
});
