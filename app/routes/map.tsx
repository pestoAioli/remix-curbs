import { Links, Outlet } from "remix";
import { ClientOnly } from "remix-utils";
import MyMap from "~/Components/MyMap.client";
import Navbar from "~/Components/NavBar";

import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export let loader: LoaderFunction = async () => {
  const kurbs = await db.curbs.findMany();
  return kurbs;
};

import type { LinksFunction } from "remix";

import stylesUrl from "~/styles/index.css";
import navbarStylesUrl from "app/styles/nav-bar.css";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
    },
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
    {
      rel: "stylesheet",
      href: navbarStylesUrl,
    },
  ];
};

export default function Map() {
  let data = useLoaderData();
  const [coords, setCoords] = useState([]);

  return (
    <>
      <div>
        <Links />
        <Outlet context={coords} />
        <Navbar></Navbar>
        <ClientOnly fallback={<p>Loading...</p>}>
          <MyMap data={data} setCoords={setCoords}/>
        </ClientOnly>
      </div>
    </>
  );
}
