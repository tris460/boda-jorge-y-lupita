import { Routes } from '@angular/router';
import { ByeComponent } from './b-y-e/b-y-e';
import { JorgeYLupitaComponent } from './jorge-y-lupita/jorge-y-lupita';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bety-y-erick', component: ByeComponent },
  { path: 'jorge-y-lupita', component: JorgeYLupitaComponent }
];
