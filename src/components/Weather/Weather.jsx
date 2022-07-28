import React, { useState, useEffect, useMemo, useCallback } from "react";
import debounce from "../../lib/debounce";
import "./weather.css";

export function Weather(props) {
  const { coords } = props;
  const { lat, lng } = coords;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const call = useCallback(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1830547449e6cf56a84edf5ddf35bd84&units=metric`;

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
        <div className="weather-up">
          <div>
            <p className="weather-city">City: {data.name}</p>
            <p className="weather-desc">
              {data.weather && data.weather[0].description}
            </p>
          </div>
          <img
            src={data.weather && `icons/${data.weather[0].icon}.png`}
            alt="icon"
            className="weather-icon"
          />
          <div className="weather-down">
            <p className="weather-temp">
              {data.main && Math.round(data.main.temp)}°C
            </p>
            <div className="details">
              <div className="p-row">
                <p className="p-label top">Details</p>
              </div>
              <div className="p-row">
                <p className="p-label">Feels like</p>
                <p className="p-value">
                  {data.main && Math.round(data.main.feels_like)}°C
                </p>
              </div>
              <div className="p-row">
                <p className="p-label">Humidity</p>
                <p className="p-value">{data.main && data.main.humidity}%</p>
              </div>
              <div className="p-row">
                <p className="p-label">Wind</p>
                <p className="p-value">{data.wind && data.wind.speed} m/s</p>
              </div>
              <div className="p-row">
                <p className="p-label">Pressure</p>
                <p className="p-value">{data.main && data.main.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
