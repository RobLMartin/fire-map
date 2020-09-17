import React from "react";
import ReactMapboxGl, { RotationControl } from "react-mapbox-gl";
import { mapboxToken } from "../../mapbox-config";
import Marker from "../marker";

const Mapbox = ReactMapboxGl({
  accessToken: mapboxToken,
});

const Map = ({ markers, onClickMarker, selected, last }) => {
  return (
    <Mapbox
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      zoom={[7]}
      center={[
        selected?.lng || last?.lng || "-122.676483",
        selected?.lat || last?.lat || "45.5051",
      ]}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          {...marker}
          onClick={() => onClickMarker(marker)}
        />
      ))}
      <RotationControl />
    </Mapbox>
  );
};

export default Map;
