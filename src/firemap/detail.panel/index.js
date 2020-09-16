import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { openWeatherToken } from "../../mapbox-config";
const DetailPanel = ({
  id,
  name,
  onClose,
  summary,
  url,
  updated,
  size,
  state,
  type,
  contained,
  lat,
  lng,
}) => {
  const [weather, setWeather] = useState({});
  console.log(weather);
  useEffect(() => {
    fetch(
      `https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherToken}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [lat, lng]);

  return (
    <Drawer open={id} onClose={onClose} anchor="bottom">
      <Content>
        <Typography variant="h2">{name}</Typography>
        <Typography>{updated}</Typography>
        <Typography>{size}</Typography>
        <Typography>{contained}% contained</Typography>
        <div styled={{ display: "flex", gap: "1em" }}>
          <Typography>{summary}</Typography>
          <a href={`https://inciweb.nwcg.gov/${url}`} target="_blank">
            read more
          </a>
        </div>
      </Content>
    </Drawer>
  );
};

export default DetailPanel;

const Content = styled.div`
  height: 30vh;
`;
