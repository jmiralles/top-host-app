fetch("/data/host-app-data.json", {
  headers: {
    "content-type": "application/json"
  }
})
  .then(response => {
    parseJson(response.json());
  })
  .catch(error => {
    console.log("error");
    console.log(error);
  });

function parseJson(json) {
  console.log(JSON.stringify(json));
}
class AppsStore {
  constructor(apps) {
    this.apps = apps;
    this.topApps = 25;
  }

  getTopAppsByHost(hostName) {
    return this.apps
      .filter(app => app.host.includes(hostName))
      .sort((appA, appB) => appA.apdex > appB)
      .slice(this.topApp);
  }
  addAppToHosts() {}
  getTopAppsByHost() {}
}
