import type { LinksFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>C</h1>
        <h1>U</h1>
        <h1>R</h1>
        <h1>B</h1>
        <h1>S</h1>
        <nav>
          <div>
            <button className="enter">
              <Link to="map">Enter</Link>
              </button>
           </div>
        </nav>
      </div>
    </div>
  );
}

