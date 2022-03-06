import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import type { LinksFunction } from "@remix-run/react/routeModules";
import mapStylesUrl from "app/styles/map.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "remix";
import L, { latLng } from "leaflet";
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
      map.setView(e.latlng)
    },
  });
  return (
    <>
      {markers.map((marker, i) => (
        <Marker key={i} position={marker} draggable={true}>
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
    </>
  );
}
function MyComponent() {
  const map = useMapEvents({
  
  })
}

export default function MyMap({ data }) {
  const [map, setMap] = useState(null);
const mapRef = useRef();
  //TODO:set center to be current location or newly added spot

  return (
    <MapContainer
      center={[41.395396239486615, 2.1976269809442392]}
      zoom={12}
      whenCreated={(map) => {
        setMap(map);
        map.locate({
          setView: true,
          maxZoom: 16,
        });
        map.on("locationfound", (e) =>
          L.circleMarker(e.latlng, {
            radius: 80,
            stroke: true,
            color: "#ADF7B6",
            fill: false,
          }).addTo(map)
        );
        return null;
      }}
    >
      <TileLayer url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=01aeaf06bca449cf9887843c3c62492e" />
      <LocationMarkers></LocationMarkers>
      {data.map((coords) => (
        <Marker position={[coords.lat, coords.lon]} key={coords.id}>
          <Popup maxHeight={300}>
            <h1>{coords.name}</h1>
            <h3>{coords.description}</h3>
            <h2>
              <a
                href={`https://maps.google.com/?q=${coords.lat},${coords.lon}`}
              >
                Get directions
              </a>
            </h2>
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
