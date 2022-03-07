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
        <div>
          <Link to={"about"}>
          <img src={logo} alt="" className="logo"/>
          </Link>
        </div>
      <div className="content">
        <nav>
          <div >
            <button className="enter">
              <Link to="map">Enter</Link>
            </button>
          </div>
          <div className="how-to" >

          </div>
        </nav>
      </div>
    </div>
  );
}
