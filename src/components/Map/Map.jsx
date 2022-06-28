import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_TOKEN;

export function Map(props) {
  const { coords, onNewCoords } = props;
  const { lat, lng, zoom } = coords;
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    if (!lat || !lng) return;

    const mapOptions = {
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom || 6,
    };
    map.current = new mapboxgl.Map(mapOptions);
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      onNewCoords &&
        onNewCoords({
          lat: map.current.getCenter().lat.toFixed(4),
          lng: map.current.getCenter().lng.toFixed(4),
          zoome: map.current.getZoom().zoom.toFixed(2),
        });
    });
  });

  return (
    <>
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
}
