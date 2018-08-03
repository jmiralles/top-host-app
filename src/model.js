import Store from "./store.js";

export default class AppRankingModel {
  constructor(store, topAppsMax = 25) {
    this.store = store;
    this.apps = store.apps;
    this.topAppsMax = topAppsMax;
  }

  getAllApps() {
    return this.store.apps;
  }

  getTopAppsByHost(hostName) {
    return this.apps
      .filter(app => app.host.includes(hostName))
      .slice(0, this.topAppsMax);
  }

  addAppToHosts(app) {
    this.store.apps = app;
    this.apps = this.store.apps;
  }

  removeAppFromHosts(app) {
    this.store.removeApp(app);
    this.apps = this.store.apps;
  }
}
