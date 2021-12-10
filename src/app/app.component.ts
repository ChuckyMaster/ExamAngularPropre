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
}
