import React from "react";
import styled from "styled-components";
import { Marker as RMGMarker } from "react-mapbox-gl";
import { ReactComponent as Warning } from "./warning.svg";

const Marker = ({ lat, lng, updated, contained, size, name, onClick }) => {
  return (
    <RMGMarker anchor="bottom" coordinates={[lng, lat]} onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {contained < 70 ? <RedWarning /> : <YellowWarning />}
        <Title>{name}</Title>
      </div>
    </RMGMarker>
  );
};

export default Marker;

const Title = styled.h2`
  color: white;
  align-items: center;
  cursor: pointer;
`;

const YellowWarning = styled(Warning)`
  color: yellow;
  height: 20px;
  margin-right: 1em;
`;
const RedWarning = styled(Warning)`
  color: red;
  height: 20px;
  margin-right: 1em;
`;
