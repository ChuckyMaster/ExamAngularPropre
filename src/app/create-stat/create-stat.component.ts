import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Statistique } from '../models/statistique.classe';

import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-create-stat',
  templateUrl: './create-stat.component.html',
  styleUrls: ['./create-stat.component.scss'],
})
export class CreateStatComponent implements OnInit {
  constructor(public singleTonStat: StatService, public router: Router) {}

  ngOnInit(): void {}

  public form: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 60000)),
    title: new FormControl(''),
    value: new FormControl(''),
    unit: new FormControl(''),
  });

  onSubmit() {
    let stat = new Statistique(
      this.form.controls['id'].value,
      this.form.controls['title'].value,
      this.form.controls['value'].value,
      this.form.controls['unit'].value
    );
    this.singleTonStat.tabStat.push(stat);

    this.router.navigate(['display']);
  }
}
