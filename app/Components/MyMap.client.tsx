import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MyMap({ data }) {
  return (
    <MapContainer center={[41.39553339782492, 2.197925161370089]} zoom={12}>
      <TileLayer url="https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=01aeaf06bca449cf9887843c3c62492e" />
      {data.map((coords: any) => (
        <Marker position={[coords.lat, coords.lon]} key={coords.id}>
          <Popup maxHeight={300}>
            <h1>{coords.name}</h1>
            <h3>{coords.description}</h3>
            <img src={`"${coords.image_path}"`} alt=""/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
