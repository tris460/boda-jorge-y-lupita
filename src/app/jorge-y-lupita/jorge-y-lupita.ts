import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Inicio } from './components/inicio/inicio';
import { Detalles } from './components/detalles/detalles';
import { Ubicacion } from './components/ubicacion/ubicacion';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { Galeria } from './components/galeria/galeria';
import { Itinerario } from './components/itinerario/itinerario';
import { ConfirmarAsistencia } from './components/confirmar-asistencia/confirmar-asistencia';

@Component({
  selector: 'app-jorge-y-lupita',
  imports: [
    Inicio,
    Detalles,
    Ubicacion,
    Contacto,
    Footer,
    Galeria,
    Itinerario,
    ConfirmarAsistencia
  ],
  templateUrl: './jorge-y-lupita.html',
  styleUrl: './jorge-y-lupita.scss'
})
export class JorgeYLupitaComponent implements OnInit {
  protected title = 'jorge-y-lupita';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Boda J&L');
  }
}