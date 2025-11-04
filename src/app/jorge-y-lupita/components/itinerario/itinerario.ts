import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-itinerario',
  imports: [],
  templateUrl: './itinerario.html',
  styleUrl: './itinerario.scss'
})
export class Itinerario implements AfterViewInit {
  
  ngAfterViewInit() {
    setTimeout(() => {
      const items = document.querySelectorAll('.timeline-item');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 150);
          }
        });
      }, { threshold: 0.3 });
      
      items.forEach(item => observer.observe(item));
    }, 100);
  }
}