import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  brawlers: any[] = [];
  playerTag: string = '';
  playerName: string = '';
  cookiePlayerList: any;

  constructor(private dataStorage: DataStorageService, private router: Router, private cookieService: CookieService) { }

  getBrawlers() {
    this.dataStorage.sendRequest('GET', '/brawlers')
      .then((response: any) => {
        this.brawlers = response.data.items;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }


  onPlayerSearch(tag: string) {
    tag = (tag.split("#").join("")).toUpperCase();
    this.router.navigateByUrl("player/" + tag);
  }

  async getPlayerChronology(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.playerTag = this.cookieService.get('PLAYER_TAG');
      this.playerName = this.cookieService.get('PLAYER_NAME');
      this.cookiePlayerList = this.cookieService.get('PLAYERS_LIST');

      if (this.playerTag.length == 0 || this.playerName.length == 0 || this.cookiePlayerList.length == 0) {
        this.cookiePlayerList = []
        this.cookiePlayerList.push({ "name": this.playerName, "tag": this.playerTag });
        this.cookieService.set('PLAYERS_LIST', JSON.stringify(this.cookiePlayerList), 365, '/');
      } else {
        this.cookiePlayerList = JSON.parse(this.cookiePlayerList);
        let playerExists = this.cookiePlayerList.some((player: any) => player.tag === this.playerTag);
        if (!playerExists && this.playerTag.length > 0 && this.playerName.length > 0) {
          this.cookiePlayerList.push({ "name": this.playerName, "tag": this.playerTag });
          this.cookieService.set('PLAYERS_LIST', JSON.stringify(this.cookiePlayerList), 365, '/');
        }
      }

      console.log(this.cookiePlayerList)

      resolve();
    });
  }

}
