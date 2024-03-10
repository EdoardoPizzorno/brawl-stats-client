import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() { }

  parseDate(battle: any) {
    let aux1 = battle["battleTime"].split("T")[0];
    let aux2 = battle["battleTime"].split("T")[1];

    delete battle["battleTime"];

    battle["battleTime"] = {};
    battle["battleTime"]["date"] = {};
    battle["battleTime"]["time"] = {};

    battle["battleTime"]["date"]["year"] = aux1.substring(0, 4);
    battle["battleTime"]["date"]["month"] = aux1.substring(4, 6);
    battle["battleTime"]["date"]["day"] = aux1.substring(6, 8);
    battle["battleTime"]["time"]["hour"] = aux2.substring(0, 2);
    battle["battleTime"]["time"]["minute"] = aux2.substring(2, 4);
  }

  parseHtml(battle: any) {
    let currentBattle = battle.battle;

    currentBattle.mode = currentBattle.mode == undefined ? battle.event.mode : currentBattle.mode;
    currentBattle.result = currentBattle.result == undefined ? 'not given' : currentBattle.result;
    currentBattle.duration = currentBattle.duration == undefined ? 'not given' : currentBattle.duration;
    currentBattle.map = battle.event.map; let html;
    currentBattle.rank = currentBattle.rank == undefined ? (battle.event.rank == undefined ? "not given" : currentBattle.rank) : currentBattle.rank;

    let playersHtml;

    if ("teams" in currentBattle)
      playersHtml = this.parseTeams(currentBattle);
    else if ("players" in currentBattle)
      playersHtml = this.parsePlayers(currentBattle);

    html = `
    <div class="row">
        <ul style="list-style: none">
          <li><strong>-Game Mode:</strong> <u> ${currentBattle.mode} </u></li>
          <li><strong>-Result: </strong> <p class=${currentBattle.result == 'defeat' ? 'red' : 'green'}><u> ${currentBattle.result} </u></p></li>
          <li><strong>-Duration:</strong> <u> ${currentBattle.duration} </u></li>
          <li><strong>-Map:</strong> <u> ${currentBattle.map} </u></li>
          <li><strong>-Time:</strong> <u> ${battle.battleTime.time.hour}:${battle.battleTime.time.minute} </u></li>
          <li><strong>-TrophyChange: </strong> <p class=${currentBattle.trophyChange < 0 ? 'red' : 'green'}><u>${currentBattle.trophyChange}</u></li>
          <li><strong>-Rank:</strong> <u> ${currentBattle.rank} </u></li><hr>

          <li><button class="btn btn-warning" onclick="document.getElementById('teams').style.display=document.getElementById('teams').style.display == 'block' ? 'none' : 'block';">▼</button></li>
        </ul>

        <div style="display: none" class="my-4" id="teams">
          ${playersHtml}
        </div>
    `;

    html += `</div>`
    return html;

  }

  private parseTeams(currentBattle: any) {
    let html = "<h1>Teams</h1>";

    let teamCount = 1;
    for (let team of currentBattle.teams) {
      html += `<h3>Team #${teamCount++}</h3>`;
      for (let player of team) {
        let tag = player["tag"].substring(1);
        html += `<button class="wrapper" style="margin: 10px" onclick="window.location.href='player/${tag}'">${player.name} - ${player.brawler.name}</button>`;
      }
    }

    return html;
  }

  private parsePlayers(currentBattle: any) {
    let html = "<h1>Players</h1>";

    let playerCount = 1;
    for (let player of currentBattle.players) {
      let tag = player["tag"].substring(1);
      html += `<button class="wrapper" style="margin: 10px" onclick="window.location.href='player/${tag}'"> #${playerCount++} | ${player.name} - ${player.brawler.name}</button>`;
    }

    return html;
  }

}
