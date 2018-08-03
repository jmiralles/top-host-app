import SortObjectsInArray from "./helpers.js";

export default class Store {
  constructor() {
    this._apps = [];
  }
  fetch() {
    return new Promise((resolve, reject) => {
      fetch("../data/host-app-data.json")
        .then(response => response.json())
        .then(data => this.onData(data, resolve))
        .catch(error => {
          console.error("Error retrieving data:", error);
          reject();
        });
    });
  }

  onData(data = this.apps, resolve) {
    this.apps = data;
    resolve();
  }

  removeApp(appToRemove) {
    this.apps = this._apps.filter(app => app.name !== appToRemove.name);
  }

  get apps() {
    return this._apps;
  }

  set apps(value) {
    const boxedValue = Array.isArray(value) ? value : [...this._apps, value];
    this._apps = new SortObjectsInArray(boxedValue).sort().reverse();
  }
}
