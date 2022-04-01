import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  ErrorBoundaryComponent,
  LinksFunction,
} from "remix";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function Document({
  children,
  title = `curbs:-)`,
}: {
  children: React.ReactNode;
  title?: string;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <script src="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"></script>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Links />
      </head>
      <body>
        <div className="error">
          <h1>
            {" "}
            Woopsie!!!! apparently, whatever you just tried to do, is not okay
            ;-( Please go back or refresh the page{" "}
          </h1>
          <h2>For developers sake: {error.message} </h2>
        </div>
        <Scripts />
      </body>
    </html>
  );
};
