import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatNico } from 'src/app/models/stat-nico';
import { Statistique } from 'src/app/models/statistique.classe';

@Component({
  selector: 'app-miniature-stat',
  templateUrl: './miniature-stat.component.html',
  styleUrls: ['./miniature-stat.component.scss'],
})
export class MiniatureStatComponent implements OnInit {
  @Input() stat!: StatNico;
  @Output() delete: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  suppStat() {
    this.delete.emit();
  }
}
