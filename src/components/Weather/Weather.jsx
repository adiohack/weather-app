import React, { useState, useEffect } from "react";

export function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1830547449e6cf56a84edf5ddf35bd84"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log("Error fetch", err);
      });
  }, []);

  return (
    <>
      <h1>Weather</h1>
      {JSON.stringify(data)}
    </>
  );
}
