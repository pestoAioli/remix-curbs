var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/Components/MyMap.client
var require_MyMap = __commonJS({
  "empty-module:~/Components/MyMap.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();
var import_remix2 = __toESM(require_remix());
function Document({
  children,
  title = `curbs:-)`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement("script", {
    src: "https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"
  }), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React.createElement("h1", null, " Woopsie!!!! apparently, whatever you just tried to do, is not okay ;-( Please go back or refresh the page "), /* @__PURE__ */ React.createElement("h2", null, "For developers sake: ", error.message, " ")), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
};

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute
});
init_react();
var import_remix3 = __toESM(require_remix());
function AboutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, dicta atque cupiditate asperiores mollitia doloribus vel recusandae laborum error eum rem veritatis, excepturi harum, ullam molestiae velit. Odit, facilis dolores! Accusamus dicta placeat natus animi assumenda, cum quis at vero saepe, delectus possimus praesentium exercitationem deserunt ab vel perspiciatis quo minus facere. Officia impedit sunt excepturi nihil explicabo quis consequatur? Provident magnam blanditiis possimus odio cupiditate deserunt vitae, eligendi aut eveniet enim et pariatur voluptates consequuntur, qui nisi libero? Nemo deleniti necessitatibus quod voluptate deserunt tempore dolore expedita architecto cumque. Ad molestias neque dolore laboriosam, recusandae illum consequuntur dolorum laborum voluptates exercitationem natus et odio quo est omnis beatae temporibus deserunt possimus! Earum reiciendis voluptate, harum doloribus voluptates libero. Aliquam! Itaque a provident, eligendi nihil est, dolore, eius blanditiis labore amet dolorem ea quo odit enim quas ratione saepe exercitationem numquam officia accusantium! Quo facilis molestiae architecto nesciunt eos esse! Quasi quam perspiciatis distinctio incidunt obcaecati? Maiores, ipsum dicta non minus quisquam velit, nemo obcaecati laboriosam quam ea iusto eaque. Dolore quaerat soluta totam ea voluptatem. Perferendis earum provident nobis. Corrupti, expedita. Sunt, non praesentium eaque obcaecati officia ipsa, veniam esse asperiores quaerat possimus velit? Fugit alias aspernatur quia enim, eius similique ullam quibusdam inventore consectetur fuga laudantium, molestias quis. Reiciendis illum perferendis maxime, ipsam distinctio itaque officiis totam culpa cupiditate ipsum! Quos obcaecati maiores nostrum quo deleniti vel adipisci velit tempora veritatis ex mollitia, corporis aliquid perferendis fugit accusantium! Quisquam, praesentium ullam sit ea tempora eos necessitatibus accusantium est aliquam! Dolores, odio voluptatum. Atque omnis voluptatibus commodi natus in ad quidem esse porro sint, exercitationem optio eaque, tempore sunt? Error accusamus praesentium tempore perferendis libero soluta, nemo iure non quis a cumque neque numquam? Consequuntur dolorum magni architecto itaque aliquid excepturi error perferendis minus officiis, suscipit incidunt voluptatum praesentium."), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Back"))));
}

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/styles/index.css
var styles_default = "/build/_assets/index-IF3OVWRP.css";

