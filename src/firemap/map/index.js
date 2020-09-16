import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { mapboxToken } from "../../mapbox-config";
import Marker from "../marker";

const Mapbox = ReactMapboxGl({
  accessToken: mapboxToken,
});

const Map = ({ markers, onClickMarker, selected }) => {
  return (
    <Mapbox
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={[selected?.lng || "-122.676483", selected?.lat || "45.5051"]}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          {...marker}
          onClick={() => onClickMarker(marker)}
        />
      ))}
    </Mapbox>
  );
};

export default Map;
