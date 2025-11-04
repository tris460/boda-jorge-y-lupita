import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detalles',
  imports: [],
  templateUrl: './detalles.html',
  styleUrl: './detalles.scss'
})
export class Detalles implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private interval: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startCountdown() {
    const weddingDate = new Date('2026-05-23T19:30:00').getTime();
    
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }, 1000);
  }
}