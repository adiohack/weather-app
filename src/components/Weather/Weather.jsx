import React, { useState, useEffect, useMemo, useCallback } from "react";
import debounce from "../../lib/debounce";
import "./weather.css";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";

export function Weather(props) {
  const { coords } = props;
  const { lat, lng } = coords;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const call = useCallback(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1830547449e6cf56a84edf5ddf35bd84`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log("Error fetch", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [lat, lng]);

  // eslint-disable-next-line
  const debouncedCall = useMemo(() => debounce(call, 1000), []);

  useEffect(() => {
    setLoading(true);
    debouncedCall();
  }, [lat, lng, debouncedCall]);

  return (
    <>
      <h1>Weather</h1>
      {loading && <span>Loading location weather info !</span>}
      <div className="weather-info">
        <div className="weather-box">
          <LocationCityIcon fontSize="large" />
          <p>City: {data.name}</p>
        </div>
        <div className="weather-box">
          <PublicIcon fontSize="large" />
          <p>Country: {data.sys && data.sys.country}</p>
        </div>
        <div className="weather-box">
          <AirIcon fontSize="large" />
          <p>Weather: {data.weather && data.weather[0].description}</p>
        </div>
        <div className="weather-box">
          <ThermostatIcon fontSize="large" />
          <p>Temp: {data.main && data.main.temp}</p>
        </div>
      </div>
    </>
  );
}
