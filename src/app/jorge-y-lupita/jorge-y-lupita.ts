import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Inicio } from './components/inicio/inicio';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-jorge-y-lupita',
  imports: [
    Inicio,
    Footer,
  ],
  templateUrl: './jorge-y-lupita.html',
  styleUrl: './jorge-y-lupita.scss'
})
export class JorgeYLupitaComponent implements OnInit, AfterViewInit {
  protected title = 'jorge-y-lupita';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Boda J&L');
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-element');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200);
          }
        });
      }, { threshold: 0.3 });
      
      elements.forEach(element => observer.observe(element));
    }, 100);
  }
}