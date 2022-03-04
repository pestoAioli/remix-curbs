import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import type { LinksFunction } from "@remix-run/react/routeModules";
import mapStylesUrl from "app/styles/map.css";
import React from "react";
import { useState,} from "react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: mapStylesUrl }
  ];
};

function LocationMarkers(){
const [markers, setMarkers] = useState([]);

const map = useMapEvents({
  click(e) {
    markers.push(e.latlng);
    setMarkers((prevValue) => [...prevValue, e.latlng]);
  }
});

return (
  <React.Fragment>
    {markers.map(marker => <Marker position={marker} ></Marker>)}
  </React.Fragment>
);
}

export default function MyMap({ data }) {




  return (
    <MapContainer center={[41.39553339782492, 2.197925161370089]} zoom={12}>
      <TileLayer url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=01aeaf06bca449cf9887843c3c62492e" />
      LocationMarkers
      {data.map((coords: any) => (
        <Marker position={[coords.lat, coords.lon]} key={coords.id}>
          <Popup maxHeight={300}>
            <h1>{coords.name}</h1>
            <h3>{coords.description}</h3>
            <img src={"https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg"} alt=""/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
