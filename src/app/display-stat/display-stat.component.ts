import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique.classe';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.scss'],
})
export class DisplayStatComponent implements OnInit {
  stat: Statistique[];

  constructor(public singletonStat: StatService) {
    this.stat = this.singletonStat.tabStat;
  }

  deleteStat(stat: Statistique) {
    let index = this.stat.indexOf(stat);
    this.stat.splice(index, 1);
    console.log(' HELLO FROM DETELE BUTTON');
  }

  ngOnInit(): void {}
}
