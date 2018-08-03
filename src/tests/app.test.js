import RankingsModel from "../model";
import Store from "../store";

const sampleApps = [
  {
    name: "Small Fresh Pants - Kautzer - Boyer, and Sons",
    contributors: [
      "Edwin Reinger",
      "Ofelia Dickens",
      "Hilbert Cole",
      "Helen Kuphal",
      "Maurine McDermott Sr."
    ],
    version: 7,
    apdex: 68,
    host: [
      "7e6272f7-098e.dakota.biz",
      "9a450527-cdd9.kareem.info",
      "e7bf58af-f0be.dallas.biz"
    ]
  },
  {
    name: "Refined Concrete Shirt - Hudson - Sauer, Group",
    contributors: [
      "Ramon Harris DDS",
      "Summer Dicki",
      "Triston Sipes",
      "Fae Lind",
      "Carole Emard"
    ],
    version: 6,
    apdex: 90,
    host: ["e0419f48-6a5a.craig.info", "7e6272f7-098e.dakota.biz"]
  },
  {
    name: "Ergonomic Wooden Soap - Lemke and Sons, Inc",
    contributors: ["Miss Moises Walter", "Caroline Murazik"],
    version: 2,
    apdex: 61,
    host: [
      "e7bf58af-f0be.dallas.biz",
      "b0b655c5-928a.nadia.biz",
      "95b346a0-17f4.abbigail.name"
    ]
  }
];

let AppStore, topApps;
beforeEach(() => {
  AppStore = new Store();
  AppStore.apps = sampleApps;
  topApps = new RankingsModel(AppStore);
});

test("should filter by host", () => {
  const topHost = topApps.getTopAppsByHost("b0b655c5-928a.nadia.biz");
  expect(topHost.length).toBe(1);
  expect(topHost[0].name).toBe("Ergonomic Wooden Soap - Lemke and Sons, Inc");
});

test("should order by apdex", () => {
  const topHost = topApps.getTopAppsByHost("7e6272f7-098e.dakota.biz");
  expect(topHost.length).toBe(2);
  expect(topHost[0].name).toBe(
    "Refined Concrete Shirt - Hudson - Sauer, Group"
  );
});

test("should update list and keep the top order when an app is added ", () => {
  let newTopApp = [];
  topApps.addAppToHosts({
    name: "Top App test",
    apdex: 100,
    host: ["b0b655c5-928a.nadia.biz"]
  });
  newTopApp = topApps.getAllApps();
  expect(newTopApp[0].name).toBe("Top App test");
});

test("should update list and keep the top order when an app is removed ", () => {
  let newTopApps;
  topApps.removeAppFromHosts({
    name: "Small Fresh Pants - Kautzer - Boyer, and Sons",
    apdex: 100,
    host: ["b0b655c5-928a.nadia.biz"]
  });

  newTopApps = topApps.getAllApps();
  expect(newTopApps[0].name).toBe(
    "Refined Concrete Shirt - Hudson - Sauer, Group"
  );
});
