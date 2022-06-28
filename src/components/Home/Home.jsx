import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Map } from "../Map/Map";
import { Weather } from "../Weather/Weather";
import "../Home/style.css";

export function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome To Weather App</h1>
      <Map />
      <Weather />
    </>
  );
}
