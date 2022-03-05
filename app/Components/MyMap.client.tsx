import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  MapConsumer,
} from "react-leaflet";
import type { LinksFunction } from "@remix-run/react/routeModules";
import mapStylesUrl from "app/styles/map.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "remix";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: mapStylesUrl },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css",
    },
  ];
};
function LocationMarkers() {
  const [markers, setMarkers] = useState([]);

  const map = useMapEvents({
    click(e) {
      markers.push(e.latlng);
      setMarkers((prevValue) => [...prevValue, e.latlng]);
      console.log(e.latlng);
    },
  });
  return (
    <React.Fragment>
      {markers.map((marker, i) => (
        <Marker key={i} position={marker}>
          <Popup className="new-popup">
            <Link to="/map/new">
              <h2>Add this spot to the map</h2>
            </Link>
            <div>
              With these coordinates: <span />{" "}
              {`lat: ${marker.lat} lng: ${marker.lng}`}
            </div>
          </Popup>
        </Marker>
      ))}
    </React.Fragment>
  );
}
export default function MyMap({ data }) {
  return (
    <MapContainer center={[41.395396239486615, 2.1976269809442392]} zoom={12}>
      <MapConsumer>
        {(map) => {
          map.locate({setView: true, maxZoom: 20, watch: true, enableHighAccuracy: true})
          return null
        }}
      </MapConsumer>
      <TileLayer url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=01aeaf06bca449cf9887843c3c62492e" />
      <LocationMarkers></LocationMarkers>
      {data.map((coords) => (
        <Marker position={[coords.lat, coords.lon]} key={coords.id}>
          <Popup maxHeight={300}>
            <h1>{coords.name}</h1>
            <h3>{coords.description}</h3>
            <img
              src={
                "https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg"
              }
              alt=""
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
