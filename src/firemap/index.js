import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DetailPanel from "./detail.panel";
import Map from "./map";
import TextField from "@material-ui/core/TextField";

const Firemap = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [last, setLast] = useState(null);
  const [location, setLocation] = useState("OREGON");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=e914a8247dfc186d1a77f0ddd06e827e");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
    myHeaders.append("mode", "no-cors");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://inciweb.nwcg.gov/feeds/json/esri/";

    fetch(proxyurl + url, requestOptions)
      .then((response) => response.json())
      .then((result) => setMarkers(result.markers))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Map
        onClickMarker={(marker) => setSelected(marker)}
        markers={markers.filter((itm) => itm.state === location)}
        selected={selected}
        last={last}
      />
      <DetailPanel
        {...selected}
        onClose={() => {
          setLast(selected);
          setSelected(null);
        }}
      />
    </div>
  );
};

export default Firemap;