// app/PastedGraphic.png
var PastedGraphic_default = "/build/_assets/PastedGraphic-BWBGQHAW.png";

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/index.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "about"
  }, /* @__PURE__ */ React.createElement("img", {
    src: PastedGraphic_default,
    alt: "",
    className: "logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "enter"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "map"
  }, "Enter"))), /* @__PURE__ */ React.createElement("div", {
    className: "how-to"
  }))));
}

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/map.tsx
var map_exports = {};
__export(map_exports, {
  default: () => Map,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_remix_utils = require("remix-utils");
var import_MyMap = __toESM(require_MyMap());

// app/Components/NavBar.tsx
init_react();
var import_remix5 = __toESM(require_remix());
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "nav-bar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "curbs"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: PastedGraphic_default,
    alt: "",
    className: "logo-two"
  }))));
}

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/map.tsx
var import_remix7 = __toESM(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/styles/nav-bar.css
var nav_bar_default = "/build/_assets/nav-bar-LK7BMHOE.css";

// app/styles/map.css
var map_default = "/build/_assets/map-CKO5AXHB.css";

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/map.tsx
var import_react = require("react");
var loader = async () => {
  const kurbs = await db.curbs.findMany();
  return kurbs;
};
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    },
    {
      rel: "stylesheet",
      href: map_default
    },
    {
      rel: "stylesheet",
      href: nav_bar_default
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function Map() {
  let data = (0, import_remix7.useLoaderData)();
  const [coords, setCoords] = (0, import_react.useState)([]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix6.Links, null), /* @__PURE__ */ React.createElement(import_remix6.Outlet, {
    context: coords
  }), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_remix_utils.ClientOnly, {
    fallback: /* @__PURE__ */ React.createElement("p", null, "Loading...")
  }, /* @__PURE__ */ React.createElement(import_MyMap.default, {
    data,
    setCoords
  }))));
}

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/map/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewSpotRoute,
  links: () => links3
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_dialog = require("@reach/dialog");

// node_modules/@reach/dialog/styles.css
var styles_default2 = "/build/_assets/styles-2JGN57QB.css";

// app/styles/modal.css
var modal_default = "/build/_assets/modal-QWX4DH3Q.css";

