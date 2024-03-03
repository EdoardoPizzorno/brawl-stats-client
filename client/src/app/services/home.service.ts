import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  brawlers: any[] = [];

  constructor(private dataStorage: DataStorageService) { }

  getBrawlers() {
    this.dataStorage.sendRequest('GET', '/brawlers')
      .then((response: any) => {
        this.brawlers = response.data.items;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
