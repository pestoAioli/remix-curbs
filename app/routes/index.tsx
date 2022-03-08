import type { LinksFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "~/styles/index.css";
import logo from "../PastedGraphic.png";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="logo-box">
        <div>
          <Link to={"about"}>
            <div>
              <img src={logo} alt="" className="logo" />
            </div>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="how-to">
          <div>
            <h4>Pins represent skate spots:-)</h4>
          </div>
          <div>
            <h4>Click on a pin to find information on that spot</h4>
          </div>
          <div>
            <h4>Double-click on the map to add a spot</h4>
          </div>
        </div>
        <div>
          <button className="enter">
            <Link to="map">
              Find skate spots near me</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
