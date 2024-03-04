import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player: any = {};
  trophiesDrawdown: number = 0;

  constructor(private dataStorage: DataStorageService) { }

  getPlayer(tag: string) {
    this.dataStorage.sendRequest('GET', '/players/' + tag)
      .then((response: any) => {
        this.player = response.data;
        
        if (this.player.trophies == this.player.highestTrophies) this.trophiesDrawdown = 0;
        else this.trophiesDrawdown = -(Math.round((this.player.highestTrophies) / (this.player.trophies)), 2) / 100;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

}
