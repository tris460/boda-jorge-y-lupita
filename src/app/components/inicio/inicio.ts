import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('backgroundMusic') audioPlayer!: ElementRef<HTMLAudioElement>;
  
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private interval: any;

  formData = {
    name: '',
    attending: null as string | null,
    guests: '',
    message: ''
  };
  showErrors = false;
  showConfirmation = false;
  isLoading = false;

  ngOnInit() {
    this.startCountdown();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - Iniciando configuración de audio');
    
    // Intentar reproducir el audio automáticamente
    if (this.audioPlayer) {
      const audio = this.audioPlayer.nativeElement;
      audio.volume = 0.3; // Volumen al 30%
      
      console.log('Audio element encontrado:', audio);
      console.log('Audio src:', audio.src);
      
      // Intentar reproducir
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Audio reproduciéndose automáticamente');
          })
          .catch((error) => {
            console.log('❌ Autoplay bloqueado:', error.message);
            console.log('Esperando interacción del usuario...');
            
            // Si falla el autoplay, agregar listeners para reproducir con la primera interacción
            const playOnInteraction = (event: Event) => {
              console.log('🎵 Intentando reproducir audio por interacción:', event.type);
              audio.play()
                .then(() => {
                  console.log('✅ Audio reproduciéndose después de interacción');
                })
                .catch((err) => {
                  console.error('❌ Error al reproducir audio:', err.message);
                });
            };
            
            // Eventos de interacción válidos para reproducir audio
            document.addEventListener('click', playOnInteraction, { once: true });
            document.addEventListener('touchstart', playOnInteraction, { once: true });
            document.addEventListener('touchmove', playOnInteraction, { once: true });
            document.addEventListener('wheel', playOnInteraction, { once: true, passive: true });
            document.addEventListener('keydown', playOnInteraction, { once: true });
            document.addEventListener('mousedown', playOnInteraction, { once: true });
            
            console.log('Listeners agregados para: click, touchstart, touchmove, wheel, keydown, mousedown');
          });
      }
    } else {
      console.error('❌ No se encontró el elemento de audio');
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startCountdown() {
    const weddingDate = new Date('2026-06-06T19:30:00').getTime();
    
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

  onSubmit() {
    this.showErrors = true;
    const isNameValid = this.formData.name && this.formData.name.trim() !== '';
    const isAttendingValid = this.formData.attending !== null;
    
    if (isNameValid && isAttendingValid) {
      this.sendToGoogleSheets();
    }
  }

  isNameInvalid(): boolean {
    return this.showErrors && (!this.formData.name || this.formData.name.trim() === '');
  }

  isAttendingInvalid(): boolean {
    return this.showErrors && this.formData.attending === null;
  }

  resetForm(): void {
    this.formData = {
      name: '',
      attending: null,
      guests: '',
      message: ''
    };
    this.showErrors = false;
    this.showConfirmation = false;
  }

  isFormValid(): boolean {
    const isNameValid = !!(this.formData.name && this.formData.name.trim() !== '');
    const isAttendingValid = this.formData.attending !== null;
    return isNameValid && isAttendingValid;
  }

  sendToGoogleSheets(): void {
    this.isLoading = true;
    const baseUrl = 'https://script.google.com/macros/s/AKfycbyPQdcxtxvLRVFbW0a4btvZU1RyNrS9zlYfKk0H8mI2a7UYULjk3Ciz0yixjX48XCxq/exec';
    const params = new URLSearchParams({
      nombre: this.formData.name,
      asistencia: this.formData.attending === 'true' ? 'Sí' : 'No',
      invitados: this.formData.guests || '1',
      mensaje: this.formData.message || 'Sin mensaje',
      fecha: new Date().toLocaleString('es-MX')
    });
    const webhookUrl = `${baseUrl}?${params.toString()}`;

    fetch(webhookUrl, {
      method: 'GET',
      mode: 'no-cors'
    }).then(() => {
      setTimeout(() => {
        this.isLoading = false;
        this.showConfirmation = true;
      }, 1500);
    }).catch(error => {
      console.error('Error:', error);
      setTimeout(() => {
        this.isLoading = false;
        this.showConfirmation = true;
      }, 1500);
    });
  }
}