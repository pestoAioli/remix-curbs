import { Link, LinksFunction } from "remix";
import stylesUrl from "app/styles/index.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};
export default function AboutRoute() {

  return (
    <div className="container">
    <div className="about">
    <div>
      <h2>
        Curbs is an app by Ricardo Rivera. 
      </h2>
      <h3>
        A skateboarder and programmer from The Bay Area :-)
      </h3>
    </div>
    <div>
<button className="enter">
  <Link to="/">
    Back
  </Link>
</button>
    </div>
    </div>
    </div>
  );
}