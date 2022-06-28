import React, { useState, useEffect, useMemo, useCallback } from "react";
import debounce from "../../lib/debounce";

export function Weather(props) {
  const { coords } = props;
  const { lat, lng } = coords;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log("weather", lat, lng);

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
      {loading && <h2>Loading location weather info !</h2>}
      {!loading && data && JSON.stringify(data)}
    </>
  );
}