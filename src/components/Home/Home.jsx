import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Map } from "../Map/Map";
import { Weather } from "../Weather/Weather";
import "../Home/style.css";

const initLng = 26.916025;
const initLat = 46.568825;

export function Home() {
  const [coords, setCoords] = useState({
    lng: initLng,
    lat: initLat,
    zoom: 6,
  });

  return (
    <>
      <Navbar />
      <h1>Welcome To Weather App</h1>
      <Map coords={coords} onNewCoords={setCoords} />
      <Weather coords={coords} />
    </>
  );
}
