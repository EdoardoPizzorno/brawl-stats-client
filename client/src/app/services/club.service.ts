import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  club: any = {};

  constructor(private dataStorage: DataStorageService) { }

  getClub(tag: string) {
    this.dataStorage.sendRequest("GET", "/clubs/" + tag)
      .then((response) => {
        this.club = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
