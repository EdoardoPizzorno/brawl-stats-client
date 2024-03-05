import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  brawlers: any[] = [];

  constructor(private dataStorage: DataStorageService, private router: Router) { }

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

}