// route:/Users/rickyriveraissoniceandfunnyomg/bootcamp/remix-curbs/app/routes/map/new.tsx
var import_react_hook_form = require("react-hook-form");
var links3 = () => {
  return [
    { rel: "stylesheet", href: styles_default2 },
    {
      rel: "stylesheet",
      href: modal_default
    }
  ];
};
var action = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  const lat = form.get("lat").toString();
  const lon = form.get("lng").toString();
  if (typeof name !== "string" || typeof description !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  const fields = { name, description, lat, lon };
  const spot = await db.curbs.create({ data: fields });
  return (0, import_remix8.redirect)("/map");
};
function NewSpotRoute({ request }) {
  const coords = (0, import_remix8.useOutletContext)();
  const { register } = (0, import_react_hook_form.useForm)({
    defaultValues: {
      lat: coords.lat,
      lng: coords.lng
    }
  });
  return /* @__PURE__ */ React.createElement(import_dialog.DialogOverlay, {
    className: "modal",
    isOpen: true,
    dangerouslyBypassFocusLock: true
  }, /* @__PURE__ */ React.createElement(import_dialog.DialogContent, {
    className: "dialog-text",
    "aria-label": "Submit Form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-box"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "input"
  }, /* @__PURE__ */ React.createElement("label", null, "Description: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "description"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "input"
  }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "hidden",
    step: "any",
    name: "lat"
  }, register("lat"))))), /* @__PURE__ */ React.createElement("div", {
    className: "input"
  }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "hidden",
    step: "any",
    name: "lng"
  }, register("lng"))))), /* @__PURE__ */ React.createElement("div", {
    className: "buttinz"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"), /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/map"
  }, "Go back ")))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "aec99b90", "entry": { "module": "/build/entry.client-YIJ7SRRM.js", "imports": ["/build/_shared/chunk-4PLA7QIQ.js", "/build/_shared/chunk-SJXSBARX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-P2IHOKHW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-TADOBKNK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Z6KZMKIB.js", "imports": ["/build/_shared/chunk-W3QPL7FW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/map": { "id": "routes/map", "parentId": "root", "path": "map", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/map-W3W5EWFM.js", "imports": ["/build/_shared/chunk-W3QPL7FW.js", "/build/_shared/chunk-Z4IECOTE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/map/new": { "id": "routes/map/new", "parentId": "routes/map", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/map/new-Z36CY3HI.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AEC99B90.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/map": {
    id: "routes/map",
    parentId: "root",
    path: "map",
    index: void 0,
    caseSensitive: void 0,
    module: map_exports
  },
  "routes/map/new": {
    id: "routes/map/new",
    parentId: "routes/map",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9Db21wb25lbnRzL015TWFwLmNsaWVudCIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNreXJpdmVyYWlzc29uaWNlYW5kZnVubnlvbWcvYm9vdGNhbXAvcmVtaXgtY3VyYnMvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNreXJpdmVyYWlzc29uaWNlYW5kZnVubnlvbWcvYm9vdGNhbXAvcmVtaXgtY3VyYnMvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGU6L1VzZXJzL3JpY2t5cml2ZXJhaXNzb25pY2VhbmRmdW5ueW9tZy9ib290Y2FtcC9yZW1peC1jdXJicy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvcmlja3lyaXZlcmFpc3NvbmljZWFuZGZ1bm55b21nL2Jvb3RjYW1wL3JlbWl4LWN1cmJzL2FwcC9yb3V0ZXMvbWFwLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9OYXZCYXIudHN4IiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JpY2t5cml2ZXJhaXNzb25pY2VhbmRmdW5ueW9tZy9ib290Y2FtcC9yZW1peC1jdXJicy9hcHAvcm91dGVzL21hcC9uZXcudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0ge307IiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JpY2t5cml2ZXJhaXNzb25pY2VhbmRmdW5ueW9tZy9ib290Y2FtcC9yZW1peC1jdXJicy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmlja3lyaXZlcmFpc3NvbmljZWFuZGZ1bm55b21nL2Jvb3RjYW1wL3JlbWl4LWN1cmJzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmlja3lyaXZlcmFpc3NvbmljZWFuZGZ1bm55b21nL2Jvb3RjYW1wL3JlbWl4LWN1cmJzL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yaWNreXJpdmVyYWlzc29uaWNlYW5kZnVubnlvbWcvYm9vdGNhbXAvcmVtaXgtY3VyYnMvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JpY2t5cml2ZXJhaXNzb25pY2VhbmRmdW5ueW9tZy9ib290Y2FtcC9yZW1peC1jdXJicy9hcHAvcm91dGVzL21hcC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JpY2t5cml2ZXJhaXNzb25pY2VhbmRmdW5ueW9tZy9ib290Y2FtcC9yZW1peC1jdXJicy9hcHAvcm91dGVzL21hcC9uZXcudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21hcFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFwXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1hcFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFwL25ld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFwL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21hcFwiLFxuICAgICAgcGF0aDogXCJuZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IE15TWFwIGZyb20gXCIuL0NvbXBvbmVudHMvTXlNYXAuY2xpZW50XCI7XG5cbmZ1bmN0aW9uIERvY3VtZW50KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gYGN1cmJzOi0pYCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQtZ2Vvc2VhcmNoQDMuMC4wL2Rpc3QvZ2Vvc2VhcmNoLnVtZC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IDxMaXZlUmVsb2FkIC8+IDogbnVsbH1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSAoeyBlcnJvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPk9oIG5vITwvdGl0bGU+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cbiAgICAgIDxoMT4gV29vcHNpZSEhISEgYXBwYXJlbnRseSwgd2hhdGV2ZXIgeW91IGp1c3QgdHJpZWQgdG8gZG8sIGlzIG5vdCBva2F5IDstKCBQbGVhc2UgZ28gYmFjayBvciByZWZyZXNoIHRoZSBwYWdlIDwvaDE+XG4gICAgICAgPGgyPkZvciBkZXZlbG9wZXJzIHNha2U6IHtlcnJvci5tZXNzYWdlfSA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG4gIFxuICBcbn07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dFJvdXRlKCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2PlxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b3MsIGRpY3RhIGF0cXVlIGN1cGlkaXRhdGUgYXNwZXJpb3JlcyBtb2xsaXRpYSBkb2xvcmlidXMgdmVsIHJlY3VzYW5kYWUgbGFib3J1bSBlcnJvciBldW0gcmVtIHZlcml0YXRpcywgZXhjZXB0dXJpIGhhcnVtLCB1bGxhbSBtb2xlc3RpYWUgdmVsaXQuIE9kaXQsIGZhY2lsaXMgZG9sb3JlcyFcbiAgICAgIEFjY3VzYW11cyBkaWN0YSBwbGFjZWF0IG5hdHVzIGFuaW1pIGFzc3VtZW5kYSwgY3VtIHF1aXMgYXQgdmVybyBzYWVwZSwgZGVsZWN0dXMgcG9zc2ltdXMgcHJhZXNlbnRpdW0gZXhlcmNpdGF0aW9uZW0gZGVzZXJ1bnQgYWIgdmVsIHBlcnNwaWNpYXRpcyBxdW8gbWludXMgZmFjZXJlLiBPZmZpY2lhIGltcGVkaXQgc3VudCBleGNlcHR1cmkgbmloaWwgZXhwbGljYWJvIHF1aXMgY29uc2VxdWF0dXI/XG4gICAgICBQcm92aWRlbnQgbWFnbmFtIGJsYW5kaXRpaXMgcG9zc2ltdXMgb2RpbyBjdXBpZGl0YXRlIGRlc2VydW50IHZpdGFlLCBlbGlnZW5kaSBhdXQgZXZlbmlldCBlbmltIGV0IHBhcmlhdHVyIHZvbHVwdGF0ZXMgY29uc2VxdXVudHVyLCBxdWkgbmlzaSBsaWJlcm8/IE5lbW8gZGVsZW5pdGkgbmVjZXNzaXRhdGlidXMgcXVvZCB2b2x1cHRhdGUgZGVzZXJ1bnQgdGVtcG9yZSBkb2xvcmUgZXhwZWRpdGEgYXJjaGl0ZWN0byBjdW1xdWUuXG4gICAgICBBZCBtb2xlc3RpYXMgbmVxdWUgZG9sb3JlIGxhYm9yaW9zYW0sIHJlY3VzYW5kYWUgaWxsdW0gY29uc2VxdXVudHVyIGRvbG9ydW0gbGFib3J1bSB2b2x1cHRhdGVzIGV4ZXJjaXRhdGlvbmVtIG5hdHVzIGV0IG9kaW8gcXVvIGVzdCBvbW5pcyBiZWF0YWUgdGVtcG9yaWJ1cyBkZXNlcnVudCBwb3NzaW11cyEgRWFydW0gcmVpY2llbmRpcyB2b2x1cHRhdGUsIGhhcnVtIGRvbG9yaWJ1cyB2b2x1cHRhdGVzIGxpYmVyby4gQWxpcXVhbSFcbiAgICAgIEl0YXF1ZSBhIHByb3ZpZGVudCwgZWxpZ2VuZGkgbmloaWwgZXN0LCBkb2xvcmUsIGVpdXMgYmxhbmRpdGlpcyBsYWJvcmUgYW1ldCBkb2xvcmVtIGVhIHF1byBvZGl0IGVuaW0gcXVhcyByYXRpb25lIHNhZXBlIGV4ZXJjaXRhdGlvbmVtIG51bXF1YW0gb2ZmaWNpYSBhY2N1c2FudGl1bSEgUXVvIGZhY2lsaXMgbW9sZXN0aWFlIGFyY2hpdGVjdG8gbmVzY2l1bnQgZW9zIGVzc2UhXG4gICAgICBRdWFzaSBxdWFtIHBlcnNwaWNpYXRpcyBkaXN0aW5jdGlvIGluY2lkdW50IG9iY2FlY2F0aT8gTWFpb3JlcywgaXBzdW0gZGljdGEgbm9uIG1pbnVzIHF1aXNxdWFtIHZlbGl0LCBuZW1vIG9iY2FlY2F0aSBsYWJvcmlvc2FtIHF1YW0gZWEgaXVzdG8gZWFxdWUuIERvbG9yZSBxdWFlcmF0IHNvbHV0YSB0b3RhbSBlYSB2b2x1cHRhdGVtLiBQZXJmZXJlbmRpcyBlYXJ1bSBwcm92aWRlbnQgbm9iaXMuXG4gICAgICBDb3JydXB0aSwgZXhwZWRpdGEuIFN1bnQsIG5vbiBwcmFlc2VudGl1bSBlYXF1ZSBvYmNhZWNhdGkgb2ZmaWNpYSBpcHNhLCB2ZW5pYW0gZXNzZSBhc3BlcmlvcmVzIHF1YWVyYXQgcG9zc2ltdXMgdmVsaXQ/IEZ1Z2l0IGFsaWFzIGFzcGVybmF0dXIgcXVpYSBlbmltLCBlaXVzIHNpbWlsaXF1ZSB1bGxhbSBxdWlidXNkYW0gaW52ZW50b3JlIGNvbnNlY3RldHVyIGZ1Z2EgbGF1ZGFudGl1bSwgbW9sZXN0aWFzIHF1aXMuXG4gICAgICBSZWljaWVuZGlzIGlsbHVtIHBlcmZlcmVuZGlzIG1heGltZSwgaXBzYW0gZGlzdGluY3RpbyBpdGFxdWUgb2ZmaWNpaXMgdG90YW0gY3VscGEgY3VwaWRpdGF0ZSBpcHN1bSEgUXVvcyBvYmNhZWNhdGkgbWFpb3JlcyBub3N0cnVtIHF1byBkZWxlbml0aSB2ZWwgYWRpcGlzY2kgdmVsaXQgdGVtcG9yYSB2ZXJpdGF0aXMgZXggbW9sbGl0aWEsIGNvcnBvcmlzIGFsaXF1aWQgcGVyZmVyZW5kaXMgZnVnaXQgYWNjdXNhbnRpdW0hXG4gICAgICBRdWlzcXVhbSwgcHJhZXNlbnRpdW0gdWxsYW0gc2l0IGVhIHRlbXBvcmEgZW9zIG5lY2Vzc2l0YXRpYnVzIGFjY3VzYW50aXVtIGVzdCBhbGlxdWFtISBEb2xvcmVzLCBvZGlvIHZvbHVwdGF0dW0uIEF0cXVlIG9tbmlzIHZvbHVwdGF0aWJ1cyBjb21tb2RpIG5hdHVzIGluIGFkIHF1aWRlbSBlc3NlIHBvcnJvIHNpbnQsIGV4ZXJjaXRhdGlvbmVtIG9wdGlvIGVhcXVlLCB0ZW1wb3JlIHN1bnQ/XG4gICAgICBFcnJvciBhY2N1c2FtdXMgcHJhZXNlbnRpdW0gdGVtcG9yZSBwZXJmZXJlbmRpcyBsaWJlcm8gc29sdXRhLCBuZW1vIGl1cmUgbm9uIHF1aXMgYSBjdW1xdWUgbmVxdWUgbnVtcXVhbT8gQ29uc2VxdXVudHVyIGRvbG9ydW0gbWFnbmkgYXJjaGl0ZWN0byBpdGFxdWUgYWxpcXVpZCBleGNlcHR1cmkgZXJyb3IgcGVyZmVyZW5kaXMgbWludXMgb2ZmaWNpaXMsIHN1c2NpcGl0IGluY2lkdW50IHZvbHVwdGF0dW0gcHJhZXNlbnRpdW0uXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbjxidXR0b24+XG4gIDxMaW5rIHRvPVwiL1wiPlxuICAgIEJhY2tcbiAgPC9MaW5rPlxuPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59IiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vUGFzdGVkR3JhcGhpYy5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBzdHlsZXNVcmwsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4Um91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayB0bz17XCJhYm91dFwifT5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibG9nb1wiLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVudGVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwibWFwXCI+RW50ZXI8L0xpbms+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy10b1wiID5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmtzLCBPdXRsZXQsIEVycm9yQm91bmRhcnlDb21wb25lbnQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IENsaWVudE9ubHkgfSBmcm9tIFwicmVtaXgtdXRpbHNcIjtcbmltcG9ydCBNeU1hcCBmcm9tIFwifi9Db21wb25lbnRzL015TWFwLmNsaWVudFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwifi9Db21wb25lbnRzL05hdkJhclwiO1xuXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGt1cmJzID0gYXdhaXQgZGIuY3VyYnMuZmluZE1hbnkoKTtcbiAgcmV0dXJuIGt1cmJzO1xufTtcblxuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IG5hdmJhclN0eWxlc1VybCBmcm9tIFwiYXBwL3N0eWxlcy9uYXYtYmFyLmNzc1wiO1xuaW1wb3J0IG1hcFN0eWxlc1VybCBmcm9tIFwiYXBwL3N0eWxlcy9tYXAuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjcuMS9kaXN0L2xlYWZsZXQuY3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogbWFwU3R5bGVzVXJsLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IG5hdmJhclN0eWxlc1VybCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBzdHlsZXNVcmwsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDxPdXRsZXQgY29udGV4dD17Y29vcmRzfSAvPlxuICAgICAgICA8TmF2YmFyPjwvTmF2YmFyPlxuICAgICAgICA8Q2xpZW50T25seSBmYWxsYmFjaz17PHA+TG9hZGluZy4uLjwvcD59PlxuICAgICAgICAgIDxNeU1hcCBkYXRhPXtkYXRhfSBzZXRDb29yZHM9e3NldENvb3Jkc30gLz5cbiAgICAgICAgPC9DbGllbnRPbmx5PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL1Bhc3RlZEdyYXBoaWMucG5nXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VyYnNcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJsb2dvLXR3b1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07IiwgImltcG9ydCB7XG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMaW5rLFxuICBMaW5rcyxcbiAgU2NyaXB0cyxcbiAgcmVkaXJlY3QsXG4gIHVzZU91dGxldENvbnRleHQsXG4gIE91dGxldCxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5LCBEaWFsb2dDb250ZW50IH0gZnJvbSBcIkByZWFjaC9kaWFsb2dcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XG5pbXBvcnQgZGlhbG9nU3R5bGVzVXJsIGZyb20gXCJAcmVhY2gvZGlhbG9nL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBtb2RhbFN0eWxlc1VybCBmcm9tIFwiYXBwL3N0eWxlcy9tb2RhbC5jc3NcIjtcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXNcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBkaWFsb2dTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogbW9kYWxTdHlsZXNVcmwsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IG5hbWUgPSBmb3JtLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgbGF0ID0gZm9ybS5nZXQoXCJsYXRcIikudG9TdHJpbmcoKTtcbiAgY29uc3QgbG9uID0gZm9ybS5nZXQoXCJsbmdcIikudG9TdHJpbmcoKTtcbiAgaWYgKFxuICAgIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIGRlc2NyaXB0aW9uICE9PSBcInN0cmluZ1wiXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gKTtcbiAgfVxuICBjb25zdCBmaWVsZHMgPSB7IG5hbWUsIGRlc2NyaXB0aW9uLCBsYXQsIGxvbiB9O1xuXG4gIGNvbnN0IHNwb3QgPSBhd2FpdCBkYi5jdXJicy5jcmVhdGUoeyBkYXRhOiBmaWVsZHMgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL21hcFwiKTtcbn07XG5cbmludGVyZmFjZSBjb29yZHMge1xuICBsYXQ6IHN0cmluZztcbiAgbG5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Nwb3RSb3V0ZSh7IHJlcXVlc3QgfSkge1xuICBjb25zdCBjb29yZHM6IGNvb3JkcyA9IHVzZU91dGxldENvbnRleHQoKTtcbiAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybSh7XG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgbGF0OiBjb29yZHMubGF0LFxuICAgICAgbG5nOiBjb29yZHMubG5nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxEaWFsb2dPdmVybGF5IGNsYXNzTmFtZT1cIm1vZGFsXCIgaXNPcGVuPXt0cnVlfSBkYW5nZXJvdXNseUJ5cGFzc0ZvY3VzTG9jaz5cbiAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cImRpYWxvZy10ZXh0XCIgYXJpYS1sYWJlbD1cIlN1Ym1pdCBGb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cbiAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxhdFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJsYXRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxuZ1wiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJsbmdcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0aW56XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9tYXBcIj5HbyBiYWNrIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nT3ZlcmxheT5cbiAgKTtcbn1cblxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2FlYzk5YjkwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1ZSUo3U1JSTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFBMQTdRSVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSlhTQkFSWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUDJJSE9LSFcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Fib3V0Jzp7J2lkJzoncm91dGVzL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0LVRBRE9CS05LLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtWjZLWk1LSUIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVczUVBMN0ZXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tYXAnOnsnaWQnOidyb3V0ZXMvbWFwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21hcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tYXAtVzNXNUVXRk0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVczUVBMN0ZXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjRJRUNPVEUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFwL25ldyc6eydpZCc6J3JvdXRlcy9tYXAvbmV3JywncGFyZW50SWQnOidyb3V0ZXMvbWFwJywncGF0aCc6J25ldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tYXAvbmV3LVozNkNZM0hJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQUVDOTlCOTAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxN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
