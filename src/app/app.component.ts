import { Component } from '@angular/core';
import { Statistique } from './models/statistique.classe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularExam';

  tabStat: Statistique[] = [];

  stat1 = new Statistique(
    1462454,
    'Mort du covid',
    4545456456456,
    'Millions de personnes'
  );
  stat2 = new Statistique(
    7845475,
    'Mort de la grippe',
    4547656565,
    'Millions de personnes'
  );
  stat3 = new Statistique(
    4876131,
    'Mort de la peste noir',
    45454646,
    'Milliers de personnes'
  );

  constructor() {
    this.tabStat.push(this.stat1, this.stat2);

    setTimeout(() => {
      this.tabStat.push(this.stat3);
    }, 5000);
  }
}
