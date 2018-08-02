import Store from './store.js'

class Apps { // convert to MODEL
  constructor(store, topAppsMax = 25) {
    this.store = store;
    this.apps = store.apps;
    this.topAppsMax = topAppsMax;
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

const AppStore = new Store();

AppStore.init()
  .then(initApp);

function initApp() {
  const topApps = new Apps(AppStore);
  const topHost = topApps.getTopAppsByHost('b0b655c5-928a.nadia.biz');
  const testApp = {
    name: 'Top App test',
    apdex: 100,
    host: ['b0b655c5-928a.nadia.biz']
  };

  topApps.addAppToHosts(testApp);

  console.log(topApps.getTopAppsByHost('b0b655c5-928a.nadia.biz'));

  topApps.removeAppFromHosts(testApp);

  console.log(topApps.getTopAppsByHost('b0b655c5-928a.nadia.biz'));

}