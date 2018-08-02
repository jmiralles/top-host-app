const {a} = {a: 23}

import SortObjectsInArray from './helpers.js';

function init() {
  return fetch("../data/host-app-data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => onData(data))
  .catch(error => {
    console.log("error retrieving data");
    console.log(error);
})};

function onData(data) {
  const sortedData = SortObjectsInArray(data);
  console.log(sortedData)
}

init();


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
