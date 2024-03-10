import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateParseService {

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

}
