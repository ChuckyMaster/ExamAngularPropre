import { Component } from '@angular/core';
import { Statistique } from './models/statistique.classe';
import { StatService } from './services/stat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularExam';
  stat: Statistique[];

  constructor(public singletonStat: StatService) {
    this.stat = this.singletonStat.tabStat;
  }

  deleteStat(stat: Statistique) {
    let index = this.stat.indexOf(stat);
    this.stat.splice(index, 1);
    console.log(' HELLO FROM DETELE BUTTON');
  }
}
