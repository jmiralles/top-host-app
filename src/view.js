import { qs, $on } from "./helpers";
import Template from "./template";

export default class View {
  constructor(template) {
    this.template = template;
    this.$rankingList = qs(".ranking-list");
    this.$toggleView = qs(".toggle-view");
    this.$listDisplay = qs(".list-display");

    $on(this.$toggleView, "change", ({ target }) => {
      console.log("change view");
      this.changeView(target);
    });
  }

  showRankings(list) {
    console.log(list);
    this.$rankingList.innerHTML = this.template.rankingCardList(list);
  }

  changeView(target) {
    this.$rankingList.classList.toggle("grid-view");
    let text = "Show as list";

    if (target.checked) {
      text = "Show as an awesome grid";
    }

    this.$listDisplay.innerHTML = text;
  }
}
