import React, { useEffect, useState } from "react";
import "./App.css";
import Firemap from "../firemap";

function App() {
  const [markers, setMarkers] = useState([]);
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
    <div className="App">
      <header className="App-header">
        <Firemap
          markers={markers.filter((marker) => marker.state === "OREGON")}
        />
      </header>
    </div>
  );
}

export default App;
