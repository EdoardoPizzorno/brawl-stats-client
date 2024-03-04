import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BrawlerService {

  brawler: any = {};

  constructor(private dataStorage: DataStorageService) { }

  getBrawler(id: string) {
    this.dataStorage.sendRequest('GET', "/brawlers/" + id)
      .then((response: any) => {
        this.brawler = response.data;
        console.log(this.brawler)
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

}
