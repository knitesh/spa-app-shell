import { registerApplication, start, pathToActiveWhen } from "single-spa";

registerApplication({
  name: "@nitex/app-nav-bar",
  app: () => System.import("@nitex/app-nav-bar"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("nav-container") },
});

let activeWhen = pathToActiveWhen("/", true);
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: activeWhen,
  customProps: { domElement: document.getElementById("main-container") },
});

activeWhen = pathToActiveWhen("/dashboard", true);

registerApplication({
  name: "@nitex/app-dashboard",
  app: () => System.import("@nitex/app-dashboard"),
  activeWhen: activeWhen,
  customProps: { domElement: document.getElementById("main-container") },
});

start({
  urlRerouteOnly: true,
});
