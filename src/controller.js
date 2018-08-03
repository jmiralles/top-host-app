import RankingsModel from "./model";

export default class Controller {
  constructor(store, view) {
    this.store = store;
    this.view = view;
    this.rankingsModel = {};
    this.settings = {
      topMaxApps: 5,
      hostToShow: [
        "7e6272f7-098e.dakota.biz",
        "9a450527-cdd9.kareem.info",
        "e7bf58af-f0be.dallas.biz",
        "95b346a0-17f4.abbigail.name"
      ]
    };
  }

  setView() {
    // this could be the place for a routing logic
    this.loadData();
  }

  loadData() {
    this.store.fetch().then(() => {
      this.rankingsModel = new RankingsModel(
        this.store,
        this.settings.topMaxApps
      );
      this.renderView();
    });
  }

  renderView() {
    const list = this.settings.hostToShow.reduce((hostList, host) => {
      hostList[host] = this.rankingsModel.getTopAppsByHost(host);
      return hostList;
    }, {});

    this.view.showRankings(list);
  }
}
