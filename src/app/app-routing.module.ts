import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStatComponent } from './create-stat/create-stat.component';
import { DisplayStatComponent } from './display-stat/display-stat.component';

const routes: Routes = [
  { path: 'display', component: DisplayStatComponent },
  { path: 'create', component: CreateStatComponent },
  { path: '**', redirectTo: 'display' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
