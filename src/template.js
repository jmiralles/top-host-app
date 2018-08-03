import { escapeForHTML } from "./helpers";

export default class Template {
  rankingCardList(list) {
    const listKeys = Object.keys(list);

    return listKeys.reduce((html, host) => {
      const appsList = this.appsInRankingCard(list[host]);
      return (
        html +
        `
        <div class="ranking_card">
                <span class="ranking_card__host">
                    ${escapeForHTML(host)}
                </span>
                <ul class="ranking_card__list">
                    ${appsList}
                </ul>
        </div>`
      );
    }, "");
  }
  appsInRankingCard(items) {
    return items.reduce(
      (html, item) =>
        html +
        `
        <li>
            <span class="ranking_card__apdex">
                ${item.apdex}
            </span> 
            <span class="ranking_card__appname">
                ${escapeForHTML(item.name)}
            </span> 
        
        </li>`,
      ""
    );
  }
}
