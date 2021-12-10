import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique.classe';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  tabStat: Statistique[] = [];

  constructor() {
    let stat1 = new Statistique(
      1462454,
      'Mort du covid',
      4545456456456,
      'Millions de personnes'
    );
    let stat2 = new Statistique(
      7845475,
      'Mort de la grippe',
      4547656565,
      'Millions de personnes'
    );
    let stat3 = new Statistique(
      4876131,
      'Mort de la peste noir',
      45454646,
      'Milliers de personnes'
    );
    this.tabStat.push(stat1, stat2);
  }
}
