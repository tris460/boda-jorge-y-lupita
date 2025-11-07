import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Inicio } from './components/inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'wedding-j-y-l';
}
