import Controller from "./controller";
import { $on } from "./helpers";
import Template from "./template";
import Store from "./store";
import View from "./view";

import "./styles/styles.scss";

const store = new Store();
const template = new Template();
const view = new View(template);

const controller = new Controller(store, view);

const setView = () => controller.setView(document.location.hash);
$on(window, "load", setView);
