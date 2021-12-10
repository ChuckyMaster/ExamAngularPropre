import { Component } from '@angular/core';
import { Statistique } from './models/statistique.classe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularExam';

  stat1 = new Statistique(1462454, 'Mort du covid', 4545456456456, 'Million');
  stat2 = new Statistique(7845475, 'Mort de la grippe', 4547656565, 'Millions');
}
