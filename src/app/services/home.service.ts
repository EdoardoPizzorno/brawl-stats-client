import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataStorage: DataStorageService) { }

  getBrawlers() {
    this.dataStorage.sendRequest('GET', '/brawlers').subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
