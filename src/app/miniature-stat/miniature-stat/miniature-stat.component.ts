import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique.classe';

@Component({
  selector: 'app-miniature-stat',
  templateUrl: './miniature-stat.component.html',
  styleUrls: ['./miniature-stat.component.scss'],
})
export class MiniatureStatComponent implements OnInit {
  @Input() stat!: Statistique;

  constructor() {}

  ngOnInit(): void {}
}
