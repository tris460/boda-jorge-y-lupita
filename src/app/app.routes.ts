import { Routes } from '@angular/router';
import { ByeComponent } from './b-y-e/b-y-e';
import { JorgeYLupitaComponent } from './jorge-y-lupita/jorge-y-lupita';

export const routes: Routes = [
  { path: 'wedding-b-y-e', component: ByeComponent },
  { path: 'jorge-y-lupita', component: JorgeYLupitaComponent },
  { path: '', redirectTo: '/wedding-b-y-e', pathMatch: 'full' }
];
