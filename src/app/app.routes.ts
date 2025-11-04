import { Routes } from '@angular/router';
import { ByeComponent } from './b-y-e/b-y-e';

export const routes: Routes = [
  { path: 'wedding-b-y-e', component: ByeComponent },
  { path: '', redirectTo: '/wedding-b-y-e', pathMatch: 'full' }
];
