import { LinksFunction } from "remix";
import { MapConsumer } from "react-leaflet";
import L from "leaflet";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css" }
  ];
};

function onclick() {
  return
}


export default function LocationButton() {
  return (
    <div>
      <button className="leaflet-marker-icon" onClick={onclick}>
        Go to <br/> current location
      </button>
    </div>
  );
}